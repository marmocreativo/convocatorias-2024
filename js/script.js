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
  document.getElementById("compartir").setAttribute("data-bs-toggle", "collapse");
  document.getElementById("compartir").setAttribute("data-bs-target","#collapseCompartir");
  document.getElementById("descargar").setAttribute("data-bs-toggle", "collapse");
  document.getElementById("descargar").setAttribute("data-bs-target","#collapseDescargar");
  document.getElementById("collapseCompartir").setAttribute("class","collapse")
  document.getElementById("collapseDescargar").setAttribute("class","collapse")

} else { 
  document.getElementById("compartir").removeAttribute("data-bs-toggle");
  document.getElementById("compartir").removeAttribute("data-bs-target");
  document.getElementById("collapseCompartir").removeAttribute("class");

  document.getElementById("descargar").removeAttribute("data-bs-toggle");
  document.getElementById("descargar").removeAttribute("data-bs-target");
  document.getElementById("collapseDescargar").removeAttribute("class");
}


jQuery(function(){  

  jQuery(document).ready(function(){ 
  jQuery('.collapse').on('show.bs.collapse',function(){
  jQuery('.collapse.show').collapse('toggle');
  });
});

});