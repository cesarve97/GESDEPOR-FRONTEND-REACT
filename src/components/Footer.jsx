// Archivo: src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Layout.css'; // Reutilizamos los mismos estilos

const Footer = () => {
    return (
        <footer className="footer" id="contacto">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3 className="footer-title">GesDepor</h3>
                        <p className="footer-description">
                            La plataforma líder en gestión y alquiler de centros deportivos.
                        </p>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-title">Plataforma</h3>
                        <ul className="footer-links">
                            <li><Link to="/centros">Buscar Canchas</Link></li>
                            <li><Link to="/propietario/dashboard">Soy Propietario</Link></li>
                            <li><Link to="/precios">Precios</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-title">Soporte</h3>
                        <ul className="footer-links">
                            <li><Link to="/ayuda">Centro de Ayuda</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-title">Contacto</h3>
                        <ul className="footer-links">
                            <li>📧 info@gesdepor.com</li>
                            <li>📞 +51 900 123 456</li>
                            <li>📍 Lima, Perú</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} GesDepor. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;