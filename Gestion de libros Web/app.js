const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware para recibir datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));


// Rutas para servir páginas HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/html/pantalla_principal.html'));
});

app.get('/lista_libros', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/html/listas_libros.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/html/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/html/register.html'));
});

app.get('/estadistica', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/html/lectura_estadistica.html'));
});

// Ruta para el registro de usuario (POST)
const registerRoute = require('./routes/register');
app.use('/agregar', registerRoute);

// Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
