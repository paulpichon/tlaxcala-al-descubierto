// Funcion para iniciar parallax.js
const parallax = () => {
    // const scene = document.getElementById('scene'); esto es lo que originalmente viene el el codigo parallax
    const scene = document.querySelector('.parallaxContenedor');
    const parallaxInstance = new Parallax(scene);
    const scene2 = document.querySelector('.parallaxContenedor2');
    const parallaxInstance2 = new Parallax(scene2);
}
// exports
export {
    parallax
}