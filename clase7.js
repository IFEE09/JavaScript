var ivan = {

    nombre: 'Ivan', 
    apellido: 'Espadas', 
    edad: 28

}

var dario = {
    nombre: 'Dario', 
    apellido: 'Escalante', 
    edad: 27
}

//Primera manera de escribir la función que recibe un objeto.
function imprimirMayusculas(persona){
    // var nombre = persona.nombre.toUpperCase();
    var { nombre } = persona; //esto es lo mismo que arriba. 
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

//SegundaForma de escribir la función que recibe un atributo del objeto
function imprimirMayusculas2({ nombre }){
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona){
    console.log(`Hola, mi nombre es ${persona.nombre} y mi edad es ${persona.edad}`);
}

imprimirMayusculas(dario)
imprimirMayusculas2(ivan)
imprimirMayusculas2({ nombre: 'Jessica' })
imprimirNombreYEdad(ivan)
imprimirNombreYEdad(dario)

//otro ejemplo de destructuracion es
var [a, b] = [10, 20]

console.log(a)
console.log(b)

var [a, b, ...rest] = [10, 20, 30, 40, 50]

console.log(...rest)