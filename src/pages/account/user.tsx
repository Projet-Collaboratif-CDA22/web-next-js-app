import { getRolesByUserId, getUserById } from "@/services/user/userServices";
import { eRole } from "@/types/definition";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Container, Button, Row } from "react-bootstrap";

export default function Home() {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [member, setMember] = useState<eRole>();

  function handleClick() {
    console.log(session);
    console.log(user);
    console.log(session?.user.role);
    console.log(member?.toString());
  }

  useEffect(() => {
    const getRole = async () => {
      if (!session || !session.user.id || !user) {
        setMember(eRole.none);
        return;
      }
      const role: eRole | undefined = await getRolesByUserId(user!.id);
      console.log("role response : ", role);
      if (role === undefined) {
        setMember(eRole.none);
      } else {
        setMember(role);
      }
      console.log("role : ", role);
    };
    getRole();
  }, [session, user]);

  function logout() {
    supabase.auth.signOut();
  }
  return (
    <Container fluid>
      {session && <p>Connecté !! Hello : {member}</p>}
      {!session && <p>Pas connecté </p>}
      <Row>
        <Button onClick={() => handleClick()}>Click me to catch session</Button>
      </Row>
      <Row>
        <Button onClick={() => logout()} className="">
          Logout
        </Button>
      </Row>
    </Container>
  );
}
