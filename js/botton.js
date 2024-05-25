// // Seleciona el botón con la clase "button"
// const button = document.querySelector('.button');

// // Agrega un evento de desplazamiento a la ventana
// window.addEventListener('scroll', () => {
//   // Si el usuario ha desplazado más de 200 píxeles, muestra el botón
//   if (window.scrollY > 200 && window.scrollY+ window.innerHeight < document.documentElement.scrollHeight) {
//     button.classList.add('show');
//   } else {
//     // De lo contrario, oculta el botón
//     button.classList.remove('show');
//   }
// });

// // Agrega un evento de clic al botón para desplazarse hacia arriba
// button.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth' // Desplazamiento suave
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.button');
  var scrollThreshold = 300; // Número de píxeles de desplazamiento antes de mostrar el botón

  window.addEventListener('scroll', function() {
      if (window.scrollY > scrollThreshold) {
          button.classList.add('show');
      } else {
          button.classList.remove('show');
      }
  });

  button.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
