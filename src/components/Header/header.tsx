import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Header() {
  const session = useSession();
  const supabase = useSupabaseClient();

  const [message, setMessage] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>();

  useEffect(() => {
    if (session) {
      setIsConnected(true);
      setMessage("Mon compte");
    } else {
      setIsConnected(false);
      setMessage("Connexion");
    }
  }, [session]);

  function fakeConnectionBehaviour() {
    // setIsConnected(!isConnected);
  }

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
              <Nav.Link
                className="nav-link"
                href="#"
                onClick={() => fakeConnectionBehaviour()}
              >
                Fake {message}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
