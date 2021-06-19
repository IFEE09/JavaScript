var ivan = {
    nombre: 'Ivan', 
    apellido: 'Espadas',
    altura: 1.82
}

var martin = {
    nombre: 'Martin', 
    apellido: 'Gomez', 
    altura: 1.85
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var alan = {
    nombre: 'Alan', 
    apellido: 'Perez',
    altura: 1.86
}

var dario = {
    nombre: 'Dario', 
    apellido: 'Juarez', 
    altura: 1.71
}

var paula = {
    nombre: 'Paula', 
    apellido: 'Barros', 
    altura: 1.76
}

var personas = [ivan, martin, vicky, alan, dario, paula];

var longitudArray = personas["length"]; //para saber su longitud. 
var longitudArray = personas.length //este es igual es valido. 

console.log(longitudArray);
console.log(personas[0].altura) //así accedemos al atributo altura del objeto 0

//Arrow function
var esAlta = (persona) => persona.altura >= 1.8;

//Función anónima
var personasChaparras = personas.filter(function (persona) {
    return persona.altura < 1.8
});

var personasALtas =  personas.filter(esAlta)

console.log(personasALtas)
console.log(personasChaparras)