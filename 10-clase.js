var ivan = {
    nombre: 'Ivan Farid',
    apellido: 'Espadas Escalante',
    edad: 28, 
    ingeniero: true,
    cocinero: false, 
    cantante: true, 
    dj: false,
    guitarrista: true, 
    drone: true,
};


function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `);

    if(persona.ingeniero){
        console.log('ingeniero');
    } else {
        console.log('no es ingeniero');
    }

    if(persona.cocinero){
        console.log('cocinero');
    } else {
        console.log('no es cocinero');
    }

    if(persona.cantante){
        console.log('cantante');
    } else {
        console.log('no es cantante');
    }

    if(persona.dj){
        console.log('dj');
    } else {
        console.log('no es dj');
    }

    if(persona.guitarrista){
        console.log('guitarrista');
    } else {
        console.log('no es guitarrista');
    }

    if(persona.drone){
        console.log('piloto de drones');
    } else {
        console.log('no es piloto de drones');
    }
}

function imprimirMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} no es mayor de edad`);
    }
}

imprimirProfesiones(ivan);
imprimirMayorDeEdad(ivan);