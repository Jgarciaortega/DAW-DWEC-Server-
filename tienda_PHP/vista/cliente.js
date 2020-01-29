
function cargarEnCarrito(){

    listaProductos.push(this.id);

    let url = 'http://localhost/DAW-DWEC-Server-/tienda_PHP/controlador/cargarCarrito.php';
    let data = new FormData();

    data.append('listaProductos', listaProductos);

    fetch(url,{
        method: 'POST',
        body: data
    })
    .then(function(response){
        if(response.ok){
            return response.text();
        }else{

            throw "Error en la llamada al carrito";
        }
    });
   
}

function init(){

   loadView('http://localhost/DAW-DWEC-Server-/tienda_PHP/controlador/init.php');
   listaProductos = [];
    
}

function loadView(url){

    fetch(url)
    .then(function(response){

       if(response.ok){
           return response.json();
       }else{
           throw 'Error en la llamada';
       }
    })
    .then(datos => {

        let tabla = document.querySelector('table');
        datos.forEach(element => {
           
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let img = document.createElement('img');
            img.setAttribute('src', 'img/'+element.imagen);
            td1.appendChild(img);
            tr.appendChild(td1);
            let td2 = document.createElement('td');
            td2.innerHTML = element.precio + "€";
            tr.appendChild(td2);
            let td3 = document.createElement('td');
            let input = document.createElement('input');
            td3.appendChild(input);
            input.setAttribute('type', 'image');
            input.setAttribute('src', 'img/carrito.png');
            input.setAttribute('id', element._idproducto);
            input.addEventListener('click', cargarEnCarrito);
            tr.appendChild(td3);
            tabla.appendChild(tr);
            
        });
       
    })

    .catch(function(error){
        console.log(error);
    });
}

let listaProductos;
window.onload = init;

