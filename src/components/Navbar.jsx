import CartWidget from "./CartWidget";
import LogoChico from "./LogoA";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top ">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    <LogoChico />
                </Link>
                <div className=" navbar">
                    <NavLink
                        className="nav-link active p-3 fs-5"
                        aria-current="page"
                        to={"/"}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className="nav-link text-dark p-3 fs-5"
                        active classname="active"
                        to={"/categoria/remeras"}
                    >
                        Remeras
                    </NavLink>
                    <NavLink
                        className="nav-link text-dark p-3 fs-5"
                        activeclassname="active"
                        to={"/categoria/pelotas"}
                    >
                        Pelotas
                    </NavLink>
                    <NavLink
                        className="nav-link text-dark p-3 fs-5"
                        activeclassname="active"
                        to={"/categoria/zapatillas"}
                    >
                        Zapatillas
                    </NavLink>
                    <NavLink
                        className="nav-link text-dark p-3 fs-5"
                        activeclassname="active"
                        to={"/categoria/shorts"}
                    >
                        Shorts
                    </NavLink>
                    <NavLink
                        className="nav-link text-dark p-3 fs-5"
                        activeclassname="active"
                        to={"/ItemListContainer2"}
                    >
                        Premium
                    </NavLink>
                    <NavLink
                        className="nav-link text-dark p-3 fs-5"
                        activeclassname="active"
                        to={"/Articulos2"}
                    >
                        Importados
                    </NavLink>
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
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to={"/"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={"/categoria/remeras"}
                                >
                                    Remeras
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to={"/categoria/zapatillas"}
                                >
                                    Zapatillas
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to={"/categoria/shorts"}
                                >
                                    Shorts
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={"/categoria/pelotas"}
                                >
                                    Pelotas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={"/ItemListContainer2"}
                                >
                                    Premium
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/Articulos2"}>
                                    Importados
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Deportes
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            Futbol
                                        </NavLink>
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
                                        <NavLink
                                            className="dropdown-item"
                                            href="#"
                                        >
                                            Rugby
                                        </NavLink>
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
