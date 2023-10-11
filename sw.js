//imports
importScripts('public/js/sw-utils.js');

//Cache
const STATIC_CACHE    = 'static-v1';
const DYNAMIC_CACHE   = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

//Todo lo necesario para la aplicacion
const APP_SHELL = [
    '/',
    'index.html',
    'public/css/index.css',
    'public/img/tlaxcallan.png',
    'app.js'
];

//Todo lo necesario pero que no se va a modificar JAMAS
const APP_SHELL_INMUTABLE = [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js'
];

//Instalacion
self.addEventListener('install', e => {

    //Almacenar en CACHE APP_SHELL y APP_SHELL_INMUTABLE
    const cacheStatic = caches.open( STATIC_CACHE ).then( cache => 
        cache.addAll( APP_SHELL ));

    const cacheInmutable = caches.open( INMUTABLE_CACHE ).then( cache => 
        cache.addAll( APP_SHELL_INMUTABLE ));


    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ]) );
});

//Proceso para borrar los CACHES anteriores que ya no van a servir
self.addEventListener('activate', e => {
    //verificar si el cache actual del SW es la misma del que se encuentra activo no se debe de hacer nada

    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {
            
            //static
            if ( key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete( key );
            }

        });

    });

    e.waitUntil( respuesta );

});

//cache con network fallback
self.addEventListener('fetch', e => {

    //verificar en el CACHE si existe LA REQUEST
    const respuesta = caches.match( e.request ).then( res => {
        
        //si existe la respuesta devolvemos la respuesta
        if ( res ) {
            return res;
        } else {
            //si no existe la respuesta
            
            return fetch( e.request ).then( newRes => {
                return actualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );
            });
            
        }
    });


    //respuesta
    e.respondWith( respuesta );

});