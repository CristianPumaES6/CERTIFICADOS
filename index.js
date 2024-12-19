document.getElementById('generate-button').addEventListener('click', function() {
    const name = document.getElementById('name').value;

    if (!name.trim()) {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    const certificateContainer = document.getElementById('certificate-container');
    const certificateText = document.getElementById('certificate-text');

    certificateText.textContent = name;
    certificateContainer.classList.remove('hidden');
});
function exportDivAsImage() {
    var div = document.getElementById("certificate-container");

    // Usar html2canvas con opciones para asegurar la carga de imágenes y CORS
    html2canvas(div, {
        useCORS: true,  // Permite que html2canvas maneje imágenes de diferentes orígenes
        allowTaint: true,  // Permite la tainting, necesario en algunas situaciones
        logging: true,  // Permite ver los logs para debugging (opcional)
    }).then(function(canvas) {
        // Convertir el canvas a una imagen en formato base64
        var imgData = canvas.toDataURL("image/png");

        // Crear un enlace de descarga para la imagen generada
        var link = document.createElement('a');
        link.href = imgData;
        link.download = 'certificado.png';  // Nombre del archivo descargado

        // Simular un clic en el enlace para descargar la imagen
        link.click();
    }).catch(function(error) {
        console.error("Error al generar la imagen: ", error);
    });
}
