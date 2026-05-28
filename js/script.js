// js/script.js

// Mensaje de confirmación en consola para verificar que el JS está conectado
console.log("✅ Scripts de Eventos Chiapas cargados correctamente.");

// Lógica básica para el formulario de contacto (si navegan a esa vista)
const formulario = document.querySelector('.formulario-contacto');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Evita que la página se recargue
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
        formulario.reset(); // Limpia los campos del formulario
    });
}