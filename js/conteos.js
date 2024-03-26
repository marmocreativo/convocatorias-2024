function conteo(idt){
  var dataSend = { idt : idt }; 
  $.ajax({
    type: 'POST',
    url: 'includes/guarda_conteo.php',
    data: dataSend,
    dataType:"html",
    beforeSend: function(){
    /* ejecuta durante el envió de la petición al servidor. */
    },
    complete:function(data){
    /* Se ejecuta al termino de la petición */
    },
    success: function(data){
    /* Se ejecuta cuando termina la petición y esta ha sido correcta */
    },
    error: function(data){
    /* Se ejecuta si la peticón ha sido erronea */
    }
  });
}//end function