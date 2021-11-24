var ivan = {

    nombre: 'Ivan', 
    apellido: 'Espadas', 
    edad: 28

}

var dario = {
    nombre: 'Dario', 
    apellido: 'Escalante', 
    edad: 27
}

//Primera manera de escribir la función que recibe un objeto.
function imprimirMayusculas(persona){
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}

//SegundaForma de escribir la función que recibe un atributo del objeto
function imprimirMayusculas2({ nombre }){
    console.log(nombre.toUpperCase());
}

imprimirMayusculas(dario)
imprimirMayusculas2(ivan)
imprimirMayusculas2({ nombre: 'Jessica' })