# Voz Ciudadana – Frontend
Voz Ciudadana, una pagina React desarrollada con Vite que permite a los vecinos registrarse, iniciar sesión, cargar reclamos municipales sobre residuos, responder una encuesta y hacer seguimiento de sus reclamos.

## Tecnologías utilizadas
React

Vite

React Router DOM

Axios

Bootstrap

React Bootstrap

React Icons


## Scripts disponibles
`npm run dev`      # Inicia el servidor de desarrollo en http://localhost:5173
`npm run build`     # Compila la aplicación para producción
`npm run preview`   # Previsualiza la versión de producción localmente


##  Requisitos técnicos
- Node.js 

- npm 

##  Instalación y ejecución

### Clonar el repositorio
`git clone https://github.com/mariapaulaveram/reclamos-front.git`

### Ir al directorio del frontend
`cd reclamos-front`

### Instalar dependencias
`npm install`

### Ejecutar en modo desarrollo
`npm run dev`



## Conexión con el backend
Las solicitudes HTTP se realizan con Axios. Ejemplo de uso:

``` const response = await axios.post('http://localhost:3000/reclamos', datos);```

- Asegurate de que el backend tenga habilitado CORS para permitir solicitudes desde http://localhost:5173.


## Estructura del proyecto
```
src/
├── componentes/
│   ├── layouts/
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   └── Footer.jsx
│   ├── AcordeonComoFunciona.jsx
│   ├── CarouselVecinos.jsx
│   ├── Contacto.jsx
│   ├── Encuesta.jsx
│   ├── ListaUtil.jsx
│   ├── LoginForm.jsx
│   ├── NuevoReclamoForm.jsx
│   ├── ReclamosVecino.jsx
│   └── RegistroForm.jsx
├── hooks/
│   └── useScrollToHash.js
├── paginas/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Registro.jsx
│   ├── VecinosLogueados.jsx
│   ├── ReclamosDelVecino.jsx
│   └── NuevoReclamo.jsx
├── App.jsx
└── main.jsx 
```


## Hooks personalizados
useScrollToHash.js: Permite hacer scroll automático a secciones específicas de la página cuando se accede con un hash en la URL. Ideal para navegación interna.

## Navegación de rutas
La aplicación utiliza React Router DOM para manejar las rutas:
```jsx
<Route index element={<Home />} />
<Route path="login" element={<Login />} />
<Route path="registro" element={<Registro />} />
<Route path="logueados" element={<VecinosLogueados />} />
<Route path="reclamos" element={<ReclamosDelVecino />} />
<Route path="nuevo-reclamo" element={<NuevoReclamo />} />
```




