var ivan = {
    nombre: 'Ivan Farid',
    apellido: 'Espadas Escalante',
    edad: 28, 
};

var juan = {
    nombre: 'Juan José', 
    apellido: 'Espadas Rubio', 
    edad: 1,
}

const MAYORIA_DE_EDAD = 18

function esMayorEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirMayorDeEdad(persona){

    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

imprimirMayorDeEdad(juan);
imprimirMayorDeEdad(ivan);