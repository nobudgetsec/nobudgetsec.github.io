// JavaScript para ajustar el header a pantalla completa
document.addEventListener('DOMContentLoaded', function() {
  // Función para aplicar estilos al header
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
  
  // Aplicar los estilos cuando el DOM esté listo
  fixHeader();
  
  // También aplicar cuando se redimensione la ventana
  window.addEventListener('resize', fixHeader);
});
