# To-Do List App (MERN Stack)

## Descripción del Proyecto

Esta es una aplicación web completa (full-stack) desarrollada con la *pila MERN* (MongoDB, Express.js, React y Node.js) que permite a los usuarios gestionar sus tareas diarias de manera eficiente. La aplicación implementa todas las operaciones *CRUD* (Crear, Leer, Actualizar y Eliminar) para las tareas, proporcionando una interfaz intuitiva para la gestión de listas de pendientes.

El objetivo principal es ofrecer una solución robusta y fácil de usar para organizar y seguir el progreso de las tareas personales o de equipo.

## Características Principales

* *Creación de Tareas:* Permite añadir nuevas tareas con su descripción.
* *Visualización de Tareas:* Muestra un listado claro de todas las tareas existentes.
* *Actualización de Tareas:* Habilita la edición de tareas ya creadas.
* *Eliminación de Tareas:* Permite borrar tareas completadas o no deseadas.
* *Tecnología MERN:* Utiliza JavaScript en todo el stack para un desarrollo unificado y eficiente.
* *Interfaz de Usuario React:* Un frontend moderno y reactivo para una experiencia de usuario fluida.
* *API RESTful:* Un backend robusto con Express.js para manejar las peticiones de datos de forma segura y eficiente.
* *Base de Datos MongoDB:* Almacenamiento flexible y escalable de las tareas.

## Tecnologías Utilizadas

### Frontend
* *React:* Biblioteca de JavaScript para construir la interfaz de usuario.
* *Vite:* Herramienta de construcción de proyectos para React, proporcionando un entorno de desarrollo rápido.
* *CSS:* Estilos para el diseño y la presentación de la aplicación.
* *Axios:* Cliente HTTP basado en promesas para realizar peticiones al backend.

### Backend
* *Node.js:* Entorno de ejecución de JavaScript del lado del servidor.
* *Express.js:* Framework web para Node.js, utilizado para construir la API RESTful.
* *MongoDB:* Base de datos NoSQL orientada a documentos para el almacenamiento de datos.
* *Mongoose:* Modelado de objetos MongoDB para Node.js, facilitando la interacción con la base de datos.
* *CORS:* Middleware para habilitar el control de acceso HTTP (CORS) y permitir la comunicación entre frontend y backend.
* *dotenv:* Módulo para cargar variables de entorno desde un archivo .env.

## Estructura del Proyecto

El proyecto está organizado en un mono-repositorio con dos directorios principales:

* /client: Contiene todo el código del frontend (React).
* /server: Contiene todo el código del backend (Node.js/Express.js).

## Cómo Ejecutar el Proyecto Localmente

Para ejecutar esta aplicación en tu máquina local, sigue los siguientes pasos:

### Requisitos Previos
Asegúrate de tener instalado:
* [Node.js](https://nodejs.org/en/download/) (versión 14 o superior recomendada)
* [npm](https://www.npmjs.com/get-npm) (viene con Node.js) o [Yarn](https://yarnpkg.com/)
* [MongoDB](https://www.mongodb.com/try/download/community) (instala la versión Community Server y asegúrate de que esté ejecutándose)

### Pasos
1.  *Clonar el repositorio:*
    bash
    git clone [https://github.com/KeiXXX19/KeinerXXX3.git](https://github.com/KeiXXX19/KeinerXXX3.git)
    cd KeinerXXX3
    

2.  *Configurar el Backend:*
    * Navega al directorio server:
        bash
        cd server
        
    * Instala las dependencias del backend:
        bash
        npm install
        # o yarn install
        
    * Crea un archivo .env en el directorio server y añade las siguientes variables de entorno:
        dotenv
        MONGO_URI=mongodb://localhost:27017/tu_base_de_datos_tasks
        PORT=5000 # O cualquier puerto que desees
        
        * *Nota:* tu_base_de_datos_tasks debe ser el nombre que le des a tu base de datos en MongoDB.
    * Inicia el servidor backend:
        bash
        npm start
        # o node server.js (o el nombre de tu archivo principal del backend)
        
        El servidor debería iniciarse en http://localhost:5000 (o el puerto que hayas configurado).

3.  *Configurar el Frontend:*
    * Abre una *nueva ventana de terminal* y navega al directorio client:
        bash
        cd client
        
    * Instala las dependencias del frontend:
        bash
        npm install
        # o yarn install
        
    * Asegúrate de que tu frontend sepa dónde está tu backend. Si estás usando Vite en React, probablemente tengas un archivo .env en client o configures la URL de la API directamente en tu código (ej. en src/api.js o src/App.js). Si usas un .env en el cliente para esto, podrías tener algo como:
        dotenv
        VITE_API_URL=http://localhost:5000
        
        (El prefijo VITE_ es importante para que Vite las exponga al frontend).
    * Inicia la aplicación frontend:
        bash
        npm run dev
        # o yarn dev
        
        La aplicación frontend debería abrirse en tu navegador, generalmente en http://localhost:5173 (o un puerto similar).

## Aplicación Desplegada

Puedes acceder a las versiones desplegadas de la aplicación aquí. Recuerda que para que el frontend funcione correctamente, el backend también debe estar desplegado y accesible.

* *Frontend (Aplicación de Tareas):* [Enlace a tu aplicación desplegada en Vercel o Netlify]
    * Ejemplo: https://tu-nombre-de-usuario-tasks-app.vercel.app

* *Backend (API de Tareas):* [Enlace a tu API desplegada en Render o Railway]
    * Ejemplo: https://tu-nombre-de-usuario-api.onrender.com
    * Nota: Puedes probar si la API está funcionando visitando esta URL en tu navegador (aunque solo verás un mensaje de éxito o error si no hay rutas para GET /).

## Capturas de Pantalla

Aquí puedes ver algunas capturas de pantalla de la aplicación en funcionamiento:

![Página Principal de la Aplicación](screenshots/main_page.png)
![Crear Nuevo libro](screenshots/create_task.png)


## Autor

* *CLAN-GOJO*

---
