import { Nav } from "../Nav/Nav";
import {Botones} from "../Botones/Botones";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import './Header.css';

export const Header = () => {
const [menuAbierto, setMenuAbierto] = useState(false);


    return (
        <header>
            <div className="headerContainer">
                <div className="menuHambur">
                    <ion-icon name="menu-outline" className="menuResponsive active" onClick={() => setMenuAbierto(!menuAbierto)}></ion-icon>
                </div>
                <div className="headerContainerImg">
                    <img src={logo} alt="Logo Diseños y Compronentes Electrónicos" className="imagen_logo" />
                </div>
            </div>
            <Nav menuAbierto={menuAbierto} />
        </header>
    )
}