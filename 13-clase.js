var ivan = {
    nombre: 'ivan', 
    apellido: 'Espadas', 
    edad: 28, 
    peso: 75
};

const AUMENTO_PESO = .2;

console.log(`Al inicio del año ${ivan.nombre} pesa ${ivan.peso} kg`);

const aumentarDePeso = (persona) => (persona.peso += AUMENTO_PESO);

const adelgazar = (persona) => (persona.peso -= AUMENTO_PESO)

for (var i = 1; i <= 365; i++) {

    var random = Math.random(); //GENERA UN NUMERO ENTRE 0 Y 1

    if ( random < 0.25 ) {
        aumentarDePeso(ivan);
    } else if ( random <= 25 && random < 0.50) {
        adelgazar(ivan);
    }

}

console.log(`Al final del año ${ivan.nombre} pesa ${ivan.peso.toFixed(1)} kg`);


//Para generar un número random con minimo y máximo
const numMax = 10
const numMin = 1
const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin)
console.log(numRandom()) //Mostrando el número random
console.log(`Funciona este algoritmo`)