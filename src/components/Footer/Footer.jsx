import "./Footer.css"
import logo from "../../assets/logo.jpg"
export const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt="Logotipo Dyce S.A." className="imagen_logo"/>
                <p className="titulo_footer">Dyce S.A.</p>
                <p>Proveedor Lider de componentes electrónicos de alta calidad
                 para la industria y el desarrollo tecnológico.</p>
            </div>
            <div>
                <h3>ENLACES</h3>
                <ul className="ul_footer">
                    <li>Inicio</li>
                    <li>Catálogo</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div>
                <h3>CONTACTO</h3>
                <ul className="ul_footer">
                    <li>info@correo.com</li>
                    <li>+54 11 444-1234</li>
                    <li>Buenos Aires, Argentina</li>
                </ul>
            </div>
        </footer>
    ) 
}