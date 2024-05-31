// scrollbar.js

// Manejo de desplazamiento con la rueda del ratón para dispositivos de escritorio
window.addEventListener('wheel', function(e) {
  window.scrollBy(0, e.deltaY);
});

// Variables para almacenar la posición inicial del toque
let startY = 0;
let isTouching = false;

// Manejo del evento touchstart para dispositivos móviles
window.addEventListener('touchstart', function(e) {
  // Registrar la posición inicial del toque
  startY = e.touches[0].clientY;
  isTouching = true;
});

// Manejo del evento touchmove para dispositivos móviles
window.addEventListener('touchmove', function(e) {
  if (isTouching) {
    // Calcular la distancia recorrida por el toque
    let deltaY = startY - e.touches[0].clientY;
    // Desplazar la ventana por la distancia calculada
    window.scrollBy(0, deltaY);
    // Actualizar la posición inicial del toque
    startY = e.touches[0].clientY;
  }
});

// Manejo del evento touchend para dispositivos móviles
window.addEventListener('touchend', function(e) {
  isTouching = false;
});
