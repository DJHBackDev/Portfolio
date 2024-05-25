document.getElementById("buttonDownload").addEventListener("click", function() {
    // Crear un enlace temporal
    var enlace = document.createElement('a');
    enlace.href = 'prueba.html'; // Ruta del archivo a descargar
    enlace.download = 'prueba.html'; // Nombre del archivo a descargar
    enlace.style.display = 'none';
    document.body.appendChild(enlace);

    // Simular el clic en el enlace
    enlace.click();

    // Eliminar el enlace temporal
    document.body.removeChild(enlace);
});
