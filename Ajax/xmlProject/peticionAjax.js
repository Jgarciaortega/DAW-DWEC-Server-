window.onload = init;

let ruta;
let metodo;
let envio;
let xml;


function init(){

    document.querySelector('button').addEventListener('click', consultar);
     ruta = 'http://localhost/Ajax/xmlProject/menu.php';
     metodo = 'GET';
     envio = 'null';
     xml = true;
     

}

function consultar(){

     descargar(metodo,ruta,envio,xml, tratarAjax);

}

function descargar(metodo, ruta, envio, xml, funcion) {

   //Obtener la instancia del objeto XMLHttpRequest
    let peticion_http = new XMLHttpRequest();
    
     if(xml)peticion_http.overrideMimeType('text/xml');
    //  Preparar la función de respuesta
     peticion_http.onreadystatechange = mostrar;
    //  Realizar petición HTTP
     peticion_http.open(metodo, ruta, true);
     peticion_http.send(envio);

     function mostrar() {

         if (peticion_http.readyState == 4 && peticion_http.status == 200) {                    
            
             if (xml) {
               funcion(peticion_http.responseXML);
            } else funcion(peticion_http.responseText);
        }
     }


}
//var json = JSON.parse(descargar());


function tratarAjax(xml) {
   
    let table = document.querySelector('table');
    let tabla = "<tr><th>NOMBRE</th><th>PRECIO</th><th>DESCRIPCION</th><th>CALORIAS</th>";
    let comidas = xml.getElementsByTagName('comida');

    for(let i = 0; i<comidas.length; i++){

        tabla += '<tr><td>';
        tabla += comidas[i].getElementsByTagName('nombre')[0].textContent;
        tabla += '</td><td>';
        tabla += comidas[i].getElementsByTagName('precio')[0].textContent;
        tabla += '</td><td>';
        tabla += comidas[i].getElementsByTagName('descripcion')[0].textContent;
        tabla += '</td><td>';
        tabla += comidas[i].getElementsByTagName('calorias')[0].textContent;
        tabla += '</td></tr>';
    }

    table.innerHTML =  tabla;

}