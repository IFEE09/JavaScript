function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

//Funcion normal
Persona.prototype.soyAlto = function() {
    return this.altura >= 1.8;
}

Persona.prototype.soyBajo = function() {
    return this.altura < 1.8;
}

var ivan = new Persona('Ivan', 'Espadas', 1.82);
var erika = new Persona('Erika', 'Luna', 1.77);
var arturo = new Persona('Arturo', 'Martinez', 1.80);

console.log(ivan.soyAlto())
console.log(ivan.soyBajo())

