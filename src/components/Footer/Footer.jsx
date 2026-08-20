import "./Footer.css"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.jpg"
import { MdAlternateEmail } from "react-icons/md"
import { FaPhone, FaWhatsapp } from "react-icons/fa"
import { SiGooglemaps } from "react-icons/si"
export const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <img src={logo} alt="Logotipo Dyce S.A." className="imagen_logo" />
                <p>Proveedor Lider en ventas al gremio de componentes electrónicos de alta calidad
                    para la industria y el desarrollo tecnológico.</p>
            </div>
            <div className="footerContainer">
                <h3>ENLACES</h3>
                <ul
                    className="ul_footer"
                >

                    <li>
                        <NavLink
                            to="/"
                        >
                            Inicio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/Catalogo"

                        >
                            Catalogo
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/Nosotros"
                        >
                            Nosotros
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/Contacto"
                        >
                            Contacto
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div>
                <h3 className="title_contacto">CONTACTO</h3>
                <ul className="ul_footer">
                    <li><MdAlternateEmail /> <a href="mailto:info@dyce.com.ar"> info@dyce.com.ar</a></li>
                    <li><FaPhone /> +54 11 5486 9502</li>
                    <li><FaWhatsapp /> +54 11 4931-0069</li>
                    <li><SiGooglemaps />
                        <a href="https://maps.app.goo.gl/dZAQV5zCt3ui8BYw7" target="_blank" rel="noopener noreferrer">México 4067, C1223 Cdad. Autónoma de Buenos Aires</a></li>
                </ul>
            </div>
        </footer>
    )
}
