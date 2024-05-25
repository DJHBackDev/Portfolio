// Función para animar el texto
function animarTexto() {
    var textos = ["Cientifico de Datos","Programador Back End"] // Array con los textos que quieres mostrar
    var index = 0;
    var nombreSpan = document.getElementById("nombre");
  
    // Función para escribir el texto con efecto de "barra de escritura"
    function escribirTexto() {
      var textoActual = textos[index];
      var i = 0;
      var interval = setInterval(function() {
        if (i <= textoActual.length) {
          nombreSpan.textContent = textoActual.substring(0, i) + "|";
          i++;
        } else {
          clearInterval(interval);
          setTimeout(borrarTexto, 500); // Tiempo antes de borrar
        }
      }, 100); // Velocidad de escritura
    }
  
    // Función para borrar el texto con efecto de "barra de escritura"
    function borrarTexto() {
      var textoActual = textos[index];
      var i = textoActual.length;
      var interval = setInterval(function() {
        if (i >= 0) {
          nombreSpan.textContent = textoActual.substring(0, i);
          i--;
        } else {
          clearInterval(interval);
          index++;
          if (index < textos.length) {
            setTimeout(escribirTexto, 500); // Tiempo antes de escribir el siguiente texto
          } else {
            index = 0; // Reinicia la secuencia de textos
            setTimeout(escribirTexto, 500); // Tiempo antes de escribir el primer texto de nuevo
          }
        }
      }, 50); // Velocidad de borrado
    }
  
    // Inicia la animación
    escribirTexto();
  }
  
  // Llama a la función para animar el texto cuando se cargue la página
  window.onload = function() {
    animarTexto();
};
  