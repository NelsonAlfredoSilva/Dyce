import { Nav } from "../Nav/Nav";
import logo from "../../assets/logo.jpg";
import './Header.css';

export const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="Logo Diseños y Compronentes Electrónicos" className="imagen_logo" />
                <span>Diseños y Componentes Electrónicos</span>
            </div>
            <Nav/>
        </header>
    ) 
}