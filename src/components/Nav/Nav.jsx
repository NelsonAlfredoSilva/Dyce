import { NavLink, Link } from 'react-router-dom';
import './Nav.css';

export const Nav = ({menuAbierto}) => {
    console.log('menuAbierto en Nav:', menuAbierto)
    return (
        <nav>
            <ul className={menuAbierto ? 'nav-list abierto' : 'nav-list'}>
                <li>
                        <NavLink to={`/`} className={({ isActive }) => isActive ? 'activo' : ''}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/Catalogo`} className={({ isActive }) => isActive ? 'activo' : ''}>Catalogo</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/Nosotros`} className={({ isActive }) => isActive ? 'activo' : ''}>Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/Contacto`} className={({ isActive }) => isActive ? 'activo' : ''}>Contacto</NavLink>
                    </li>
            </ul>
        </nav>
    ) 
}