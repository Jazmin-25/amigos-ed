
// function suma(a,b){
// return (a+b)
//suma (84,57) //las funciones se leen primero en el navegador
//console.log(resultado);

const suma = function (a,b){
    return (a+b);
}// suma con constante ejemplo suma (22,54) da 77. Lo veo en la consola.

function iniciales (nombre){
    return nombre.toUpperCase(); //tolowerCase()
}//iniciales las convierte en mayusculas / ejemplo: iniciales ("ariadna") aparecera JAZMIN
// function currentYear(){
// let fecha = new Date ();
// return fecha.getUTCFullYear();
//currentYear año en el que yo vivo / currentTear() //para saber el año presente

const currentYear = ()=> ((new Date()).getFullYear());
console.log(currentYear()); //el console.log es para que se imprima en la consola.
//3 tipos de funciones: normal, expresión y flecha
console.log("Hola Javascript externo!!") // para ingresar un mensaje en la consola 

//Clase 21 de marzo