var x = 4, y = '4';

var ivan = {
    nombre: 'ivan'
};

var otraPersona = {
    nombre: 'ivan'
};

var otraPersona2 = ivan;

function comparisonPeople(persona_1, persona_2){
    if(persona_1 === persona_2){
        return true;
    } else {
        return false;
    }
}

//No toma en cuenta el tipo de variable con el doble igual
function comparison(){
    if (x == y){
        return true;
    } else {
        return false;
    }
}

//Usar el triple igual siempre que se pueda, ya que toma en cuenta el tipo de variable
function comparison2(){
    if( x === y){
        return true;
    } else {
        return false;
    }
}

console.log(comparison())
console.log(comparison2())
//Esta función compara dos objetos, y aunque sean de mismos atributos, nos dicta que son diferentes.
//Al comparar objetos, se pregunta por la referencia y no por valor.  
console.log(comparisonPeople(ivan, otraPersona))
//Tienen que estar apuntando a la misma referencia como en el caso de abajo.
console.log(comparisonPeople(ivan, otraPersona2))
//Para cambiar algún atributo del objeto en cuestión, lo que hacemos es:
otraPersona2.nombre = 'Ivan Farid'
//Ya que es lo mismo que si hicieramos ivan.nombre = 'Ivan Farid'