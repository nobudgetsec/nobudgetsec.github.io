// JavaScript personalizado para No Budget Sec
document.addEventListener('DOMContentLoaded', function() {
  
  // Función para ajustar el header a pantalla completa
  function fixHeader() {
    var header = document.querySelector('.page__hero--overlay');
    if (header) {
      // Establecer estilos para el header
      header.style.width = '100vw';
      header.style.position = 'relative';
      header.style.left = '50%';
      header.style.right = '50%';
      header.style.marginLeft = '-50vw';
      header.style.marginRight = '-50vw';
      header.style.maxWidth = 'none';
      header.style.backgroundSize = 'cover';
      header.style.backgroundPosition = 'center';
      header.style.backgroundRepeat = 'no-repeat';
      header.style.overflow = 'hidden';
      
      // Corregir el contenedor principal para evitar scroll horizontal
      var container = document.querySelector('.initial-content');
      if (container) {
        container.style.overflow = 'hidden';
      }
    }
  }
  
  // Función para añadir efectos de hover en los posts
  function enhancePostItems() {
    var postItems = document.querySelectorAll('.archive .list__item');
    
    if (postItems.length > 0) {
      postItems.forEach(function(item) {
        // Añadir transición suave al hover
        item.style.transition = 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out';
        
        // Eventos de mouse
        item.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-3px)';
          this.style.backgroundColor = 'rgba(70, 130, 180, 0.05)';
          this.style.borderRadius = '5px';
          this.style.padding = '10px';
        });
        
        item.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.backgroundColor = 'transparent';
          this.style.padding = '0';
        });
      });
    }
  }
  
  // Función para añadir botón "volver arriba"
  function addBackToTopButton() {
    // Crear el botón
    var backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.setAttribute('id', 'back-to-top');
    backToTopButton.title = "Back to top";
    
    // Estilizar el botón
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#4682b4';
    backToTopButton.style.color = 'white';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.zIndex = '1000';
    backToTopButton.style.opacity = '0.7';
    backToTopButton.style.transition = 'opacity 0.3s';
    
    // Añadir comportamientos de hover
    backToTopButton.addEventListener('mouseenter', function() {
      this.style.opacity = '1';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
      this.style.opacity = '0.7';
    });
    
    // Añadir funcionalidad de click
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Añadir el botón al body
    document.body.appendChild(backToTopButton);
    
    // Mostrar/ocultar el botón según la posición del scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  }
  
  // Ejecutar funciones
  fixHeader();
  enhancePostItems();
  addBackToTopButton();
  
  // Eventos de ventana
  window.addEventListener('resize', fixHeader);
});
      if (container) {
        container.style.overflow = 'hidden';
      }
    }
  }
  
  // Aplicar los estilos cuando el DOM esté listo
  fixHeader();
  
  // También aplicar cuando se redimensione la ventana
  window.addEventListener('resize', fixHeader);
});
