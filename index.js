//Declaración de variables
var buttonCalificaciones = document.querySelector("#calificaciones")

var buttonPrueba2 = document.querySelector("#botonPrueba2")

//let
//const

//Declaración de funciones
function obtenerCalificacion(){
var calificacion = prompt ("¿Cuál es tu califación");

if (isNaN(calificacion)){
    alert("Ingrese un número")
}
else {
var redondear = Math.round(calificacion)
    alert("tu calificación es: " + redondear)
}
}

function sugerirNumero(){
alert("Otro Mensaje");
}

buttonCalificaciones.addEventListener("click", obtenerCalificacion());

buttonPrueba2.addEventListener("click", sugerirNumero());

//Delegación de eventos
windows.addEventListener("load", )