// Archivo: src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importa tus componentes de página
import HomePage from './pages/HomePage'; // <-- ¡IMPORTA LA NUEVA PÁGINA!
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Este es solo un ejemplo, puedes borrarlo si ya tienes el tuyo
const DashboardPage = () => <h2>Bienvenido a tu Panel</h2>; 

function App() {
    // Podrías tener una lógica aquí para ver si el usuario está logueado
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'));

    return (
        <Router>
            {/* Opcional: Podrías mostrar una barra de navegación diferente si el usuario está logueado */}
            {!usuarioLogueado && (
                 <nav className="main-nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/registro">Registro</Link>
                </nav>
            )}

            <main>
                <Routes>
                    {/* --- RUTA PRINCIPAL --- */}
                    <Route path="/" element={<HomePage />} /> 

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registro" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} /> 
                </Routes>
            </main>
        </Router>
    );
}

// Estilo simple para la barra de navegación (puedes moverlo a un archivo CSS)
const navStyle = `
  .main-nav {
    background-color: #333;
    padding: 1rem;
    text-align: center;
  }
  .main-nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = navStyle;
document.head.appendChild(styleSheet);


export default App;