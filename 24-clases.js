
class Persona {

    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(responderSaludo) {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);

        if (responderSaludo) {
            responderSaludo(this.nombre, this.apellido, false);
        }

    }

    soyAlto() {
        return this.altura >= 1.8;
    }

}

class Desarrollador extends Persona {
    
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    
    saludar(responderSaludo) {

        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador`);

        if (responderSaludo) {
            responderSaludo(this.nombre, this.apellido, true);
        }
        
    }

}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);

    if(esDev) {
        console.log(`Excelente, eres desarrollador`);
    }

}

class Estudiante {

    constructor(nombre, apellido, calificacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificacion = calificacion;
    }

    saludar(responderSaludo) {

        //Desestructuracion de la funcion
        var {nombre, apellido, calificacion} = this;

        console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo calificacion de ${calificacion}`);

        if(responderSaludo){
            responderSaludo(this.nombre, this.apellido, false)
        }


    }

}

var ivan = new Desarrollador('Ivan', 'Espadas', 1.82);
var juan = new Persona('Juan', 'Perez', 1.79);
var pedro = new Estudiante('Pedro', 'Gomez', 9.5);

ivan.saludar(responderSaludo);
pedro.saludar(responderSaludo);