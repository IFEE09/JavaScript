class Persona {

    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        return this.altura >= 1.8;
    }

}

var ivan = new Persona('Ivan', 'Espadas', 1.82);