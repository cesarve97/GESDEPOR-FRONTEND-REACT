// Archivo: src/services/authService.js

import axios from 'axios';

// --- LA CORRECCIÓN CLAVE ESTÁ AQUÍ ---

// 1. Leemos la URL base de nuestro backend desde las variables de entorno de Vite.
const BASE_URL = import.meta.env.VITE_API_URL;

// 2. Creamos una instancia de Axios con esa URL base.
// De esta forma, no tenemos que escribir la URL completa en cada función.
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// --- FIN DE LA CORRECCIÓN ---


// Ahora, todas las funciones son mucho más limpias y solo usan la ruta relativa.
const registrar = (nombre, apellido, email, password) => {
    // La petición irá a: [baseURL]/api/auth/registrar
    return apiClient.post('/api/auth/registrar', {
        nombre,
        apellido,
        email,
        password,
    });
};

const login = async (email, password) => {
    // La petición irá a: [baseURL]/api/auth/login
    const response = await apiClient.post('/api/auth/login', {
        email,
        password,
    });

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