import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Container, Button } from "react-bootstrap";

export default function Home() {
  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();

  function handleClick() {
    console.table(session);
  }
  return (
    <Container fluid>
      {session && <p>Connecté !!</p>}
      {!session && <p>Pas connecté </p>}
      <Button onClick={() => handleClick()}> Click me to catch session</Button>
    </Container>
  );
}
