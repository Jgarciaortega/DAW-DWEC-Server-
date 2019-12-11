
function extraerFamilias() {

    let familias = [];
    let imagenes = []

    fetch(request)
        .then(response => response.json())
        .then(data => {

             for (let i = 0; i < data.got.length; i++) {

                familias[i] = data.got[i].familia;
                imagenes[i] = data.got[i].imagen;             
             }
   
        })

        mostrarFotos(familias,imagenes);
}

function mostrarFotos(familias,imagenes){

    let contFotos = document.getElementById('contenedorFotos');

    for(let i = 0; i < familias.length; i++){

        let contJuego = document.createElement('div');
        contJuego.classList.add('col-xs-6 col-sm-3 contenedorJuego');
        let img = document.createElement('img');
        img.classList.add('img-thumbnail');
        img.setAttribute(imagenes[i]);

        for(let x = 0; x < familias.length; x++){

        
            

        }

    }

}

function comprobar() {

    alert('comprobado');
}

function init() {

    extraerFamilias();
    document.getElementById('comprobar').addEventListener('click', comprobar);

}

//VARIABLES GLOBALES
let request = 'http://localhost/DAW-DWEC-Server-/GOT/servidor/got.json';

window.addEventListener('load', init);