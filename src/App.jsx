import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa el Layout y tus páginas
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Componentes de ejemplo para las nuevas rutas
const CentrosPage = () => <div className="container"><h1>Página de Centros Deportivos</h1></div>;
const DeportesPage = () => <div className="container"><h1>Página de Deportes</h1></div>;
const ContactoPage = () => <div className="container"><h1>Página de Contacto</h1></div>;
const DashboardPage = () => <div className="container"><h1>Mi Panel de Usuario</h1></div>;
const PerfilPage = () => <div className="container"><h1>Mi Perfil</h1></div>;


function App() {
    return (
        <Router>
            {/* El Layout envuelve a todas las rutas */}
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registro" element={<RegisterPage />} />
                    
                    {/* Añade aquí las nuevas rutas */}
                    <Route path="/centros" element={<CentrosPage />} />
                    <Route path="/deportes" element={<DeportesPage />} />
                    <Route path="/contacto" element={<ContactoPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/perfil" element={<PerfilPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;