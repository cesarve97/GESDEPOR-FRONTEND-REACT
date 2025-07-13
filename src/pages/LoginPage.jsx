import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await authService.login(email, password);
            navigate('/dashboard'); // Redirige al panel principal tras el login
            window.location.reload(); // Recarga para que toda la app sepa del login
        } catch (err) {
            // --- CÓDIGO MEJORADO ---
            console.error("FALLÓ EL INTENTO DE LOGIN. Objeto de error completo:", err);

            // Esto nos dará pistas cruciales si el error no es del backend (ej. un problema de red)
            if (err.response) {
                // El servidor respondió con un código de estado fuera del rango 2xx
                console.error("Datos del error:", err.response.data);
                console.error("Estado del error:", err.response.status);
                const errorMessage = err.response.data.message || 'Credenciales incorrectas.';
                setError(errorMessage);
            } else if (err.request) {
                // La petición se hizo pero no se recibió respuesta
                console.error("No se recibió respuesta del servidor. ¿Está el backend online? ¿Hay un problema de CORS o de red?");
                setError("No se pudo conectar con el servidor. Revisa tu conexión a internet.");
            } else {
                // Algo pasó al configurar la petición que disparó un Error
                console.error('Error al configurar la petición:', err.message);
                setError("Ocurrió un error inesperado. Inténtalo de nuevo.");
            }
            // --- FIN DEL CÓDIGO MEJORADO ---
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default LoginPage;