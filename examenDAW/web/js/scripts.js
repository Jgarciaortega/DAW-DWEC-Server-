var juego;
var itemsHTML;
var items;
var miJugada;
var jugadaMaquina;
var misPuntos = 0;
var maquinaPuntos = 0;
var mensaje = "";
var fin = false;
var puntuo = false;
var puntua = false;
var puntos = 0;
var mensajes = {};
var imagenProvisional;
var divProvisional;

window.onload = function () {
    ajaxRules();
    ajax();
    itemsHTML = document.getElementById("selector").getElementsByClassName("item");
    document.getElementById("continuar").addEventListener("click", continuar);
}
/********************************************************
 * Función continuar():
 * Realiza las labores de incicializar los elementos del tablero de juego. Teniendo
 * en cuenta, si el juego ya ha finalizado.
 ********************************************************/
function continuar() {
    puntuo = false;
    puntua = false;
    //Volvemos a ocultar el mensaje;
    document.getElementById("mensaje").className = "invisible";
    document.getElementById("proteccion").className = "invisible";
    document.getElementById("deliveracion").className = "invisible";
    if (fin) {
        document.getElementById("yo").innerHTML = "";
        document.getElementById("el").innerText = "";
        fin = false;
        misPuntos = 0;
        maquinaPuntos = 0;
    }
    //Reiniciamos todo menos los contadores de puntos
    cargar();

}

/********************************************************
 * Función comprobarResultado()
 * Comprueba las jugadas de cada jugador, deliberando y viendo quien gana
 */
function comprobarResultado() {

    switch (miJugada) {
        case "rock":
            if (jugadaMaquina == "paper") { puntua = true; mensaje = mensajes.papi }
            if (jugadaMaquina == "scissors") { puntuo = true; mensaje = mensajes.piti }
            if (jugadaMaquina == "lizard") { puntuo = true; mensaje = mensajes.pila }
            if (jugadaMaquina == "spock") { puntua = true; mensaje = mensajes.sppi }
            break;
        case "paper":
            if (jugadaMaquina == "rock") { puntuo = true; mensaje = mensajes.papi }
            if (jugadaMaquina == "scissors") { puntua = true; mensaje = mensajes.tipa }
            if (jugadaMaquina == "lizard") { puntua = true; mensaje = mensajes.lapa }
            if (jugadaMaquina == "spock") { puntuo = true; mensaje = mensajes.pasp }
            break;
        case "scissors":
            if (jugadaMaquina == "rock") { puntua = true; mensaje = mensajes.piti }
            if (jugadaMaquina == "paper") { puntuo = true; mensaje = mensajes.tipa }
            if (jugadaMaquina == "lizard") { puntuo = true; mensaje = mensajes.tila }
            if (jugadaMaquina == "spock") { puntua = true; mensaje = mensajes.spti }
            break;
        case "lizard":
            if (jugadaMaquina == "rock") { puntua = true; mensaje = mensajes.pila }
            if (jugadaMaquina == "paper") { puntuo = true; mensaje = mensajes.lapa }
            if (jugadaMaquina == "scissors") { puntua = true; mensaje = mensajes.tila }
            if (jugadaMaquina == "spock") { puntuo = true; mensaje = mensajes.lasp }
            break;
        case "spock":
            if (jugadaMaquina == "rock") { puntuo = true; mensaje = mensajes.sppi }
            if (jugadaMaquina == "paper") { puntua = true; mensaje = mensajes.pasp }
            if (jugadaMaquina == "scissors") { puntuo = true; mensaje = mensajes.spti }
            if (jugadaMaquina == "lizard") { puntua = true; mensaje = mensajes.lasp }
            break;
        default: break;
    }

    if (puntuo && !puntua) {
        misPuntos += parseInt(juego.getElementById(miJugada).getElementsByTagName("puntos")[0].innerHTML);
    } else if (!puntuo && puntua) {
        maquinaPuntos += parseInt(juego.getElementById(jugadaMaquina).getElementsByTagName("puntos")[0].innerHTML);
    } else {
        mensaje = "¡Empate!";
    }
    setTimeout(deliverar, 500);
    /**********/

}

/*********************************************************
 * función deliverar()
 * Mensaje estúpido para simular una deliveración de la máquina.
 ********************************************************/
function deliverar() {
    document.getElementById("proteccion").className = "visible";
    document.getElementById("deliveracion").className = "visible";
    setTimeout(mostrarMensaje, 2000);
}

/**********************************************************
 * función pintarPuntos()
 * @param puntos
 * @param totalPuntos
 * comprueba los puntos que tiene que pintar, y comprueba si el total
 * de puntos del jugador ganador, supera o igual los 10 que necesita para
 * finalizar el juego
 **********************************************************/
function pintarPuntos(puntos, totalPuntos) {
    var contenedor;

    if (puntuo && totalPuntos >= 10) {
        mensaje = "Has ganado!";
        fin = true;
    }
    if (puntua && totalPuntos >= 10) {
        mensaje = "Has perdido!";
        fin = true;
    }

    if (puntuo) contenedor = document.getElementById("yo");
    else if (puntua) contenedor = document.getElementById("el");

    if (puntuo || puntua) {
        for (let i = 0; i < puntos; i++) {
            var punto = document.createElement("div");
            punto.className = "punto";
            if (puntuo) punto.classList.add("mio");
            else punto.classList.add("suyo");
            contenedor.appendChild(punto);
        }
    }
}

