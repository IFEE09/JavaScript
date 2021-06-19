//Programa que toma a un sujeto y calcula cuando ya ha bajado 3 kg de peso como mínimo. 
var ivan = {
    nombre: 'ivan', 
    apellido: 'Espadas', 
    edad: 28, 
    peso: 75
};

const AUMENTO_PESO = .2;

console.log(`Al inicio del año ${ivan.nombre} pesa ${ivan.peso} kg`);

const aumentarDePeso = (persona) => (persona.peso += AUMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= AUMENTO_PESO);
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = ivan.peso - 3;
var dias = 0;

while (ivan.peso >  META) {

    if (comeMucho()) {
        aumentarDePeso(ivan);
    }

    if (realizaDeporte()) {
        adelgazar(ivan);
    }

    dias += 1;
}

console.log(`Pasaron ${dias} dias para que ${ivan.nombre.apellido} llegara a su meta de tener ${ivan.peso.toFixed(1)} kg`);