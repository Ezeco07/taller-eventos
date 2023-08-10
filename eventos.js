document.addEventListener('DOMContentLoaded', function() {
    const botonSaludar = document.querySelector('#saludarBtn');
    
    botonSaludar.addEventListener('click', function(event) {
        alert('Hola!');
        event.stopPropagation(); // Evita que el evento se propague al div
    });

    const divSaludar = document.querySelector('.saludar');
    
    divSaludar.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});