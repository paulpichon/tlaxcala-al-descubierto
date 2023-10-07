//Registrar el Service Worker
if ( navigator.serviceWorker ) {
    //Si existe el SW registrarlo
    navigator.serviceWorker.register('./sw.js');
}


//Importar Funcion para iniciar Parallax.js
import { parallax } from "./public/js/parallax.js";

// cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Funcion para iniciar parallax.js
    parallax();
});