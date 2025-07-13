# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

/PLATAFORMA-UI
|
|-- /public               // CORRECTO. Archivos estáticos que no se procesan.
|-- /src                  // CORRECTO. El corazón de tu código fuente.
|   |
|   |-- /assets           // CORRECTO. Imágenes, fuentes, iconos SVG.
|   |-- /components       // CORRECTO. Pequeños componentes reutilizables.
|   |-- /css              // CORRECTO. Archivos de estilo.
|   |-- /hooks            // ¡EXCELENTE! Para hooks personalizados.
|   |-- /pages            // CORRECTO. Vistas principales de la aplicación.
|   |-- /routes           // CORRECTO. Configuración de enrutamiento.
|   |-- /services         // CORRECTO. Comunicación con la API.
|   |-- /store            // CORRECTO. Estado global (Zustand, Redux).
|   |-- /utils            // <-- RECOMENDACIÓN.
|   |
|   |-- App.jsx           // CORRECTO. Componente raíz.
|   |-- main.jsx          // CORRECTO. Punto de entrada de React.
|
|-- .env.local            // CORRECTO. Variables de entorno del frontend (SECRETO).
|-- .gitignore
|-- package.json
|-- vite.config.js