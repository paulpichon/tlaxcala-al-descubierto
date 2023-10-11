//archivo que ayudara a tener logica que forma parate del SW.JS

//funcion para guardar en el  cache dinamico
function actualizaCacheDinamico( dynamicCache, req, res ) {

    //si la respuesta tienen data. debo almacenar en el CACHE
    if ( res.ok ) {
        
        return caches.open( dynamicCache ).then( cache => {
            //almacenar en el CACHE la REQUEST

            cache.put( req, res.clone() );
            //retornamos la res.clone()
            return res.clone();

        });

    } else {

        //retornar lo que sea que venga en la respuesta
        return res;

    }

}