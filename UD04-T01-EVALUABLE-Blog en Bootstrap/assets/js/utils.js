window.addEventListener("load", iniciar,false);

/**
 * *Funcion que crea un array de Comunidades autonomas y llama la funcion insertarSelectCCAA. Tambien creamos el listener del select
 */

function iniciar(){
    crearEvento();
    crearArray();
}
function crearArray(){
    console.log("Entrando en la funcion crearArray");
    let arrayCCAA = [{id:"01",CCAA:"Andalucía"},{"id":"02","CCAA":"Aragón"},{"id":"03","CCAA":"Asturias, Principado de"},{"id":"04","CCAA":"Balears, Illes"},{"id":"05","CCAA":"Canarias"}
    ,{"id":"06","CCAA":"Cantabria"},{"id":"07","CCAA":"Castilla y León"},{"id":"08","CCAA":"Castilla - La Mancha"},{"id":"09","CCAA":"Cataluña"},{"id":"10","CCAA":"Comunitat Valenciana"}
    ,{"id":"11","CCAA":"Extremadura"},{"id":"12","CCAA":"Galicia"},{"id":"13","CCAA":"Madrid, Comunidad de"},{"id":"14","CCAA":"Murcia, Región de"}
    ,{"id":"15","CCAA":"Navarra, Comunidad Foral de"},{"id":"16","CCAA":"País Vasco"},{"id":"17","CCAA":"	Rioja, La"},{"id":"18","CCAA":"Ceuta"},{"id":"19","CCAA":"Melilla"}]
    
    insertarSelectCCAA(arrayCCAA);
    let selectCCAA = document.getElementById("CCAA");
    selectCCAA.addEventListener("change",listener,false);
    console.log("Saliendo de la funcion crearArray");
}
/**
 * * Inserta las opciones del select de comunidades autonomas
 * @param  {Array} arrayCCAA Array de comunidades autonomas
 */
function insertarSelectCCAA(arrayCCAA){
    console.log("Entrando en la funcion insertarSelectCCAA");
    let select = document.getElementById("CCAA");
    for (let index = 0; index < arrayCCAA.length; index++) {
        let option = document.createElement("option");
        option.text = arrayCCAA[index].CCAA;
        option.value = arrayCCAA[index].id;
        select.add(option);
    }
    console.log("Saliendo de la funcion insertarSelectCCAA");
}
/**
 * * Recoje el objeto del evento y llama a la funcion insertarProvincias pasando como parametro ese objeto
 * @param  {Event} e 
 */
function listener(e){
    console.log("Entrando en la funcion listener");
    let objeto = e.currentTarget;
    insertarProvincias(objeto.value)
    console.log("Saliendo de la funcion listener");
}
/**
 * * Crea el array de provincias, recoje todas las provincias que coinciden con el id de CCAA e posteriormente introduce en el select de provincia las opciones correspondientes.
 * @param  {Object} idCCAA Comunidad autonoma
 */
