function allowDrop(ev) {

    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");

    if (!ev.target.draggable) {
        ev.target.appendChild(document.getElementById(data));

    }
}


async function init() {

    await montarFichas();
    document.querySelector('button').addEventListener('click', comprobarAciertos);

    let divCheck = document.querySelectorAll('.contenedor');
    let divFotos = document.querySelector('#contenedorFotos');

    divFotos.addEventListener('dragover', allowDrop);
    divFotos.addEventListener('drop', drop);


    divCheck.forEach(div => {

        div.addEventListener('dragover', allowDrop);
        div.addEventListener('drop', drop);

    })

    let contenedorJuegos = document.querySelectorAll('.contenedorJuego');

    contenedorJuegos.forEach(img => {

        img.addEventListener('dragstart', drag);
    })

}


function montarFichas() {

    let contFotos = document.getElementById('contenedorFotos');

    return fetch('http://localhost/DAW-DWEC-Server-/GOT/servidor/got.json')
        .then(response => {

            if (response.ok) {
                return response.json();

            } else {

                throw "error en la llamada";
            }


        })

        .then(datos => {
            let cont = 0;

            datos.got.forEach(element => {
                contFotos.innerHTML +=
                    '<div class="col-xs-6 col-sm-3 contenedorJuego" id="' + element.nombre + '"data-family="' + element.familia + '" draggable="true">' +
                    '<img class="img-thumbnail" id="imagen' + cont + '"src="' + element.imagen + '" draggable="false">' +
                    '<select class="form-control">' +
                    '<option>Selecciona familia...</option>' +
                    '<option value="Casa Lannister">Casa Lanniester</option>' +
                    '<option value="Casa Targaryen">Casa Targaryen</option>' +
                    '<option value="Casa Stark">Casa Stark</option>' +
                    '<option value="Casa Bolton">Casa Bolton</option>' +
                    '<option value="Casa Tyrell">Casa Tyrell</option>' +
                    '<option value="Casa Baratheon">Casa Baratheon</option>' +
                    '<option value="Casa Clegane">Casa Clegane</option>' +
                    '</select>' +
                    '</div>';
                cont++;
            });

        })
}

function comprobarAciertos() {

    //     let fichasJuego = document.getElementsByClassName('contenedorJuego');
    //     let aciertos = 0;
    //     let fallos = 0;
    //     let seleccion;
    //     let datoCheck;

    //    for (let i = 0; i < fichasJuego.length; i++) {

    //     datoCheck = fichasJuego[i].dataset.family;
    //     seleccion = fichasJuego[i].children[1].value;

    //     if(seleccion == datoCheck ) aciertos++;
    //     else fallos ++;
    //    }

    //    mostrarResultado(aciertos,fallos);

    let aciertos = 0;
    let fallos = 0;
    let divCheck = document.getElementById('check');

    for (div of divCheck.children) {

        if(div.children.length > 0){

            let contenido = div.firstChild.nextSibling.dataset.family;
            let id = div.id;

            if(contenido == id) aciertos++;
            else fallos++;

        }
    }

    mostrarResultado(aciertos,fallos);

}


function mostrarResultado(aciertos, fallos) {

    console.log('aciertos:' + aciertos);
    console.log('fallos:' + fallos);

    let divResultados = document.createElement('div');
    let body = document.querySelector('body');

    divResultados.innerHTML = '';

    divResultados.innerHTML =
        '<p>ACIERTOS: ' + aciertos + '</p>' +
        '<p>FALLOS: ' + fallos + '</p>';

    body.appendChild(divResultados);
}


window.addEventListener('load', init);