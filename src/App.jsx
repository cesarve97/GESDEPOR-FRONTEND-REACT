import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage'; // Crea un componente simple para la página de inicio

// Un componente de ejemplo para el panel de usuario
const DashboardPage = () => <h2>Bienvenido a tu Panel</h2>; 

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link> | <Link to="/login">Login</Link> | <Link to="/registro">Registro</Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registro" element={<RegisterPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} /> 
                </Routes>
            </main>
        </Router>
    );
}

export default App;