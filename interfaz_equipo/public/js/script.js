
function init() {

    let url = '../controller/init.php';
  
    fetch(url)
        .then(function (response) {

            if (response.ok) {
                return response.json();

            } else {
                throw 'Error en la llamada';
            }
        })
        .then(datos => {
            
            loadInterface(datos);
            loadDataTable(datos);

        });
}


function limpiarNodo(elemento) {

    if (elemento.hasChildNodes()) {
       
        while (elemento.childNodes.length >= 1) {
            elemento.removeChild(elemento.firstChild);
        }
    }

}

function loadInterface(datos) {

    let demarcacion;
    
    for (let i = 0; i < datos.length; i++) {

        if (i == 0) demarcacion = 'porteria';
        if (i > 0 && i < 5) demarcacion = 'defensa';
        if (i > 4 && i < 9) demarcacion = 'medio';
        if (i > 8 && i < 11) demarcacion = 'delantera';
        if (i > 10) demarcacion = 'banquillo';

        let posicion = document.getElementById(demarcacion);
        let jugador = document.createElement('div');
        let img = document.createElement('img');

        jugador.addEventListener('dragover', allowDrop);
        jugador.addEventListener('drop', drop);
        jugador.classList.add('contenedorJug');
        img.addEventListener('dragstart', drag);
        img.setAttribute('id', datos[i]._idjugador);
        img.classList.add('jugador');
        img.setAttribute('src', "img/" + datos[i].imagen);
        // img.setAttribute('draggable', 'true');
        jugador.appendChild(img);
        posicion.appendChild(jugador);
        
    }

    //Ya que no se drag drop sobre div con img creamos un div vacio para ello
    let pos = document.getElementById('banquillo');
    let jug = document.createElement('div');

    jug.addEventListener('dragover', allowDrop);
    jug.addEventListener('drop', drop);
    jug.classList.add('contenedorJug');
    pos.appendChild(jug);

}


function loadDataTable(datos) {

    let data = document.getElementById('datos');
    let table = document.querySelector('table');
    let tr1 = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    th2.innerHTML = "NOMBRE";
    th3.innerHTML = "POSICION";
    th1.innerHTML = "DORSAL";
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    table.appendChild(tr1);

    datos.forEach(element => {
        
        /*CREA TABLA JUGADORES*/
        let tr2 = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = element._idjugador;
        let td2 = document.createElement('td');
        td2.innerHTML = element.nombre;
        let td3 = document.createElement('td');
        td3.innerHTML = element.demarcacion;
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);

        table.appendChild(tr2);
    });

    data.appendChild(table);

}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
    ev.preventDefault();

}

function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.parentNode.pare);
    
}

function drop(ev) {

    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();
    //Guardamos el elemento, llamado "text" en una variable.
    let data = ev.dataTransfer.getData("text");
    //Seleccionamos el elemento del dom a partir de su id
    let elemento = document.getElementById(data);
    //Obtenemos la nueva demarcacion en el campo para modificarla en la BBDD
    let elementoPadre = ev.target.parentNode;
    let nuevoRol = elementoPadre.dataset.rol;

    console.log(ev.dataTransfer.getData("text"));
    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    if (!ev.target.draggable) {
        ev.target.appendChild(elemento);
        modifyDatabase(data, nuevoRol);
    }

}

function reloadTable(){

    let table = document.querySelector('table');

    limpiarNodo(table);

    let url = '../controller/init.php';
  
    fetch(url)
        .then(function (response) {

            if (response.ok) {
                return response.json();

            } else {
                throw 'Error en la llamada';
            }
        })
        .then(datos => {
           
            loadDataTable(datos);

        });

}

function modifyDatabase(id, nuevoRol) {

    let url = '../controller/modifyDatabase.php';
    let data = new FormData();

    data.append('id', id);
    data.append('nuevoRol', nuevoRol);

    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(async function (response) {
            if (response.ok) {
                return await response.text();
            } else {

                throw "Error en la llamada al carrito";
            }
        
        })
        .then(reloadTable);
}


window.addEventListener("load", init);