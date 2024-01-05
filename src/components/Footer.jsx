import Apple from "../assets/app_apple.png";
import Android from "../assets/google_play.png";
import LogoChico from "./LogoA";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#">
                                    <i className="fa-brands fa-facebook fa-lg"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#">
                                    <i className="fa-brands fa-youtube fa-lg"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#">
                                    <i className="fa-brands fa-instagram fa-lg"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fs-5" href="#">
                                    <i className="fa-brands fa-twitter fa-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <a href="#" className="mx-1">
                            <img src={Apple} width={115} alt={"Apple"} />
                        </a>
                        <a href="#">
                            <img src={Android} width={126} alt={"Android"} />
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-secondary f-6" href="#">
                                    Politica de Privacidad
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary f-6" href="#">
                                    Defensa del Consumidor
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary f-6" href="#">
                                    Proteccion de datos personales
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary f-6" href="#">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p>
                            <LogoChico />© Deportes Centro 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
