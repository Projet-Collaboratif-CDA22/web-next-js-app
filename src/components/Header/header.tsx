import { getRolesByUserId } from "@/services/user/userServices";
import { eRole } from "@/types/definition";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Header() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();

  const [message, setMessage] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>();
  const [member, setMember] = useState<eRole>(eRole.none);

  useEffect(() => {
    if (session) {
      // const getRolesByUserId;
      setIsConnected(true);
      setMessage("Mon compte");
    } else {
      setIsConnected(false);
      setMember(eRole.none);
      setMessage("Connexion");
    }
  }, [session]);

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

  function handleLogout() {
    debugger;
    if (session) {
      supabase.auth.signOut();
    }
    return;
  }
  const messageInscrire: string = "S'inscrire";
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/logo_temp.png"
              alt="Logo"
              width={35}
              height={35}
              className="mx-2"
              style={{}}
            />
            Cesi Match
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/">
                Accueil
              </Nav.Link>
              <NavDropdown title="Cours" id="basic-nav-dropdown">
                <NavDropdown.Item href="/course">
                  Consulter les cours
                </NavDropdown.Item>
                {isConnected && (
                  <NavDropdown.Item href="/course/add">
                    Ajouter un cours
                  </NavDropdown.Item>
                )}
              </NavDropdown>
              <Nav.Link className="nav-link" href="/about">
                Infos
              </Nav.Link>
              <NavDropdown title={message} id="basic-nav-dropdown">
                <NavDropdown.Item href="/account/user">
                  Infos session
                </NavDropdown.Item>

                {isConnected && (
                  <>
                    <NavDropdown.Item href="#">Mon profil</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Mes cours suivis
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Mes cours proposés
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={() => handleLogout()}>
                      Me déconnecter
                    </NavDropdown.Item>
                  </>
                )}
                {!isConnected && (
                  <>
                    <NavDropdown.Item href="/account/">
                      Se connecter
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      {messageInscrire}
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
              {isConnected && member === eRole.admin && (
                <NavDropdown title="Administration" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/admin/user">
                    Gestion des utilisateurs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/admin/course">
                    Gestion des cours
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/admin/misc">Divers</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/statistiques">
                    Statistiques
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
