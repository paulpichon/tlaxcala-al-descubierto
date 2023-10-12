//para esta parte, y para resolver dudas o mas INFO ver el sig video
//https://www.udemy.com/course/aplicaciones-web-progresivas/learn/lecture/11895522#questions/8464974
//validar la si la URL esta en produccion o desarrollo
//URL
const url = window.location.href;

//localizacion del SW
//si la PWA se encuentra dentro de una carpeta debemos poner,
// la URL de la carpeta mas /sw.js
//ejemplo: https://joyful-palmier-7fd55a.netlify.app/tad/sw.js
//Y swLocation = /tad/sw.js
// En este caso como no hay una carpeta donde este la PWA, sino que esta en la raiz se pone solo /sw.js
const swLocation = '/sw.js';


//Registrar el Service Worker
if ( navigator.serviceWorker ) {

    //validar si esta en localhost
    if ( url.includes('localhost') ) {
        swLocation = '/sw.js';
    }

    //Si existe el SW registrarlo
    navigator.serviceWorker.register( swLocation );
}


//Importar Funcion para iniciar Parallax.js
import { parallax } from "./public/js/parallax.js";

// cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Funcion para iniciar parallax.js
    parallax();
});