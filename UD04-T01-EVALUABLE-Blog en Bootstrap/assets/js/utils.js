window.addEventListener("load", iniciar,false);

/**
 * *Funcion que crea un array de Comunidades autonomas y llama la funcion insertarSelectCCAA. Tambien creamos el listener del select
 */

function iniciar(){
    crearEvento();
}

function crearEvento(){

    let objeto = document.getElementById("botonCerrar");  
    objeto.addEventListener("click", listener, false);
}
function listener(e){
    let objeto = e.currentTarget;

    quitarVideo(objeto);
}

function quitarVideo(objeto){
    let contenedor = document.getElementById("contenedor");
    contenedor.className = "container-fluid";
    let video = document.getElementById("video");
    console.log(video)
    video.className = "oculto";
    objeto.removeEventListener("click", listener, false);
    video.remove();
}