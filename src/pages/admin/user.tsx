import UserTable from "@/components/User/UserTable";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid="md">
      <UserTable />
    </Container>
  );
}
