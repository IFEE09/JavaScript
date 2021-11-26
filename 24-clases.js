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

class Desarrollador extends Persona {
    
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura  = altura;
    }
    
    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador`);
    }


}

var ivan = new Desarrollador('Ivan', 'Espadas', 1.82);
var juan = new Persona('Juan', 'Perez', 1.79);