var ivan = {
    nombre: 'Ivan Farid',
    apellido: 'Espadas Escalante', 
    edad: 28
};

var dario = {
    nombre: 'Dario Fernando',
    apellido: 'Esparza', 
    edad: 27
};

function imprimirMayusculas(persona){
    var { nombre } = persona;
    console.log(nombre.toUpperCase())
}

//Pase por referencia, ya que accede al atributo del objeto y modifica su valor. 
function birthday(persona){
    persona.edad = persona.edad + 1;
}

function birthday2(edad){
    edad += 1;
    return edad;
}

//Esta función entra a los atributos de un objeto y lo que hace es crear un nuevo objeto a partir del original
function birthday3(persona){
    return {
        ...persona, 
        edad: persona.edad + 1,
        nombre: 'ivan'
    }
}

imprimirMayusculas(ivan) //pase por valor
imprimirMayusculas(dario) //pase por valor
birthday(ivan) //pase por referencia, ya que pasa el objeto. 
console.log(ivan.edad)
var OtroIvan = birthday3(ivan) //recordemos que aquí ya tiene 29 años, debido a la funcion birthday
console.log(OtroIvan);
console.log(birthday2(ivan.edad));
delete ivan.apellido; //accedemos por referencia al atributo apellido y se elimina del objeto para siempre. 
console.log(ivan)