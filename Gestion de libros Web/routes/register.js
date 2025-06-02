const express = require('express');
const router = express.Router();
const db = require('../models/db');
const multer = require('multer'); // Necesitarás instalar multer: npm install multer

// Configuración para manejar archivos subidos
const upload = multer({ dest: 'uploads/' }); // Ajusta la ruta según necesites

router.post('/', upload.single('archivoLibro'), (req, res) => {
  // Verificar si se recibieron los datos del formulario
  if (!req.body) {
    return res.status(400).send('Datos del formulario no recibidos');
  }

router.get('/api/libros', (req, res) => {
  db.query('SELECT * FROM libros ORDER BY fecha_creacion DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

  const { tituloLibro, autorLibro, anoLibro, generoLibro, descrip_libro, nPagina } = req.body;
  const archivoLibro = req.file ? req.file.filename : null; // Nombre del archivo subido

  // // Validación básica de datos
  // if (!tituloLibro || !autorLibro || !añoLibro || !descrip_libro) {
  //   return res.status(400).send('Faltan campos obligatorios');
  // }

  const sql = 'INSERT INTO libros (nombre_libro, autorlibro, anoLibro, generoLibro, descrip_libro, nPagina_libro, archivo_libro) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.query(sql, 
    [tituloLibro, autorLibro, anoLibro, generoLibro, descrip_libro, nPagina || null, archivoLibro], 
    (err, result) => {
      if (err) {
        console.error('Error al insertar libro:', err);
        return res.status(500).send('Error en el servidor al registrar el libro');
      }
      res.redirect('/html/pantalla_principal.html')
  });
});

module.exports = router;