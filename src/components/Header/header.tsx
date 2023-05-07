import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [message, setMessage] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    if (isConnected) {
      setMessage("Mon compte");
    } else {
      setMessage("Connexion");
    }
  }, [isConnected]);

  function fakeConnectionBehaviour() {
    setIsConnected(!isConnected);
  }

  const menuCompte = [
    {
      title: "Mon profil",
      route: "/profile",
    },
    {
      title: "Mes cours",
      route: "/courses",
    },
    {
      title: "Me déconnecter",
      route: "/logout",
    },
  ];
  const menuConnexion = [
    {
      title: "Se connecter",
      route: "/login",
    },
    {
      title: "S'inscrire",
      route: "/register",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <Image
              src="/logo_temp.png"
              alt="Logo"
              width={35}
              height={35}
              className="mx-2"
              style={{}}
            />
            CESI Match
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/course">
                  Cours
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  Infos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/account">
                  {message}
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => fakeConnectionBehaviour()}
                >
                  {"fake" + message}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
