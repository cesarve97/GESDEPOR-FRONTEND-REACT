import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const response = await authService.registrar(formData.nombre, formData.apellido, formData.email, formData.password);
            setMessage(response.data.message + " Serás redirigido al login.");
            setTimeout(() => {
                navigate('/login');
            }, 3000); // Espera 3 segundos antes de redirigir
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al registrar el usuario.';
            setError(errorMessage);
        }
    };

    return (
        <div>
            <h2>Crear Cuenta</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {message && <p style={{ color: 'green' }}>{message}</p>}
                <button type="submit">Registrarme</button>
            </form>
        </div>
    );
};

export default RegisterPage;