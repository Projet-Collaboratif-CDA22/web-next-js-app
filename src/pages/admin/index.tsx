import { getRolesByUserId } from "@/services/user/userServices";
import { eRole } from "@/types/definition";
import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Container, Button, Row } from "react-bootstrap";

export default function Home() {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [member, setMember] = useState<eRole>(eRole.none);

  function handleClick() {}

  useEffect(() => {
    const getRole = async () => {
      const role: eRole | undefined = await getRolesByUserId(session!.user.id);
      if (role === undefined) {
        setMember(eRole.none);
      } else {
        setMember(role);
      }
    };
    if (session) {
      getRole();
    }
  }, [session]);

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
