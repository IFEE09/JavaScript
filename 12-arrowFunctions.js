var ivan = {
    nombre: 'Ivan Farid',
    apellido: 'Espadas Escalante',
    edad: 28, 
};

var juan = {
    nombre: 'Juan José', 
    apellido: 'Espadas Medina', 
    edad: 1,
}

const MAYORIA_DE_EDAD = 18

//esta es una función anonima
const esMayorEdad = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD; 
}

//uso de arrow function, es equivalente a la de arriba. 
const esMayorEdadArrow = (persona) => (persona.edad >= MAYORIA_DE_EDAD); 

//uso de arrow function desestructurada
const esMayorEdadArrow2 = ({edad}) => !(edad >= MAYORIA_DE_EDAD); 


function imprimirMayorDeEdad(persona){

    if(esMayorEdadArrow2(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }

}

function permitirAcceso(persona){

    if(!esMayorEdadArrow(persona)){
        console.log(`Acceso denegado a ${persona.nombre} por ser menor de edad`);
    } else {
        console.log(`Acceso concedido a ${persona.nombre} por ser mayor de edad`);
    }

}

console.log('TEST MESSAGE')
imprimirMayorDeEdad(juan);
imprimirMayorDeEdad(ivan);
permitirAcceso(ivan)
permitirAcceso(juan)