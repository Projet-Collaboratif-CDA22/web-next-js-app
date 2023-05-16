import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {Database} from "@/types/supabase";

export default function LogoutButton() {
  const supabase = useSupabaseClient<Database>();

  return (
    <button className="button block" onClick={() => supabase.auth.signOut()}>
      Sign Out
    </button>
  );
}