/*******************************************************
 * función mostrarMensaje()
 * Muestra el mensaje resultado de la deliberación de cada unaa de las jugadas.
 * Este mensaje es extraído del Array llamado "mensajes", y que ha sido cargado previamente
 * mediante una descarga asíncrona del archivo "mensajes.json" que hay alojado en el servidor.
 *******************************************************/
function mostrarMensaje() {
    var jugada;
    if (puntuo) {
        jugada = miJugada;
        puntosJugada = misPuntos;
        pintarPuntos(parseInt(juego.getElementById(jugada).getElementsByTagName("puntos")[0].innerHTML), puntosJugada);
    }
    else if (puntua) {
        jugada = jugadaMaquina;
        puntosJugada = maquinaPuntos;
        pintarPuntos(parseInt(juego.getElementById(jugada).getElementsByTagName("puntos")[0].innerHTML), puntosJugada);
    }

    var msg = document.getElementById("mensaje");
    msg.getElementsByTagName("p")[0].innerHTML = mensaje;
    msg.className = "visible";
    document.getElementById("proteccion").className = "visible";
}

/***********************************************
 * función selecciónMáquina()
 * Cuando el jugador selecciona su jugada, situando la imagen correspondiente en la
 * celda de juego, la máquina actua calculando un número aleatorio y eligiendo su jugada.
 *************************************************/
function seleccionMaquina() {
    //Calculamos un número random de 0 a 4
    var eleccion = Math.floor(Math.random() * 5);
    //colocamos la elección de la máquina en su círculo
    jugadaMaquina = items[eleccion].id;
    document.getElementById("enemigo").getElementsByTagName("img")[0].src = items[eleccion].getElementsByTagName("imagen")[0].innerHTML;
    comprobarResultado();
}

/************************* CARGA AJAX ********************************/

//Cargar desde el servidor info.xml
//Enlazar cada item con su correspondiente elemento HTML

//Cargar desde el servidor mensajes.json
//Enlazar los mensajes con el array hecho para ese uso "mensajes".

function ajaxRules() {


    let url = 'http://localhost/examenDAW/web/mensajes.json';

    fetch(url)
        .then(res => res.json())
        .then(datos => {

            datos.mensajes.forEach(dato => {

                mensajes = dato;
            })
        });

}

function cargar() {

    //Restauramos la imagen en su selector de origen
    let img = document.createElement('img');
    img.setAttribute('src',imagenProvisional); 
    img.setAttribute('id',miJugada);
    document.getElementById(divProvisional).appendChild(img);

    //Reiniciamos valores
    miJugada = '';
    document.getElementById('seleccionado').innerHTML = '';

    //Restaruamos el interrogante en la opcion de la maquina
    let interrogante = document.getElementById('enemigo');
    let imgInterrogante = interrogante.querySelector('img');
    imgInterrogante.setAttribute('src', 'img/interrogante.png');
    

}


function ajax() {

    let url = 'http://localhost/examenDAW/web/info.xml';

    fetch(url)
        .then(res => res.text())
        .then(txt => {

            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(txt, "text/xml");
            }

            ////Asignamos el juego del xml...
            juego = xmlDoc;

            //Asignamos los valores item del xml a la variable global items
            items = xmlDoc.getElementsByTagName('item');

            //Seleccionamos todas las imagenes del xml
            let imagenesXML = xmlDoc.getElementsByTagName('imagen');

            //Selecciono todos los nombres del xml
            let nombresXML = xmlDoc.getElementsByTagName('nombre');

            //Seleccionamos todos los div 
            let divSelector = document.getElementById('selector');
            let divImagenes = divSelector.querySelectorAll('.item');
            let titulosImg = divSelector.querySelectorAll('h3');

            for (let i = 0; i < divImagenes.length; i++) {

                let img = imagenesXML[i].textContent;
                let nombre = nombresXML[i].textContent;

                //Creo imgs dentro de los divs 
                let imagenHTML = document.createElement('img');
                imagenHTML.setAttribute('src', img);
                imagenHTML.setAttribute('id', 'imagen' + i);
                imagenHTML.setAttribute('data-id', items[i].id);

                divImagenes[i].setAttribute('id', nombre)
                divImagenes[i].appendChild(imagenHTML);

                //Añado nombres a las etiquetas H3
                titulosImg[i].innerHTML = nombre;

            }

            //Una vez añadidas las imgs asigno los eventos drag drop
            draganddrop();


        });
}


/*************************** FIN CARGA AJAX **************************/


/***************************DRAG AND DROP ****************************/

function allowDrop(ev) {

    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

    miJugada = ev.target.dataset.id;
    imagenProvisional = ev.target.src;
    divProvisional = ev.target.parentNode.id;

}

function drop(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");

    if (!ev.target.draggable) {

        ev.target.appendChild(document.getElementById(data));
        seleccionMaquina();

    }
}


function draganddrop() {

    //Asigno los eventos dragstart a las imagenes que seran transportadas
    for (let i = 0; i < itemsHTML.length; i++) {

        itemsHTML[i].addEventListener('dragstart', drag);
    }

    //Asigno los efectos de drop a la zona dropeable
    let seleccionado = document.getElementById('seleccionado');
    seleccionado.addEventListener('dragover', allowDrop);
    seleccionado.addEventListener('drop', drop);


}

/***************************FIN DRAG AND DROP **************************/