import { NavLink, Link } from 'react-router-dom';
import './Nav.css';
import { useState } from 'react';

export const Nav = ({ mostrar,
    menuAbierto,
    cerrando,
    cerrarMenu }) => {

    return (
        <nav>
            <ul
                className={`
        nav-list
        ${menuAbierto ? "abierto" : ""}
        ${cerrando ? "slideOut" : ""}
    `}
            >

                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "activo" : ""}
                        onClick={cerrarMenu}
                    >
                        Inicio
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/Catalogo"
                        className={({ isActive }) => isActive ? "activo" : ""}
                        onClick={cerrarMenu}
                    >
                        Catalogo
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/Nosotros"
                        className={({ isActive }) => isActive ? "activo" : ""}
                        onClick={cerrarMenu}
                    >
                        Quienes somos
                    </NavLink>
                </li>

            </ul>

        </nav>
    )
}