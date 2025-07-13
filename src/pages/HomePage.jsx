import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css'; // Usaremos un archivo CSS dedicado
import SearchForm from '../components/SearchForm';

// Componente para una tarjeta de característica individual
const FeatureCard = ({ icon, title, children }) => (
    <div className="feature-card">
        <div className="feature-card-icon-wrapper">
            <span className="feature-card-icon">{icon}</span>
        </div>
        <div>
            <h3 className="feature-card-title">{title}</h3>
            <p className="feature-card-description">{children}</p>
        </div>
    </div>
);

// Componente para una estadística individual
const StatItem = ({ value, label }) => (
    <div className="stat-item">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
    </div>
);

const HomePage = () => {
    return (
        <div className="homepage-container">
            {/* --- Sección Principal Combinada (Hero + Features) --- */}
            <section className="main-view-section">
                <div className="container main-view-grid">
                    
                    {/* --- 1. Hero Section (Izquierda) --- */}
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Reserva tu <span className="hero-highlight-text">Campo Deportivo</span>
                            <span className="hero-subtitle">Fácil, Rápido y Seguro</span>
                        </h1>
                        <p className="hero-description">
                            Descubre y asegura tu espacio ideal para practicar tu deporte favorito en solo unos clics.
                        </p>
                        <div className="hero-actions">
                            <Link to="/centros" className="btn-hero btn-hero-primary">
                                🏟️ Buscar Centros
                            </Link>
                            <Link to="/instalaciones" className="btn-hero btn-hero-secondary">
                                ⚽ Ver Canchas
                            </Link>
                        </div>
                    </div>
                    
                    {/* --- 2. Features Section (Derecha) --- */}
                    <div className="features-content">
                         <div className="section-header">
                            <h2 className="section-title">¿Por qué GesDepor?</h2>
                        </div>
                        <div className="features-grid">
                            <FeatureCard icon="📱" title="Reserva 100% Online">
                                Elige tu deporte, fecha y hora desde cualquier dispositivo.
                            </FeatureCard>
                            <FeatureCard icon="💳" title="Pago Fácil y Seguro">
                                Realiza el pago de tu reserva y recibe confirmación inmediata.
                            </FeatureCard>
                            <FeatureCard icon="⭐" title="Opiniones Reales">
                                Consulta valoraciones de otros usuarios antes de reservar.
                            </FeatureCard>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- 3. Quick Search Form --- */}
            <SearchForm />

            {/* --- 4. Stats Section --- */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <StatItem value="500+" label="Centros Afiliados" />
                        <StatItem value="10K+" label="Usuarios Activos" />
                        <StatItem value="50K+" label="Reservas Completadas" />
                        <StatItem value="25" label="Ciudades Disponibles" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;