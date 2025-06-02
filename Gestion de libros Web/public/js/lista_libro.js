document.addEventListener('DOMContentLoaded', function() {
  const formLibro = document.getElementById('form-libro');
  const librosContainer = document.getElementById('libros-container');
  const sinLibros = document.getElementById('sin-libros');
  const cancelarBtn = document.getElementById('delete_book');

  // Cargar libros al iniciar
  cargarLibros();

  // Manejar envío del formulario
  formLibro.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    try {
      const response = await fetch('/agregar', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const nuevoLibro = await response.json();
        agregarLibroAlDOM(nuevoLibro);
        formLibro.reset();
        mostrarAlerta('¡Libro agregado correctamente!', 'success');
      }
    } catch (error) {
      console.error('Error:', error);
      mostrarAlerta('Error al agregar el libro', 'error');
    }
  });

  // Botón cancelar
  cancelarBtn.addEventListener('click', function() {
    formLibro.reset();
  });

  // Función para cargar libros existentes
  async function cargarLibros() {
    try {
      const response = await fetch('/libros');
      if (response.ok) {
        const libros = await response.json();
        if (libros.length > 0) {
          sinLibros.style.display = 'none';
          libros.forEach(libro => agregarLibroAlDOM(libro));
        }
      }
    } catch (error) {
      console.error('Error cargando libros:', error);
    }
  }

  // Función para agregar un libro al DOM
  function agregarLibroAlDOM(libro) {
    // Ocultar mensaje "no hay libros" si es el primero
    if (librosContainer.children.length === 0) {
      sinLibros.style.display = sinLibros;
    }
    
    // Crear elemento del libro
    const libroElement = document.createElement('div');
    libroElement.className = 'libro-card';
    libroElement.innerHTML = `
      <div class="libro-portada">
        ${libro.archivo ? 
          `<img src="/uploads/${libro.archivo}" alt="${libro.titulo}">` : 
          `<i class="fa-solid fa-book"></i>`}
      </div>
      <div class="libro-info">
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Año:</strong> ${libro.año}</p>
        <p><strong>Género:</strong> ${libro.genero}</p>
        <p class="libro-desc">${libro.descripcion.substring(0, 60)}...</p>
      </div>
      <div class="libro-acciones">
        <button class="btn-eliminar" data-id="${libro.id}">
          <i class="fa-solid fa-trash"></i> Eliminar
        </button>
      </div>
    `;
    
    // Agregar evento para eliminar
    libroElement.querySelector('.btn-eliminar').addEventListener('click', function() {
      eliminarLibro(libro.id, libroElement);
    });
    
    librosContainer.appendChild(libroElement);
  }

  // Función para eliminar un libro
  async function eliminarLibro(id, elemento) {
    try {
      const confirmacion = await Swal.fire({
        title: '¿Eliminar libro?',
        text: "Esta acción no se puede deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar'
      });
      
      if (confirmacion.isConfirmed) {
        const response = await fetch(`/eliminar/${id}`, { method: 'DELETE' });
        
        if (response.ok) {
          elemento.remove();
          // Mostrar mensaje "no hay libros" si era el último
          if (librosContainer.children.length === 0) {
            sinLibros.style.display = 'block';
          }
          mostrarAlerta('Libro eliminado correctamente', 'success');
        }
      }
    } catch (error) {
      console.error('Error eliminando libro:', error);
      mostrarAlerta('Error al eliminar el libro', 'error');
    }
  }

  // Función para mostrar alertas (usando SweetAlert2)
  function mostrarAlerta(mensaje, tipo) {
    Swal.fire({
      title: mensaje,
      icon: tipo,
      confirmButtonText: 'Aceptar'
    });
  }
});