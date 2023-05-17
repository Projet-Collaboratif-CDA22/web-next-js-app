import { getAllUsers, updateUserRole } from "@/services/admin/admin.service";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Spinner, Table } from "react-bootstrap";
import { User, eRole } from "@/types/definition";

interface UserRoleProps {
  role: eRole;
  userId: string;
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [error, fetchError] = useState<any>();
  const [role, setRole] = useState<UserRoleProps>();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await getAllUsers();
      if (error) {
        console.log(error.message);
        setUsers([]);
        fetchError(error);
      } else {
        setUsers(data);
        fetchError(null);
        setLoading(false);
      }
    };
    fetchUsers();
  }, [users]);

  useEffect(() => {
    const setInactive = async () => {
      if (!role || !role?.userId || !role?.role) return;
      const { data, error } = await updateUserRole(role?.userId!, role?.role!);
      if (error) {
        alert(error.message);
        return;
      } else {
        alert("La catégorie a été désactivée");
        return;
      }
    };
    setInactive();
  }, [role]);

  return (
    <Container fluid="md">
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
      )}
      {loading && error && (
        <Alert key="warning" variant="warning">
          error.message
        </Alert>
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Utilisateur</th>
            <th>Etat</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.full_name}</td>
              <td>{user.is_active ? "actif" : "inactif"}</td>
              <td>{user.role}</td>
              <td>
                {/* <Button
                  disabled={!user.is_active}
                  onClick={() => setRole({user.id, eRole.admin})}
                >
                  Rendre inactif
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
