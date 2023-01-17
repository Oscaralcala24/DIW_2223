window.addEventListener("load", crearEvento, false);

function crearEvento(){
    console.log("aaaaaaaa");
    let objeto = document.getElementById("content").firstElementChild;
    console.log(objeto);
    console.log(objeto.firstElementChild);
    objeto.addEventListener("click", listener, false);
}
function listener(e){
    let objeto = e.currentTarget;
    quitarVideo(objeto);
}

function quitarVideo(objeto){
    let video = document.body.firstElementChild;
    video.className = "oculto";
    document.getElementById("container").className = "container";
    objeto.removeEventListener("click", listener, false);
    video.remove();
}