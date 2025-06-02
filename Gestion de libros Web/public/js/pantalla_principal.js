
//     // Variables
//     const search = document.getElementById('searh-container');
//     const ad_button = document.getElementById('ad-book');
//     const del_button = document.getElementById('delete_book');
//     const dialog = document.getElementById('list_book');
//     const summit = document.getElementById('submit-add');
    
//     // Cuando el div o sus elementos hijos reciben focus
//     search.addEventListener('focusin', function() {
//         this.classList.add('agrandado');
//     });
                
//     // Cuando pierde el focus
//     search.addEventListener('focusout', function() {
//         this.classList.remove('agrandado');
//     });
        
//     ad_button.addEventListener("click", () => {
//         dialog.showModal();
//     })
        
//     summit.addEventListener("click", () => {
                
//     });
        
//     del_button.addEventListener("click", () => {
//         if (confirm('¿Está seguro que desea cancelar?')) {
//             window.location.href = '../html/pantalla_principal.html'; // o la página a la que deba redirigir
//             dialog.close();
//         }
//     })

// document.addEventListener('DOMContentLoaded', function() {
//   const cartBook = document.getElementById('cart-book');
//   const addFirstBtn = document.getElementById('add-first-book');
  
//   // Verificar si el box está vacío
//   function checkIfEmpty() {
//     if (cartBook.children.length === 0 || 
//         (cartBook.children.length === 1 && cartBook.querySelector('.empty-state'))) {
//       showEmptyState();
//     }
//   }
  
//   function showEmptyState() {
//     cartBook.innerHTML = `
//       <div class="empty-state">
//         <i class="fa-solid fa-book-open" id = "i-empty"></i>
//         <p>No hay libros agregados</p>
//         <button id="add-first-book" class="btn-add-first">
//           <i class="fa-solid fa-plus"></i> Agregar primer libro
//         </button>
//       </div>
//     `;
    
//     // Agregar evento al botón
//     document.getElementById('add-first-book').addEventListener('click', function() {
//       document.getElementById('list_book').showModal();
//     });
//   }
  
//   // Verificar al cargar la página
//   checkIfEmpty();

//   // En tu código donde agregas libros dinámicamente
// function addBookToCart(bookData) {
//   const cartBook = document.getElementById('cart-book');
  
//   // Eliminar estado vacío si existe
//   const emptyState = cartBook.querySelector('.empty-state');
//   if (emptyState) {
//     emptyState.remove();
//   }
  
//   // Crear elemento de libro
//   const bookElement = document.createElement('div');
//   bookElement.className = 'book-item';
//   bookElement.innerHTML = `
//     <h3>${bookData.titulo}</h3>
//     <p>Autor: ${bookData.autor}</p>
//     <!-- más datos del libro -->
//   `;
  
//   cartBook.appendChild(bookElement);
// }

// function removeBook(bookElement) {
//   bookElement.remove();
  
//   const cartBook = document.getElementById('cart-book');
//   if (cartBook.children.length === 0) {
//     showEmptyState();
//   }
// }
  
//   // Cuando agregues libros dinámicamente, llama a checkIfEmpty() para actualizar el estado
// });




// document.addEventListener('DOMContentLoaded', function() {
//   const sidebar = document.getElementById('sling-target');
//   const sidebarToggle = document.querySelector('.sidebar-toggle');
//   const closeSidebar = document.querySelector('.close-sidebar');
//   const overlay = document.createElement('div');
  
//   // Crear overlay
//   overlay.className = 'sidebar-overlay';
//   document.body.appendChild(overlay);
  
//   // Abrir sidebar
//   sidebarToggle.addEventListener('click', function() {
//     sidebar.classList.add('active');
//     overlay.classList.add('active');
//     // document.body.style.overflow = 'hidden'; // Evitar scroll
//   });
  
//   // Cerrar sidebar
//   closeSidebar.addEventListener('click', function() {
//     sidebar.classList.remove('active');
//     overlay.classList.remove('active');
//     // document.body.style.overflow = '';
//   });
  
//   // Cerrar al hacer clic en el overlay
//   overlay.addEventListener('click', function() {
//     sidebar.classList.remove('active');
//     overlay.classList.remove('active');
//     document.body.style.overflow = '';
//   });
  
//   // Cerrar con tecla ESC
//   document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape') {
//       sidebar.classList.remove('active');
//       overlay.classList.remove('active');
//       document.body.style.overflow = '';
//     }
//   });
// });




// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('form-libro');
//   const librosContainer = document.getElementById('cart-book');
//   const sinLibros = document.getElementById('sin-libros');

//   // Cargar libros existentes al iniciar
//   cargarLibros();

//   // Manejar envío del formulario
//   form.addEventListener('submit', async function(e) {
//     e.preventDefault();
    
//     const formData = new FormData(form);
    
//     try {
//       const response = await fetch('/agregar', {
//         method: 'POST',
//         body: formData
//       });
      
//       if (response.ok) {
//         const nuevoLibro = await response.json();
//         agregarLibroAlDOM(nuevoLibro);
//         form.reset();
//         // Mostrar notificación de éxito
//         Swal.fire('¡Éxito!', 'Libro agregado correctamente', 'success');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Swal.fire('Error', 'No se pudo agregar el libro', 'error');
//     }
//   });

//   // Función para cargar libros existentes
//   async function cargarLibros() {
//     try {
//       const response = await fetch('/libros');
//       if (response.ok) {
//         const libros = await response.json();
//         if (libros.length > 0) {
//           sinLibros.style.display = 'none';
//           libros.forEach(libro => agregarLibroAlDOM(libro));
//         }
//       }
//     } catch (error) {
//       console.error('Error cargando libros:', error);
//     }
//   }

