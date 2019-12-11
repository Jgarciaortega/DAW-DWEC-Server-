var datos = new Array();
let nombre;
let apellidos;
let email;
let password;
let dni;

window.addEventListener('load', init);

function init() {

    // document.getElementById('nombre').addEventListener('blur', comprobarNombre);
    // document.getElementById('apellidos').addEventListener('blur', comprobarApellidos);
    // document.getElementById('email').addEventListener('blur', comprobarEmail);
    // document.getElementById('DNI').addEventListener('blur', comprobarDNI);
    // document.getElementById('password').addEventListener('blur', comprobarPassword);
    document.querySelector('button').addEventListener('click', tratarDatos);
   
}

function comprobarNombre() {

    // var expresion_regular_nombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

    // if (!expresion_regular_nombre.test(this.value)) {

    //     datos[0] = "Error";

    // } else {

    //     datos[0] = this.value;
    // }

    nombre = this.value;

}

function comprobarApellidos() {

    // var expresion_regular_apellidos = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/

    // if (!expresion_regular_apellidos.test(this.value)) {

    //     datos[1] = "Error";

    // } else {

    //     datos[1] = this.value;
    // }

    apellidos = this.value;
}

function comprobarEmail() {

    // var expresion_regular_email = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // if (!expresion_regular_email.test(this.value)) {

    //     datos[2] = "Error";

    // } else {

    //     datos[2] = this.value;
    // }

    email = this.value;
}

function comprobarPassword() {

    // var expresion_regular_pass = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

    // if (!expresion_regular_pass.test(this.value)) {

    //     datos[5] = "Error";

    // } else {

    //     datos[5] = this.value;
    // }

    password = this.value;
}


function comprobarDNI() {

    dni = this.value;
    
}


function tratarDatos(){

    let formulario = new FormData();
    let init = {
        method:'POST',
        body: formulario
    };
    let request = new Request('php/registro.php',init);

    fetch(request)
    .then(response=>response.json())
    .then(dato=> {
        if(dato === 'error')
            alert('Error');

        else alert('ok');


    })
     rellenarFormulario(formulario);

     
    
 }

 function rellenarFormulario(formulario){


    formulario.append('nombre', nombre);
    formulario.append('apellidos', apellidos);
    formulario.append('dni', dni);
    formulario.append('password', password);


 }


