
//Recibe un nodo padre a partir del cual eliminamos todo su contenido
function limpiarNodo(elemento) {

    if (elemento.hasChildNodes()) {

        while (elemento.childNodes.length >= 1) {
            elemento.removeChild(elemento.firstChild);
        }
    }

}

/* LISTENER CUANDO PIERDE EL FOCO*/
inputs.forEach(input => input.addEventListener('blur', comprobarContenido));
/*LISTENER CUANDO ESTA EN FOCO*/
inputs.forEach(input => input.addEventListener('focus', comprobarContenido));

/*******INDEXOF*************/ 
//retorna el indice en el que se encuentra un elemento y -1 si este no se localiza*/
//1º Encuentra todas las apariciones de un elemento
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

//2º Encuentra si un elemento existe en la matriz
if(array.indexOf(elemento) === -1); //=>no existe si se cumple la condicion


/****SLICE*****/
//retorna una copia de una porcion de un array
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']

/*DE STRING A ARRAY*/
let strArr = [...string];


