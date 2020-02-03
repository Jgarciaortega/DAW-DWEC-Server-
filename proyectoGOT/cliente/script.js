
function init() {

    obtenerJSON();
    document.querySelector('button').addEventListener('click', recogerDatos);

}

function obtenerJSON() {

    let url = '../servidor/got.json';

    fetch(url)
        .then(response => response.json())
        .then(datos => montarInterfaz(datos));

}


function recogerDatos() {

    // let inputs = document.querySelectorAll('input');

    // postFetch(inputs[0].value,inputs[1].value);

    // getFetch('Angel');
    // postFetch('Angel');
    rest('Angel');

}


function rest(nombre){

    let url = 'http://localhost/DAW-DWEC-Server-/proyectoGOT/Servidor/rest.php';
    let data = new FormData();

    data.append('nombre', nombre);
  

    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(datos => console.log(datos));


}

function getFetch(nombre) {

    let url = new URL('http://localhost/DAW-DWEC-Server-/proyectoGOT/Servidor/rest-get.php');
    let data = { nombre: nombre };
    url.search = new URLSearchParams(data).toString();

    fetch(url, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

}

function postFetch(nombre) {

    var url = 'http://localhost/DAW-DWEC-Server-/proyectoGOT/Servidor/rest-post.php';
    var data = { nombre: nombre };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', response));

}










function montarInterfaz(datos) {

    let main = document.querySelector('main');
    let divArriba = document.createElement('div');
    divArriba.addEventListener('dragover', allowDrop);
    divArriba.addEventListener('drop', drop);
    divArriba.setAttribute('id', 'zonaArriba');
    divArriba.classList.add('draggable');
    let divAbajo = document.createElement('div');
    divAbajo.addEventListener('dragover', allowDrop);
    divAbajo.setAttribute('id', 'zonaAbajo');
    divAbajo.addEventListener('drop', drop);
    divAbajo.classList.add('draggable');

    datos.got.forEach(element => {

        let divPersonaje = document.createElement('div');
        divPersonaje.classList.add('personajes');
        divPersonaje.setAttribute('id', element.nombre);
        divPersonaje.setAttribute('draggable', 'true');
        divPersonaje.addEventListener('dragstart', drag);
        let divDatos = document.createElement('div');
        divDatos.classList.add('datos');
        let divFoto = document.createElement('div');
        divFoto.classList.add('fotos');
        let labelNom = document.createElement('label');
        let labelApell = document.createElement('label');
        let labelFamilia = document.createElement('label');
        let labelPadres = document.createElement('label');
        let labelTitul = document.createElement('label');
        let pNom = document.createElement('p');
        let pApell = document.createElement('p');
        let pFamilia = document.createElement('p');
        let pPadres = document.createElement('p');
        let pTitul = document.createElement('p');
        let img = document.createElement('img');

        labelNom.innerHTML = 'NOMBRE: ';
        labelApell.innerHTML = 'APELLIDOS: ';
        labelFamilia.innerHTML = 'FAMILIA: ';
        labelPadres.innerHTML = 'PADRES: ';
        labelTitul.innerHTML = 'TITULO: ';

        pNom.appendChild(labelNom);
        pNom.innerHTML += element.nombre;
        pApell.appendChild(labelApell);
        pApell.innerHTML += element.apellidos;
        pFamilia.appendChild(labelFamilia);
        pFamilia.innerHTML += element.familia;
        pPadres.appendChild(labelPadres);
        pPadres.innerHTML += element.padres;
        pTitul.appendChild(labelTitul);
        pTitul.innerHTML += element.titulo;

        divDatos.appendChild(pNom);
        divDatos.appendChild(pApell);
        divDatos.appendChild(pFamilia);
        divDatos.appendChild(pPadres);
        divDatos.appendChild(pTitul);

        img.setAttribute('src', 'img/guerrero.png');
        img.setAttribute('width', '150px');

        divFoto.appendChild(img);

        divPersonaje.appendChild(divDatos);
        divPersonaje.appendChild(divFoto);

        divArriba.appendChild(divPersonaje);
        main.appendChild(divArriba);
        main.appendChild(divAbajo);
    });

}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
    ev.preventDefault();

}

function drop(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");

    console.log(data);

    if (ev.target.classList.contains('draggable')) {
        ev.target.appendChild(document.getElementById(data));
    }
}

window.addEventListener('load', init);