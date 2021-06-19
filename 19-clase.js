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

const pasarAlturaACms = (persona) => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

const pasarAlturaACms2 = (persona) => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms);

console.log(personas);
console.log(personasCms); 


const numeros = [1, 2, 3, 4, 5];
// multiplicar por 2 este arreglo. 

const multiplicados = numeros.map(x => x * 2);

const mascotas = [{ nombre: 'Puchini', edad: 12, tipo: 'perro'    }, 
                  { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'}, 
                  { nombre: 'Pulga', edad: 10, tipo: 'perro'}, 
                  { nombre: 'Pelusa', edad: 12, tipo: 'gato'}]
// edad promedio


