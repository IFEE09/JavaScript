//Declaración e inicialización de variables
var edad = 28, peso = 100

//incremento
edad = edad + 1
edad += 1

//decremento 
peso -= 10

//suma y resta
var sandwich = 1, jugarFutbol = 3

peso = peso + sandwich
peso -= jugarFutbol

//decimales

var precioDeVino = 200.3

var total = precioDeVino * 3 //no da un resultado exacto. entonces -> tenemos que hacer la operación de abajo

var total = precioDeVino * 100 * 3 / 100 

var total = Math.round(precioDeVino * 100 * 3) / 100 //Nos da un resultado mucho más exacto sin importar la cantiddad  de decimales

//Metodo para mostrar 2 decimales, pero pueden ser más. 
var totalStr = total.toFixed(2)

//Metodos para convertir de un STR a un número
var total2 = parseFloat(totalStr)

var total3 = parseInt(totalStr)

//división
var pizza = 8
var persona = 2
var CantidadDePorcionesPorPersona = pizza / persona