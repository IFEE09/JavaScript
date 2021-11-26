function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log('Hola mi nombre es ${this.nombre} ${this.apellido}')
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

//herencia prototipal complicada
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log('Hola mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador');
}
