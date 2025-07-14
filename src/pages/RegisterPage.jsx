import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import '../css/RegisterPage.css';

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
        <div className="register-container">
            <div className="register-form-wrapper">
                <h2>Crear Cuenta</h2>
                <form className="register-form" onSubmit={handleRegister}>
                    <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
                    <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
                    <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" onChange={handleChange} required />
                    <select name="tipoUsuario" onChange={handleChange} required defaultValue="">
                        <option value="" disabled>Selecciona tipo de usuario</option>
                        <option value="Cliente">Cliente</option>
                        <option value="Propietario">Propietario</option>
                    </select>
                    <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} />
                    <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
                    <input type="text" name="fechaNacimiento" placeholder="Fecha de Nacimiento (YYYY-MM-DD)" onChange={handleChange} />
                    <input type="text" name="dni" placeholder="DNI" onChange={handleChange} />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                    <button type="submit">Registrarme</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;