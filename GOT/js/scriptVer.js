function verFicha() {

    fetch(request)
        .then(response => response.json())
        .then(data => {

            let contFichas = document.getElementById('contenedorFichas');

            for (let i = 0; i < data.got.length; i++) {

                let img = document.createElement('img');
                img.setAttribute('src', data.got[i].imagen);
               
                let datos = document.createElement('div');
                datos.setAttribute('class', 'datos');

                //CABECERA NOMBRE
                let cabeceraNom = document.createElement('div');
                cabeceraNom.innerHTML = 'Nombre';
                cabeceraNom.classList.add('small');
                cabeceraNom.classList.add('cabecera');
                datos.appendChild(cabeceraNom);

                //CABECERA APELLIDOS
                let cabeceraApe = document.createElement('div');
                cabeceraApe.innerHTML = 'Apellidos';
                cabeceraApe.classList.add('medium');
                cabeceraApe.classList.add('cabecera');
                datos.appendChild(cabeceraApe);

                //NOMBRE PERSONAJE
                let datoNom = document.createElement('div');
                datoNom.innerHTML = data.got[i].nombre;
                datoNom.classList.add('small');
                datoNom.classList.add('dato');
                datos.appendChild(datoNom);

                //APELLIDOS PERSONAJE
                let datoApe = document.createElement('div');
                datoApe.innerHTML = data.got[i].apellidos;
                datoApe.classList.add('medium');
                datoApe.classList.add('dato');
                datos.appendChild(datoApe);

                //CABECERA PADRES
                let cabeceraPad = document.createElement('div');
                cabeceraPad.innerHTML = 'Padres';
                cabeceraPad.classList.add('medium');
                cabeceraPad.classList.add('cabecera');
                datos.appendChild(cabeceraPad);

                // //CABECERA CASA
                let cabeceraCas = document.createElement('div');
                cabeceraCas.innerHTML = 'Casa';
                cabeceraCas.classList.add('small');
                cabeceraCas.classList.add('cabecera');
                datos.appendChild(cabeceraCas);

                //PADRES PERSONAJE
                let datoPad = document.createElement('div');
                datoPad.innerHTML = data.got[i].padres;
                datoPad.classList.add('medium');
                datoPad.classList.add('dato');
                datos.appendChild(datoPad);

                // //FAMILIA PERSONAJE
                let datoFam = document.createElement('div');
                datoFam.innerHTML = data.got[i].familia;
                datoFam.classList.add('small');
                datoFam.classList.add('dato');
                datos.appendChild(datoFam);

                // //CABECERA TITULO
                let cabeceraTit = document.createElement('div');
                cabeceraTit.innerHTML = 'Titulo';
                cabeceraTit.classList.add('big');
                cabeceraTit.classList.add('cabecera');
                datos.appendChild(cabeceraTit);

                // //TITULO PERSONAJE
                let datoTit = document.createElement('div');
                datoTit.innerHTML = data.got[i].titulo;
                datoTit.classList.add('big');
                datoTit.classList.add('dato');
                datos.appendChild(datoTit);

                contFichas.appendChild(img);
                contFichas.appendChild(datos);
               
            }
        })

}


//VARIABLES GLOBALES
let request = 'http://localhost/DAW-DWEC-Server-/GOT/servidor/got.json';

window.addEventListener('load', verFicha);