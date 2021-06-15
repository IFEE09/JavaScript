var nombre = 'Ivan', apellido = 'Espadas'

//Funciones para el manejo de strings
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLocaleLowerCase()
var primeraLetraDelNombre = nombre.charAt(0)

//atributos para el manejo de Strings
var cantidadDeLetrasDelNombre = nombre.length

//Concatenación del nombre y apelido
var nombreCompleto = nombre + ' ' + apellido

//interpolación de texto
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

//Acceso a las posiciones de las variables
var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1,2)

//Ulrima letra de un nombre
var ultimaLetraDelNombre = nombre.substr(nombre.length - 1)