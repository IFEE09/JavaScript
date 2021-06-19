function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
    if (this.altura >= 1.8) {
        console.log(`Yo ${this.nombre} ${this.apellido} soy alto/a`);
    } else {
        console.log(`Yo ${this.nombre} ${this.apellido} no soy alto/a`);
    }
}

var ivan = new Persona('Ivan', 'Espadas', 1.82);
var erika = new Persona('Erika', 'Luna', 1.77);
var arturo = new Persona('Arturo', 'Martinez', 1.80);

ivan.saludar();
erika.saludar();
arturo.saludar();