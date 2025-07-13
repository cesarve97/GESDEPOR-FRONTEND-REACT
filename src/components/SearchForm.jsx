// Archivo: src/components/SearchForm.jsx

import React, { useState, useEffect } from 'react';
// ¡Importante! Asegúrate de tener los archivos CSV en la carpeta /public
// para que puedan ser accedidos directamente por el navegador.
// /public/data/departamentos.csv
// /public/data/provincias.csv
// /public/data/distritos.csv

const SearchForm = () => {
    // Estados para los datos de los selectores
    const [departamentos, setDepartamentos] = useState([]);
    const [provincias, setProvincias] = useState([]);
    const [distritos, setDistritos] = useState([]);
    const [deportes, setDeportes] = useState([]); // Puedes cargarlos de la API

    // Estados para los valores seleccionados
    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [selectedProvincia, setSelectedProvincia] = useState('');

    useEffect(() => {
        // Cargar datos al montar el componente
        // En una app real, esto vendría de una API
        const cargarDatosIniciales = async () => {
            // Ejemplo de carga de deportes
            setDeportes([{id: 1, nombre: 'Fútbol'}, {id: 2, nombre: 'Básquet'}]);
            
            // Simulación de carga de ubigeo (reemplazar con llamadas a API)
            setDepartamentos([{id: 'LIMA', nombre: 'Lima'}, {id: 'AREQUIPA', nombre: 'Arequipa'}]);
            setProvincias([
                {id: 'LIMA', nombre: 'Lima', departamentoId: 'LIMA'}, 
                {id: 'HUARAL', nombre: 'Huaral', departamentoId: 'LIMA'},
                {id: 'AREQUIPA', nombre: 'Arequipa', departamentoId: 'AREQUIPA'}
            ]);
            setDistritos([
                {id: 'MIRAFLORES', nombre: 'Miraflores', provinciaId: 'LIMA'},
                {id: 'LINCE', nombre: 'Lince', provinciaId: 'LIMA'},
                {id: 'CHANCAY', nombre: 'Chancay', provinciaId: 'HUARAL'},
                {id: 'YANAHUARA', nombre: 'Yanahuara', provinciaId: 'AREQUIPA'}
            ]);
        };
        cargarDatosIniciales();
    }, []);
    
    const handleDepartamentoChange = (e) => {
        setSelectedDepartamento(e.target.value);
        setSelectedProvincia(''); // Resetea la provincia al cambiar departamento
    };

    const handleProvinciaChange = (e) => {
        setSelectedProvincia(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar los datos de búsqueda
        console.log("Buscando con los filtros:", e.target.elements);
    };

    // Filtramos provincias y distritos basados en la selección
    const provinciasFiltradas = provincias.filter(p => p.departamentoId === selectedDepartamento);
    const distritosFiltrados = distritos.filter(d => d.provinciaId === selectedProvincia);

    return (
        <section className="search-section">
            <div className="container">
                <form className="search-form" onSubmit={handleSubmit}>
                    {/* Departamento */}
                    <div className="form-group">
                        <label htmlFor="departamento">Departamento</label>
                        <select id="departamento" name="departamento" value={selectedDepartamento} onChange={handleDepartamentoChange}>
                            <option value="">Seleccionar</option>
                            {departamentos.map(dep => <option key={dep.id} value={dep.id}>{dep.nombre}</option>)}
                        </select>
                    </div>
                    {/* Provincia */}
                    <div className="form-group">
                        <label htmlFor="provincia">Provincia</label>
                        <select id="provincia" name="provincia" value={selectedProvincia} onChange={handleProvinciaChange} disabled={!selectedDepartamento}>
                            <option value="">Seleccionar</option>
                            {provinciasFiltradas.map(prov => <option key={prov.id} value={prov.id}>{prov.nombre}</option>)}
                        </select>
                    </div>
                    {/* Distrito */}
                    <div className="form-group">
                        <label htmlFor="distrito">Distrito</label>
                        <select id="distrito" name="distrito" disabled={!selectedProvincia}>
                            <option value="">Seleccionar</option>
                            {distritosFiltrados.map(dist => <option key={dist.id} value={dist.id}>{dist.nombre}</option>)}
                        </select>
                    </div>
                    {/* Deporte */}
                    <div className="form-group">
                        <label htmlFor="deporte">Deporte</label>
                        <select id="deporte" name="deporte">
                            <option value="">Todos</option>
                            {deportes.map(dep => <option key={dep.id} value={dep.nombre}>{dep.nombre}</option>)}
                        </select>
                    </div>
                    {/* Fecha */}
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" id="fecha" name="fecha" min={new Date().toISOString().split('T')[0]} />
                    </div>
                    {/* Botón */}
                    <div className="form-group-button">
                        <button type="submit" className="btn-search">🔍 Buscar</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SearchForm;