import { Nav } from "../Nav/Nav";
import { Link } from 'react-router-dom';
import { useState } from "react";
import logo from "../../assets/logo.png";
import './Header.css';

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const [cerrando, setCerrando] = useState(false);

    const abrirMenu = () => {

        setMostrarMenu(true);

        setMenuOpen(true);

        setCerrando(false);

    };

    const cerrarMenu = () => {

        setCerrando(true);

        setTimeout(() => {

            setMenuOpen(false);

            setMostrarMenu(false);

            setCerrando(false);

        }, 350);

    };

    return (
        <header>

            <div className="headerContainer">

                <div className="menuHambur">

                    <ion-icon
                        name={menuOpen ? "close-outline" : "menu-outline"}
                        className="menuResponsive"
                        onClick={() => {

                            if(menuOpen){

                                cerrarMenu();

                            }else{

                                abrirMenu();

                            }

                        }}
                    ></ion-icon>

                </div>

                <Link
                    className="headerContainerImg"
                    to={`/`}
                >
                    <img
                        src={logo}
                        alt="Logo Diseños y Compronentes Electrónicos"
                        className="imagen_logo"
                    />
                </Link>

            </div>

            <Nav
                mostrar={mostrarMenu}
                menuAbierto={menuOpen}
                cerrando={cerrando}
                cerrarMenu={cerrarMenu}
            />

        </header>
    );

}