import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Container, Button, Row } from "react-bootstrap";

export default function Home() {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();

  function handleClick() {
    console.log(session);
    console.log(user);
    debugger;
    console.log(session?.user.role);
  }

  function logout() {
    supabase.auth.signOut();
  }
  return (
    <Container fluid>
      {session && <p>Connecté !!</p>}
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
