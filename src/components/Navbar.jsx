// Archivo: src/components/Navbar.jsx (Actualizado con Logo)

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import '../css/Layout.css'; // Usaremos un archivo CSS central para el layout

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));
        if (usuarioLogueado) {
            setUser(usuarioLogueado.usuario);
        }
    }, []);

    const handleLogout = () => {
        authService.logout();
        setUserMenuOpen(false);
        navigate('/');
        window.location.reload();
    };

    const closeAllMenus = () => {
        setMobileMenuOpen(false);
        setUserMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="navbar-brand">
                    {/* --- INICIO DE LA MODIFICACIÓN --- */}
                    <Link to="/" className="navbar-logo-link" onClick={closeAllMenus}>
                        <img 
                            src="/logo.webp" // Ruta directa al archivo en la carpeta /public
                            alt="GesDepor Logo" 
                            className="navbar-logo-img" 
                        />
                        {/* El texto del logo se ocultará en pantallas pequeñas */}
                        <span className="navbar-logo-text">GesDepor</span>
                    </Link>
                    {/* --- FIN DE LA MODIFICACIÓN --- */}
                </div>

                {/* --- Menú para Escritorio --- */}
                <div className="navbar-menu-desktop">
                    <Link to="/" className="navbar-item">Inicio</Link>
                    <Link to="/centros" className="navbar-item">Centros Deportivos</Link>
                    <Link to="/deportes" className="navbar-item">Deportes</Link>
                    <Link to="/contacto" className="navbar-item">Contacto</Link>
                </div>

                {/* --- Botones de Sesión / Menú de Usuario --- */}
                <div className="navbar-session">
                    {!user ? (
                        <div className="session-buttons">
                            <Link to="/login" className="btn btn-secondary">Iniciar Sesión</Link>
                            <Link to="/registro" className="btn btn-primary">Registrarse</Link>
                        </div>
                    ) : (
                        <div className="user-menu-container">
                            <button onClick={() => setUserMenuOpen(!isUserMenuOpen)} className="user-menu-button">
                                Hola, <span className="user-name">{user.nombre}</span>
                                <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            {isUserMenuOpen && (
                                <div className="user-dropdown">
                                    <Link to="/dashboard" onClick={closeAllMenus} className="dropdown-item">Mi Panel</Link>
                                    <Link to="/perfil" onClick={closeAllMenus} className="dropdown-item">Mi Perfil</Link>
                                    <button onClick={handleLogout} className="dropdown-item dropdown-item-logout">
                                        Cerrar Sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* --- Botón de Menú Móvil (Hamburguesa) --- */}
                <div className="navbar-mobile-toggle">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
            </div>

            {/* --- Menú Desplegable para Móvil --- */}
            {isMobileMenuOpen && (
                <div className="navbar-menu-mobile">
                    <Link to="/" className="navbar-item-mobile" onClick={closeAllMenus}>Inicio</Link>
                    <Link to="/centros" className="navbar-item-mobile" onClick={closeAllMenus}>Centros Deportivos</Link>
                    <Link to="/deportes" className="navbar-item-mobile" onClick={closeAllMenus}>Deportes</Link>
                    <Link to="/contacto" className="navbar-item-mobile" onClick={closeAllMenus}>Contacto</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;