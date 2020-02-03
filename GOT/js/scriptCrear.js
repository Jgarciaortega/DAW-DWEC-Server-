function init() {

    let inputs = document.querySelectorAll('input');
    document.querySelector('button').addEventListener('click', recogerDatos);

    inputs.forEach(input => input.addEventListener('blur', comprobarContenido));
}


function comprobarContenido() {

    let inputName = this.getAttribute('id');

    if (this.value == '') {

        document.getElementById('e' + inputName).style.visibility = 'visible';
        this.classList.add('errorCaja');

    }
}


function recogerDatos(){

    let inputs = document.querySelectorAll('input');
    let datosInput = [];

    inputs.forEach(input => {

        if(input.value != '') datosInput.push(input.value);
        
    });

    if(datosInput.length == 6){

        montarFicha(datosInput);

    }else{

        alert('Error. No se han completado todos los campos');
    }
}


function montarFicha(datos){

    let contFichas = document.getElementById('contenedorFichas');

    contFichas.innerHTML += 
    '<img src="'+datos[5]+'">'+
    '<div class="datos">'+
    '<div class="small cabecera">Nombre</div>'+
    '<div class="medium cabecera">Apellidos</div>'+
    '<div class="small dato">'+datos[0]+'</div>'+
    '<div class="medium dato">'+datos[1]+'</div>'+
    '<div class="medium cabecera">Padres</div>'+
    '<div class="small cabecera">Casa</div>'+
    '<div class="medium dato">'+datos[2]+'</div>'+
    '<div class="small dato">'+datos[3]+'</div>'+
    '<div class="big cabecera">Titulo</div>'+
    '<div class="big dato">'+datos[4]+'</div>'+
     '</div>'


}


window.addEventListener('load', init);