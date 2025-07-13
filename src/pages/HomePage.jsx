// Archivo: src/pages/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css'; // Importaremos los estilos que crearemos a continuación

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <header className="homepage-header">
                    <h1 className="homepage-title">GesDepor</h1>
                    <p className="homepage-subtitle">Encuentra tu cancha, reserva tu pasión.</p>
                </header>

                <main className="homepage-main">
                    <p className="homepage-description">
                        La plataforma definitiva para conectar a deportistas con los mejores
                        centros deportivos. Busca instalaciones, comprueba la disponibilidad
                        y reserva tu espacio en minutos.
                    </p>
                </main>

                <footer className="homepage-actions">
                    <Link to="/registro" className="btn btn-primary">
                        Crear una Cuenta
                    </Link>
                    <Link to="/login" className="btn btn-secondary">
                        Iniciar Sesión
                    </Link>
                </footer>
            </div>
            <div className="homepage-background-overlay"></div>
        </div>
    );
};

export default HomePage;