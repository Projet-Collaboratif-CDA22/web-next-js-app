import Image from "next/image";

function Header() {
    return (
        <header id="header" className="header bg-white fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    <Image src="/logo_temp.png" alt="Logo" width={35} height={35} />
                    <span>CESI Match</span>
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li className="dropdown"><a href="#"><span>Modération</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">a 1</a></li>
                                <li className="dropdown"><a href="#"><span>Administration</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">admin 1</a></li>
                                        <li><a href="#">admin 2</a></li>
                                        <li><a href="#">admin 3</a></li>
                                        <li><a href="#">admin 4</a></li>
                                        <li><a href="#">admin 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">a . b . 2</a></li>
                                <li><a href="#">a . b . 3</a></li>
                                <li><a href="#">a . b . 4</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#a">a 1</a></li>
                        <li><a className="nav-link scrollto" href="#b">a 2</a></li>
                        <li><a className="nav-link scrollto" href="#c">a 3</a></li>
                        <li><a className="nav-link scrollto" href="#d">a 4</a></li>
                        <li className="dropdown"><a href="#"><span>Compte</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a href="/login">Se connecter</a></li>
                                <li><a href="/signin">S&apos;inscrire</a></li>
                                <li><a href="/logout">Se déconnecter</a></li>
                            </ul>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    );
}

export default Header;