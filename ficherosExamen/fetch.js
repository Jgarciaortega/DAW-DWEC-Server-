/*ENVIAR DATOS POR GET*/
function getFetch() {

    let url = new URL('http://192.168.4.92/rest-get.php');
    let data = { nombre: 'Angel' };
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


/*ENVIAR JSON POR POST*/
function postFetch() {

    var url = 'http://localhost/DAW-DWEC-Server-/proyectoGOT/Servidor/rest-post.php';
    var data = { nombre: nombre };

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

/*ENVIAR DATOS POR POST*/
function modifyDatabase(id, nuevoRol) {

    let url = '../controller/modifyDatabase.php';
    let data = new FormData();

    data.append('id', id);
    data.append('nuevoRol', nuevoRol);

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
        
}

/**ENVIAR FORM POR POST */
function postFormData(){

    let url = new URL('http://localhost/pruebaAngel/BBDD/php.php');  
    let datos = new FormData(form);

    fetch(url,{
        method:'POST',
        body:datos
    }).then(res => res.text())
    .then(response => console.log(response));
    
}

/*DESCARGAR DATOS EN FORMATO JSON*/
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
            datos.productos.forEach(element => {

                let estado = document.getElementById(element.estado);

                estado.innerHTML +=
                    '<div class="producto" draggable="true" id="' + element.articulo + '">' +
                    '<img src="' + element.imagen + '">' +
                    '<p>' + element.articulo + '</p>' +
                    '<p>' + element.precio + '</p>' +
                    '</div>';

            });

            });

            let productos = document.getElementsByClassName('producto');

        });

}


/**DESCARGAR XML Y TRATARLO**/
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

        });
}
