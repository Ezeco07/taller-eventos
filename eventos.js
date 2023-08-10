document.addEventListener('DOMContentLoaded', function() {
    const divSaludar = document.querySelector('#saludar');
    
    divSaludar.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});