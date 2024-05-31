// animate.js

window.addEventListener('load', function() {
  // Tiempo mínimo para mostrar la animación de carga (en milisegundos)
  const minimumLoadingTime = 8000; // 8 segundos

  // Registrar el tiempo en que comenzó la carga
  const startTime = performance.now();

  // Función para ocultar la animación de carga con desvanecimiento
  const hideLoader = () => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('content').classList.remove('hidden');
    }, 1000); // Tiempo de la transición en milisegundos (debe coincidir con el CSS)
  };

  // Calcular cuánto tiempo ha pasado desde que comenzó la carga
  const elapsedTime = performance.now() - startTime;

  // Si el tiempo transcurrido es menor que el tiempo mínimo de carga, esperar el tiempo restante
  if (elapsedTime < minimumLoadingTime) {
    setTimeout(hideLoader, minimumLoadingTime - elapsedTime);
  } else {
    // Si ya ha pasado suficiente tiempo, ocultar la animación de carga inmediatamente
    hideLoader();
  }
});
