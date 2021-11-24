var ivan = {
    nombre: 'Ivan', 
    apellido: 'Espadas',
    altura: 1.82, 
    cantidadLibros: 500
}

var martin = {
    nombre: 'Martin', 
    apellido: 'Gomez', 
    altura: 1.85,
    cantidadLibros: 250
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56, 
    cantidadLibros: 300
}

var alan = {
    nombre: 'Alan', 
    apellido: 'Perez',
    altura: 1.86,
    cantidadLibros: 150
}

var dario = {
    nombre: 'Dario', 
    apellido: 'Juarez', 
    altura: 1.71, 
    cantidadLibros: 400
}

var paula = {
    nombre: 'Paula', 
    apellido: 'Barros', 
    altura: 1.76, 
    cantidadLibros: 600
}

personas = [ivan, martin, vicky, alan, dario, paula];


//Manera 1 de contar los libros que tiene cada uno. 
var acum = 0;

for (var i = 0; i < personas.length; i++){

    acum += personas[i].cantidadLibros;

}

console.log(`En total todos tienen ${acum} libros`);

//Manera 2 de contar esto con reduce. 

const reducer = (acum, persona) => acum + persona.cantidadLibros;

//Función desestructurada que acede al atributo cantidadLibros del objeto pasado. 
const reducer2 = (acum, {cantidadLibros}) => acum + cantidadLibros; 

var totalLibros = personas.reduce(reducer, 0);

var totalLibros2 = personas.reduce(reducer2, 0);

console.log(`En total tienen ${totalLibros} libros`);
console.log(`En total todos tienen ${totalLibros2} libros`)

