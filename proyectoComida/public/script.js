

function init() {

    //getJSON();
    getXML();
    let contenedores = document.getElementsByClassName('contenedor');

    for (contenedor of contenedores) {

        contenedor.addEventListener('dragover', allowDrop);
        contenedor.addEventListener('drop', drop);
    }

}

function getXML() {

    let url = 'http://localhost/DAW-DWEC-Server-/proyectoComida/servidor/comida.php';

    fetch(url)
        .then(res => res.text())
        .then(txt => {

            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(txt, "text/xml");
            }
            let articulos = xmlDoc.getElementsByTagName('articulo');
            let precios = xmlDoc.getElementsByTagName('precio');
            let imgs = xmlDoc.getElementsByTagName('imagen');
            let estados = xmlDoc.getElementsByTagName('estado');

            for (let i = 0; i < articulos.length; i++) {
         
                articulo = articulos[i].textContent;
                precio = precios[i].textContent;
                img = imgs[i].textContent;
                estado = estados[i].textContent;
               
                let divEstado = document.getElementById(estado);

                divEstado.innerHTML += 
                '<div class="producto" draggable="true" id="' + articulo + '">' +
                '<img src="' + img + '">' +
                '<p>' + articulo + '</p>' +
                '<p>' + precio + '</p>' +
                '</div>';

            }

            let productos = document.getElementsByClassName('producto');

            for (producto of productos) {

                producto.addEventListener('dragstart', drag);
            }

        });
}


function getJSON() {

    let url = 'http://localhost/DAW-DWEC-Server-/proyectoComida/servidor/comida.json';

    fetch(url)
        .then(res => res.json())
        .then(datos => {

            datos.productos.forEach(element => {

                let estado = document.getElementById(element.estado);

                estado.innerHTML +=
                    '<div class="producto" draggable="true" id="' + element.articulo + '">' +
                    '<img src="' + element.imagen + '">' +
                    '<p>' + element.articulo + '</p>' +
                    '<p>' + element.precio + '</p>' +
                    '</div>';

            });

            let productos = document.getElementsByClassName('producto');

            for (producto of productos) {

                producto.addEventListener('dragstart', drag);
            }
        });

}

function allowDrop(ev) {

    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");
    let element = document.getElementById(data);
    
    if (!ev.target.draggable) {
       
        ev.target.appendChild(element);
        mostrarNuevoXML(ev.target.id);
    }
}


function mostrarNuevoXML(estado){

    let url = 'http://localhost/DAW-DWEC-Server-/proyectoComida/servidor/newFood.php';
    let data = new FormData();

    data.append('estado', estado);
    
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(function (response) {
            if (response.ok) {
                return response.text();
            } else {

                throw "Error en la llamada al carrito";
            }
        
        })
        .then(txt => {

            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(txt, "text/xml");
            }

            console.log(xmlDoc);

        })
        
}


window.addEventListener('load', init);