//   // Función para agregar un libro al DOM
//   function agregarLibroAlDOM(libro) {
//     // Ocultar mensaje "no hay libros" si es el primero
//     if (librosContainer.children.length === 0) {
//       sinLibros.style.display = 'none';
//     }
    
//     // Crear elemento del libro
//     const libroElement = document.createElement('div');
//     libroElement.className = 'libro-card';
//     libroElement.innerHTML = `
//       <div class="libro-portada">
//         ${libro.archivo ? 
//           `<img src="/uploads/${libro.archivo}" alt="${libro.titulo}">` : 
//           `<i class="fa-solid fa-book"></i>`}
//       </div>
//       <div class="libro-info">
//         <h3>${libro.titulo}</h3>
//         <p><strong>Autor:</strong> ${libro.autor}</p>
//         <p><strong>Año:</strong> ${libro.año}</p>
//         <p class="libro-desc">${libro.descripcion.substring(0, 60)}...</p>
//       </div>
//       <div class="libro-acciones">
//         <button class="btn-ver"><i class="fa-solid fa-eye"></i></button>
//         <button class="btn-eliminar" data-id="${libro.id}"><i class="fa-solid fa-trash"></i></button>
//       </div>
//     `;
    
//     // Agregar evento para eliminar
//     libroElement.querySelector('.btn-eliminar').addEventListener('click', function() {
//       eliminarLibro(libro.id, libroElement);
//     });
    
//     librosContainer.prepend(libroElement); // Agregar al principio
//   }

//   // Función para eliminar un libro
//   async function eliminarLibro(id, elemento) {
//     try {
//       const confirmacion = await Swal.fire({
//         title: '¿Eliminar libro?',
//         text: "Esta acción no se puede deshacer",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#d33',
//         cancelButtonColor: '#3085d6',
//         confirmButtonText: 'Sí, eliminar'
//       });
      
//       if (confirmacion.isConfirmed) {
//         const response = await fetch(`/eliminar/${id}`, { method: 'DELETE' });
        
//         if (response.ok) {
//           elemento.remove();
//           // Mostrar mensaje "no hay libros" si era el último
//           if (librosContainer.children.length === 0) {
//             sinLibros.style.display = 'block';
//           }
//           Swal.fire('Eliminado', 'El libro ha sido eliminado', 'success');
//         }
//       }
//     } catch (error) {
//       console.error('Error eliminando libro:', error);
//       Swal.fire('Error', 'No se pudo eliminar el libro', 'error');
//     }
//   }
// });



// document.getElementById('paintWindow').addEventListener('click', () => {
//   window.print();
// }
// );



document.addEventListener('DOMContentLoaded', function() {
  // Elementos del DOM
  const formLibro = document.getElementById('form-libro');
  const libroContainer = document.getElementById('libro-container');
  const dialog = document.getElementById('list_book');
  const addBookBtn = document.getElementById('ad-book');
  const cancelBtn = document.getElementById('delete_book');
  const cartBook = document.getElementById('cart-book');

  // Abrir modal
  addBookBtn.addEventListener('click', () => dialog.showModal());

  // Cerrar modal
  cancelBtn.addEventListener('click', () => {
    dialog.close();
    formLibro.reset();
  });

  // Cargar libros al iniciar
  cargarLibros();

  // Manejar envío del formulario
  formLibro.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    try {
      // Enviar datos al servidor
      const response = await fetch('/agregar', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const nuevoLibro = await response.json();
        agregarLibroAlDOM(nuevoLibro);
        formLibro.reset();
        dialog.close();
        mostrarAlerta('¡Libro agregado correctamente!', 'success');
      }
    } catch (error) {
      console.error('Error:', error);
      mostrarAlerta('Error al agregar el libro', 'error');
    }
  });

  // Función para cargar libros existentes
  async function cargarLibros() {
    try {
      const response = await fetch('/libros');
      if (response.ok) {
        const libros = await response.json();
        libros.forEach(libro => agregarLibroAlDOM(libro));
      }
    } catch (error) {
      console.error('Error cargando libros:', error);
    }
  }

  // Función para agregar un libro al DOM
  function agregarLibroAlDOM(libro) {
    const libroElement = document.createElement('div');
    libroElement.className = 'libro-item';
    libroElement.innerHTML = `
      <div class="libro-portada">
        ${libro.archivo ? 
          `<img src="/uploads/${libro.archivo}" alt="${libro.tituloLibro}">` : 
          `<i class="fa-solid fa-book"></i>`}
      </div>
      <div class="libro-info">
        <h3>${libro.tituloLibro}</h3>
        <p><strong>Autor:</strong> ${libro.autorLibro}</p>
        <p><strong>Año:</strong> ${libro.anoLibro}</p>
        <p><strong>Género:</strong> ${libro.generoLibro}</p>
        <p class="libro-desc">${libro.descrip_libro.substring(0, 60)}...</p>
      </div>
      <div class="libro-acciones">
        <button class="btn-eliminar" data-id="${libro.id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    
    // Agregar evento para eliminar
    libroElement.querySelector('.btn-eliminar').addEventListener('click', function() {
      eliminarLibro(libro.id, libroElement);
    });
    
    libroContainer.appendChild(libroElement);
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
          mostrarAlerta('Libro eliminado correctamente', 'success');
        }
      }
    } catch (error) {
      console.error('Error eliminando libro:', error);
      mostrarAlerta('Error al eliminar el libro', 'error');
    }
  }

  // Función para mostrar alertas (requiere SweetAlert2)
  function mostrarAlerta(mensaje, tipo) {
    Swal.fire({
      title: mensaje,
      icon: tipo,
      confirmButtonText: 'Aceptar'
    });
  }
});