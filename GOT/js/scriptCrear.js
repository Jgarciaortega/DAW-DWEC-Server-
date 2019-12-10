

function leerNombre() {

    if (this.value == "") document.getElementById('enombre').classList.add('visible');
    else nombre = this.value;

}

function leerApellidos() {

    if (this.value == "") document.getElementById('eapellidos').classList.add('visible');
    else apellidos = this.value;
}

function leerCasa() {

    if (this.value == "") document.getElementById('ecasa').classList.add('visible');
    else casa = this.value;
}


function leerPadres() {

    if (this.value == "") document.getElementById('epadres').classList.add('visible');
    else padres = this.value;
}

function leerTitulo() {

    if (this.value == "") document.getElementById('etitulo').classList.add('visible');
    else titulo = this.value;
}

function mostrarImagen() {

    if (this.value == "img/") document.getElementById('eimagen').classList.add('visible');
    else imagen = this.value;
}

function mostrarPersonaje(){

    let contFichas = document.getElementById('contenedorFichas');

        let img = document.createElement('img');
        img.setAttribute('src', imagen);
       
        let datos = document.createElement('div');
        datos.setAttribute('class', 'datos');

        //CABECERA NOMBRE
        let cabeceraNom = document.createElement('div');
        cabeceraNom.innerHTML = 'Nombre';
        cabeceraNom.classList.add('small');
        cabeceraNom.classList.add('cabecera');
        datos.appendChild(cabeceraNom);

        //CABECERA APELLIDOS
        let cabeceraApe = document.createElement('div');
        cabeceraApe.innerHTML = 'Apellidos';
        cabeceraApe.classList.add('medium');
        cabeceraApe.classList.add('cabecera');
        datos.appendChild(cabeceraApe);

        //NOMBRE PERSONAJE
        let datoNom = document.createElement('div');
        datoNom.innerHTML = nombre;
        datoNom.classList.add('small');
        datoNom.classList.add('dato');
        datos.appendChild(datoNom);

        //APELLIDOS PERSONAJE
        let datoApe = document.createElement('div');
        datoApe.innerHTML = apellidos;
        datoApe.classList.add('medium');
        datoApe.classList.add('dato');
        datos.appendChild(datoApe);

        //CABECERA PADRES
        let cabeceraPad = document.createElement('div');
        cabeceraPad.innerHTML = 'Padres';
        cabeceraPad.classList.add('medium');
        cabeceraPad.classList.add('cabecera');
        datos.appendChild(cabeceraPad);

        //CABECERA CASA
        let cabeceraCas = document.createElement('div');
        cabeceraCas.innerHTML = 'Casa';
        cabeceraCas.classList.add('small');
        cabeceraCas.classList.add('cabecera');
        datos.appendChild(cabeceraCas);

        //PADRES PERSONAJE
        let datoPad = document.createElement('div');
        datoPad.innerHTML = padres;
        datoPad.classList.add('medium');
        datoPad.classList.add('dato');
        datos.appendChild(datoPad);

        //TITULO PERSONAJE
        let datoTit = document.createElement('div');
        datoTit.innerHTML = titulo;
        datoTit.classList.add('big');
        datoTit.classList.add('dato');
        datos.appendChild(datoTit);

        contFichas.appendChild(img);
        contFichas.appendChild(datos);

}

function init() {

    document.getElementById('nombre').addEventListener('blur', leerNombre);
    document.getElementById('apellidos').addEventListener('blur', leerApellidos);
    document.getElementById('casa').addEventListener('blur', leerCasa);
    document.getElementById('padres').addEventListener('blur', leerPadres);
    document.getElementById('titulo').addEventListener('blur', leerTitulo);
    document.getElementById('imagen').addEventListener('blur', mostrarImagen);
    document.querySelector('button').addEventListener('click', mostrarPersonaje);

}

//VARIABLE GLOBALES

let nombre;
let apellidos;
let casa;
let padres;
let titulo;
let imagen;

window.addEventListener('load', init);