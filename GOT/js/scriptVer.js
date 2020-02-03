function init(){

    let url = 'http://localhost/DAW-DWEC-Server-/GOT/servidor/got.json';

    obtenerJSON(url);
}

function obtenerJSON(url){

    fetch(url)
    .then(response => {

        if(response.ok){
            return response.json();

        }else{

            throw "error en la llamada";
        }
        

    })
    .then(datos => {

        let contenedorFichas = document.getElementById('contenedorFichas');

        datos.got.forEach(element => {
            console.log(element);
           contenedorFichas.innerHTML += 
           '<img src="'+element.imagen+'">'+
           '<div class="datos">'+
           '<div class="small cabecera">Nombre</div>'+
           '<div class="medium cabecera">Apellidos</div>'+
           '<div class="small dato">'+element.nombre+'</div>'+
           '<div class="medium dato">'+element.apellidos+'</div>'+
           '<div class="medium cabecera">Padres</div>'+
           '<div class="small cabecera">Casa</div>'+
           '<div class="medium dato">'+element.padres+'</div>'+
           '<div class="small dato">'+element.familia+'</div>'+
           '<div class="big cabecera">Titulo</div>'+
           '<div class="big dato">'+element.titulo+'</div>'+
            '</div>'
           
        });


    });

}



window.addEventListener('load', init);