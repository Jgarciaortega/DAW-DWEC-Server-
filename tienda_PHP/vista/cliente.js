

function init(){

    let url = 'http://localhost/tienda_PHP/controlador/tienda.php';
    let metodo = 'GET';
    let envio = 'null';
    let xml = true;

     descargar(metodo,url,envio,xml, tratarAjax);

}

function tratarAjax(data){


    console.log(data);
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



window.onload = init;

