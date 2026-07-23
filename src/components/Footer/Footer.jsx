import "./Footer.css"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.jpg"
import { MdAlternateEmail } from "react-icons/md"
import { FaPhone, FaWhatsapp } from "react-icons/fa"
import { SiGooglemaps } from "react-icons/si"
import { MapsLink } from "../MapsLink/MapsLink"
export const Footer = () => {
    return (
        <footer>
            <div>
<<<<<<< HEAD
                <img src={logo} alt="Logotipo Dyce S.A." className="imagen_logo" />
                <p className="titulo_footer">Dyce S.A.</p>
                <p>Proveedor Lider de componentes electrónicos de alta calidad
                    para la industria y el desarrollo tecnológico.</p>
=======
                <img src={logo} alt="Dyce S.A." className="imagen_logo"/>
                <p className="titulo_footer">Dyce S.A.</p>
                <p>Proveedor Lider en ventas al gremio de componentes electrónicos de alta calidad
                 para la industria y el desarrollo tecnológico.</p>
>>>>>>> main
            </div>
            <div>
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
                <h3>CONTACTO</h3>
                <ul className="ul_footer">
                    <li><MdAlternateEmail/> <a href="mailto:info@dyce.com.ar"> info@dyce.com.ar</a></li>
                    <li><FaPhone/> +54 11 5486 9502</li>
                    <li><FaWhatsapp/> +54 11 4931-0069</li>
                    <li><SiGooglemaps/>
                    <a href="https://maps.app.goo.gl/dZAQV5zCt3ui8BYw7" target="_blank" rel="noopener noreferrer">México 4067, C1223 Cdad. Autónoma de Buenos Aires</a></li>
                </ul>
            </div>
        </footer>
    )
}