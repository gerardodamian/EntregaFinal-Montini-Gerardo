import CartWidget from "./CartWidget";
import LogoChico from "./LogoA";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    <LogoChico />
                </Link>
                <div className=" navbar">
                    <Link
                        className="nav-link active p-3"
                        aria-current="page"
                        to={"/"}
                    >
                        Home
                    </Link>

                    <Link className="nav-link p-3" href="#">
                        Remeras
                    </Link>
                    <Link className="nav-link p-3" href="#">
                        Pelotas
                    </Link>
                    <Link className="nav-link p-3" aria-disabled="true">
                        Zapatillas
                    </Link>
                    <Link className="nav-link p-3" aria-disabled="true">
                        Shorts
                    </Link>
                    <Link className="nav-link p-3" to={"/Articulos2"}>
                        Importados
                    </Link>
                </div>
                <CartWidget />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                        <Link className="navbar-brand" to={"/"}>
                    <LogoChico />
                </Link>
                            <CartWidget />
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to={"/"}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    Remeras
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    Zapatillas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    Shorts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Pelotas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/Articulos2"}>
                                    Importados
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Deportes
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            Futbol
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            Basquet
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            Rugby
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                buscar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
