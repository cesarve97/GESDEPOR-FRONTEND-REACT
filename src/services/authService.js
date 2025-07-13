// Archivo: src/services/authService.js

import axios from 'axios';

// Esta línea lee la variable del archivo .env.local y la usa para construir la URL completa.
const API_URL = import.meta.env.VITE_API_URL + '/api/auth';

const registrar = (nombre, apellido, email, password) => {
    return axios.post(API_URL + '/registrar', {
        nombre,
        apellido,
        email,
        password,
    });
};

const login = async (email, password) => {
    const response = await axios.post(API_URL + '/login', {
        email,
        password,
    });

    // Si el login es exitoso y recibimos un token, lo guardamos en el navegador
    if (response.data.token) {
        localStorage.setItem('usuario', JSON.stringify(response.data));
    }

    return response.data;
};

const logout = () => {
    localStorage.removeItem('usuario');
};

const authService = {
    registrar,
    login,
    logout,
};

export default authService;