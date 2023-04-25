import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { Database } from "@/types/supabase";
import LogoutButton from "@/components/Buttons/LogoutButton";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [username, setUsername] = useState<Profiles["username"]>(null);

  useEffect(() => {
    getProfile();
  }, [session]);
  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function updateProfile() {
    try {
      const updates = {
        id: user?.id ?? "",
        username: username,
        updated_at: new Date().toDateString(),
        full_name: "",
        avatar_url: "",
        website: "",
      };

      let { status, error } = await supabase.from("profiles").upsert(updates);
      if (error) {
        throw error;
      }
      if (status === 201 || status === 200) {
        alert("Profile updated");
      }
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={(e) => {
            e.preventDefault();
            updateProfile();
          }}
        >
          Update
        </button>
      </div>

      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
