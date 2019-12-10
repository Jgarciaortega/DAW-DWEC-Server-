



function verFicha(){

   fetch(request)
   .then(response => response.json())
   .then(data => {

    console.log(data);

    for(let i = 0; i < data.got.length; i++){

    let contentData = document.createElement('div');

    //CABECERA NOMBRE
    let cabeceraNom = document.createElement('div');
    cabeceraNom.innerHTML = 'Nombre';
    cabeceraNom.setAttribute('class','small');
    cabeceraNom.setAttribute('class','cabecera');
    contentData.appendChild(cabeceraNom);

    //CABECERA APELLIDOS
    let cabeceraApe = document.createElement('div');
    cabeceraApe.innerHTML = 'Apellidos';
    cabeceraApe.setAttribute('class','medium');
    cabeceraApe.setAttribute('class','cabecera');
    contentData.appendChild(cabeceraApe);

    // //NOMBRE PERSONAJE
    // let datoNom = document.createElement('div');
    // datoNom.innerHTML = data.got[i].nombre;
    // datoNom.setAttribute('class','small');
    // datoNom.setAttribute('class','dato');
    // contentData.appendChild(datoNom);

    //  //APELLIDOS PERSONAJE
    //  let datoApe = document.createElement('div');
    //  datoApe.innerHTML = data.got[i].apellidos;
    //  datoApe.setAttribute('class','medium');
    //  datoApe.setAttribute('class','dato');
    //  contentData.appendChild(datoApe);

    // //CABECERA PADRES
    // let cabeceraPad = document.createElement('div');
    // cabeceraPad.innerHTML = 'Padres';
    // cabeceraPad.setAttribute('class','medium');
    // cabeceraPad.setAttribute('class','cabecera');
    // contentData.appendChild(cabeceraPad);

    // //CABECERA CASA
    // let cabeceraCas = document.createElement('div');
    // cabeceraCas.innerHTML = 'Casa';
    // cabeceraCas.setAttribute('class','small');
    // cabeceraCas.setAttribute('class','cabecera');
    // contentData.appendChild(cabeceraCas);

    // //PADRES PERSONAJE
    // let datoPad = document.createElement('div');
    // datoPad.innerHTML = data.got[i].padres;
    // datoPad.setAttribute('class','medium');
    // datoPad.setAttribute('class','dato');
    // contentData.appendChild(datoPad);

    // //FAMILIA PERSONAJE
    // let datoFam = document.createElement('div');
    // datoFam.innerHTML = data.got[i].familia;
    // datoFam.setAttribute('class','small');
    // datoFam.setAttribute('class','dato');
    // contentData.appendChild(datoFam);

    // //CABECERA TITULO
    // let cabeceraTit = document.createElement('div');
    // cabeceraTit.innerHTML = 'Titulo';
    // cabeceraTit.setAttribute('class','big');
    // cabeceraTit.setAttribute('class','cabecera');
    // contentData.appendChild(cabeceraTit);

    // //TITULO PERSONAJE
    // let datoTit = document.createElement('div');
    // datoTit.innerHTML = data.got[i].titulo;
    // datoTit.setAttribute('class','big');
    // datoTit.setAttribute('class','dato');
    // contentData.appendChild(datoTit);

    document.getElementById('content').appendChild(contentData);
    }
})

}

function init(){

    document.getElementById('ver').addEventListener('click',verFicha);
    // document.getElementById('crear').addEventListener('click',crearFicha);
    // document.getElementById('crear').addEventListener('click',jugar);
    
}

//VARIABLES GLOBALES
let request= 'http://localhost/GOT/servidor/got.json';

window.addEventListener('load', init);