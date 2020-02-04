
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

        posicion.classList.add('droppeable');
        posicion.addEventListener('dragover', allowDrop);
        posicion.addEventListener('drop', drop);
        jugador.classList.add('contenedorJug');
        jugador.addEventListener('dragstart', drag);
        jugador.setAttribute('id', datos[i]._idjugador);
        jugador.setAttribute('draggable', 'true');
        img.classList.add('jugador');
        img.setAttribute('src', "img/" + datos[i].imagen);
        img.setAttribute('draggable','false');
        jugador.appendChild(img);
        posicion.appendChild(jugador);
        
    }

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
    
}

function drop(ev) {

    
    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();
    //Guardamos el elemento, llamado "text" en una variable.
    let data = ev.dataTransfer.getData("text");
    //Seleccionamos el elemento del dom a partir de su id
    let elemento = document.getElementById(data);
    //Obtenemos la nueva demarcacion en el campo para modificarla en la BBDD
    let nuevoRol = ev.target.dataset.rol;
    

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    if (ev.target.classList.contains('droppeable')) {
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

    // let url = '../controller/modifyDatabase.php';
    // let data = new FormData();

    // data.append('id', id);
    // data.append('nuevoRol', nuevoRol);

    // fetch(url, {
    //     method: 'POST',
    //     body: data
    // })
    //     .then(async function (response) {
    //         if (response.ok) {
    //             return await response.text();
    //         } else {

    //             throw "Error en la llamada al carrito";
    //         }
        
    //     })
    //     .then(reloadTable);

    let url = '../controller/modifyDatabase.php';
    var data = { id: id, nuevoRol: nuevoRol };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));





}


window.addEventListener("load", init);