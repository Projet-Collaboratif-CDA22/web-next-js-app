import Image from "next/image";

function Header() {
  return (
    <>
      <header id="header" className="header bg-white fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <Image src="/logo_temp.png" alt="Logo" width={35} height={35} />
            <span>CESI Match</span>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li className="dropdown">
                <a href="src/components/Header#">
                  <span>Modération</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="src/components/Header#">a 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="src/components/Header#">
                      <span>Administration</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="src/components/Header#">admin 1</a>
                      </li>
                      <li>
                        <a href="src/components/Header#">admin 2</a>
                      </li>
                      <li>
                        <a href="src/components/Header#">admin 3</a>
                      </li>
                      <li>
                        <a href="src/components/Header#">admin 4</a>
                      </li>
                      <li>
                        <a href="src/components/Header#">admin 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="src/components/Header#">a . b . 2</a>
                  </li>
                  <li>
                    <a href="src/components/Header#">a . b . 3</a>
                  </li>
                  <li>
                    <a href="src/components/Header#">a . b . 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="src/components/Header#a">
                  a 1
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="src/components/Header#b">
                  a 2
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="src/components/Header#c">
                  a 3
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="src/components/Header#d">
                  a 4
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="src/components/Header#">
                  a 5
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
