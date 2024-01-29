document.addEventListener("DOMContentLoaded", function() {
  // Verificar si la URL contiene #medios
  if (window.location.href.indexOf("#medios") !== -1) {
    // Obtener el elemento con ID #mediosBtn y hacer clic en él
    var menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      menuBtn.click();
    }
  }
});

jQuery( ".arrow-icon" ).click(function() {
  jQuery(this).toggleClass("open");
});


if (window.matchMedia("(max-width: 575.98px)").matches) {
 
} else {
  /* La pantalla tiene menos de 400 píxeles de ancho */
}