function insertarProvincias(idCCAA){
    console.log("Entrando en la funcion insertarProvincias");
    let arrayProvincias = [{"id": "04","nm": "Almería","idCCAA":"01"}, {"id": "11","nm": "Cádiz","idCCAA":"01"}, {"id": "14","nm": "Córdoba","idCCAA":"01"},
    {"id": "18","nm": "Granada","idCCAA":"01"}, {"id": "21","nm": "Huelva","idCCAA":"01"}, {"id": "23","nm": "Jaén","idCCAA":"01"}, {"id": "29","nm": "Málaga","idCCAA":"01"},
    {"id": "41","nm": "Sevilla","idCCAA":"01"},
    {"id": "22","nm": "Huesca","idCCAA":"02"}, {"id": "44","nm": "Teruel","idCCAA":"02"}, {"id": "50","nm": "Zaragoza","idCCAA":"02"},{"id": "33","nm": "Asturias","idCCAA":"03"},
    {"id": "07","nm": "Balears, Illes","idCCAA":"04"},
    {"id": "35","nm": "Palmas, Las","idCCAA":"05"}, {"id": "38","nm": "Santa Cruz de Tenerife","idCCAA":"05"}, {"id": "39","nm": "Cantabria","idCCAA":"06"},
    {"id": "05","nm": "Ávila","idCCAA":"07"}, {"id": "09","nm": "Burgos","idCCAA":"07"},{"id": "24","nm": "León","idCCAA":"07"},
    {"id": "34","nm": "Palencia","idCCAA":"07"}, {"id": "37","nm": "Salamanca","idCCAA":"07"}, {"id": "40","nm": "Segovia","idCCAA":"07"}, {"id": "42","nm": "Soria","idCCAA":"07"},
    {"id": "47","nm": "Valladolid","idCCAA":"07"}, {"id": "49","nm": "Zamora","idCCAA":"07"},{"id": "02","nm": "Albacete","idCCAA":"08"}, {"id": "13","nm": "Ciudad Real","idCCAA":"08"},
    {"id": "16","nm": "Cuenca","idCCAA":"08"}, {"id": "19","nm": "Guadalajara","idCCAA":"08"}, {"id": "45","nm": "Toledo","idCCAA":"08"},
    {"id": "08","nm": "Barcelona","idCCAA":"09"},{"id": "17","nm": "Girona","idCCAA":"09"}, {"id": "25","nm": "Lleida","idCCAA":"09"}, {"id": "43","nm": "Tarragona","idCCAA":"09"},
    {"id": "03","nm": "Alicante/Alacant","idCCAA":"10"}, {"id": "12","nm": "Castellón/Castelló","idCCAA":"10"}, {"id": "46","nm": "Valencia/València","idCCAA":"10"},
    {"id": "06","nm": "Badajoz","idCCAA":"11"}, {"id": "10","nm": "Cáceres","idCCAA":"11"}, {"id": "15","nm": "Coruña, A","idCCAA":"12"}, {"id": "27","nm": "Lugo","idCCAA":"12"},
    {"id": "32","nm": "Ourense","idCCAA":"12"}, { "id": "36","nm": "Pontevedra","idCCAA":"12"}, 
    {"id": "28","nm": "Madrid","idCCAA":"13"}, {"id": "30","nm": "Murcia","idCCAA":"14"}, {"id": "31","nm": "Navarra","idCCAA":"15"},
    {"id": "01","nm": "Araba/Álava","idCCAA":"16"}, {"id": "48","nm": "Bizkaia","idCCAA":"16"}, {"id": "20","nm": "Gipuzkoa","idCCAA":"16"},
    {"id": "26","nm": "Rioja, La","idCCAA":"17"}, {"id": "51", "nm": "Ceuta","idCCAA":"18"}, {"id": "52","nm": "Melilla","idCCAA":"19"}]

    let arrayAux = [];
    for (let index = 0; index < arrayProvincias.length; index++) {
        if(arrayProvincias[index].idCCAA == idCCAA){
            arrayAux.push(arrayProvincias[index]);
        }
    }
    
    let select = document.getElementById("provincias");
    select.innerHTML ="<option value='' selected disabled></option>";
    for (let index = 0; index < arrayAux.length; index++) {
        let option = document.createElement("option");
        option.text = arrayAux[index].nm;
        option.value = arrayAux[index].id;
        select.add(option);
    }
    console.log("Saliendo de la funcion insertarProvincias");
}


function crearEvento(){

    let objeto = document.getElementById("content").firstElementChild;
    objeto.addEventListener("click", listener, false);
}
function listener(e){
    let objeto = e.currentTarget;
    quitarVideo(objeto);
}

function quitarVideo(objeto){
    let contenedor = document.getElementById("contenedor");
    contenedor.className = "container-fluid"
    let video = document.body.firstElementChild;
    video.className = "oculto";
    document.getElementById("container").className = "container";
    objeto.removeEventListener("click", listener, false);
    video.remove();
}