//CONDICIONALES//

//1 y 2

/* let numero1 = prompt("Ingrese un numero");
let numero2 = prompt("Ingrese otro numero"); */
/* if (numero1 > numero2) {
    console.log("El primer numero es mas grande")
} else {
    console.log("El primer numero es menor o igual");
} */
/* if (numero1 != numero2) {
    console.log("Los numeros  no son iguales")
} else {
    console.log("Los numeros  son iguales");
} */

//3

/* if (numero1 > numero2) {
    console.log(numero1)
} else if (numero1 < numero2) {
    console.log(numero2)
} else if (numero1===numero2){
    console.log("Son iguales");
} */

//4

/* let numero3 = prompt("Ingrese otro numero");
if (numero1>numero2 && numero1>numero3) {
    console.log(numero1);
}else if(numero2>numero1 && numero2>numero3){
    console.log(numero2);
}else if (numero3>numero1 && numero3>numero2){
    console.log(numero3);
}*/

//5

/* let persona1 = {
    nombre1 : prompt("Ingrese el nombre"),
    edad1 : prompt("Ingrese la edad"),
    altura1 : prompt("Ingrese la altura")
}
let persona2 = {
    nombre2 : prompt("Ingrese el nombre"),
    edad2 : prompt("Ingrese la edad"),
    altura2 : prompt("Ingrese la altura"),
}
if (persona1.altura1 > persona2.altura2){
    console.log(persona1.nombre1)
}else {
    console.log(persona2.nombre2);
}
if(persona1.edad1 > persona2.edad2){
    console.log(persona1.nombre1);
}else {
    console.log(persona2.nombre2);
} */

//6

/* let datosPersonales = {
    nombre: prompt("Ingrese su nombre"),
    edad: prompt("Ingrese su edad"),
    altura: prompt("Ingrese su altura (en cm)"),
    vision: prompt("Califique su vision del 1 a 10")
}
if (datosPersonales.edad > 18 && datosPersonales.altura > 150 && datosPersonales.vision > 7) {
    console.log(datosPersonales.nombre + " esta capacitado para manejar");
}else {
    console.log(datosPersonales.nombre + " no esta capacitado para manejar");
} */

//7

/* const nombre = prompt("Ingrese su nombre")
const pase = prompt("Ingrese su tipo de pase")
const entrada = prompt("¿Tiene entrada?")
if(nombre === "EMILIO" || pase === "VIP"){
    console.log("Bienvenido")
} else if(entrada === "SI"){
    let usaEntrada = prompt("¿Desea utilizarla?")
    if(usaEntrada === "SI"){
        console.log("Bienvenido")
    } else{
        console.log("adios")
    }
} else{
    let compraEntrada = prompt("¿Desea comprar una entrada?")
    let dinero = Number(prompt("Ingrese monto disponible"))
    if (compraEntrada === "SI"){
        if(dinero >= 1000){
            console.log("Entrada emitida, bienvenido.")
        } else{
            console.log("Monto insuficiente")
        }
    } else{
        console.log("adios")
    }
} */

//8//

/* let numeroIncognita = 8
let numeroIngresado = prompt("Ingtrese un numeor del 1 al 10")
if (numeroIngresado < 8){
    console.log("El numero ingresado es menor, vuelve a intentarlo");
}else if (numeroIngresado > 8){
    console.log("El numero ingresado es mayor, vuelve a intentarlo");
}else {
    console.log("Ganaste, haz adivinado el numero");
}
let numeroIngresado2 = prompt("Ingtrese un numeor del 1 al 10")
if (numeroIngresado2 < 8){
    console.log("El numero ingresado es menor, vuelve a intentarlo");
}else if (numeroIngresado2 > 8){
    console.log("El numero ingresado es mayor, vuelve a intentarlo");
}else {
    console.log("Ganaste, haz adivinado el numero");
}
let numeroIngresado3 = prompt("Ingtrese un numeor del 1 al 10")
if (numeroIngresado3 < 8){
    console.log("El numero ingresado es menor, era el numero " + numeroIncognita + " perdiste");
}else if (numeroIngresado3 > 8){
    console.log("El numero ingresado es mayor, era el numero " + numeroIncognita + " perdiste");
}else {
    console.log("Ganaste, haz adivinado el numero");
} */

//9

/* let edad = prompt("Ingresa tu edad")
if(edad>= 0 && edad<=12){
    console.log("Eres un infate");
}else if(edad>=13 && edad<=18){
    console.log("Eres un adolecente");
}else if(edad>=19 && edad<= 45){
    console.log("Eres un mayor joven");
}else if (edad> 45 && edad<100){
    console.log("Eres un anciono");
}else{
    console.log("¿Es tu verdadera edad?");
} */

//10

/* const jugador1 = prompt("piedra, papel o tijera")
const jugador2 = prompt("piedra, papel o tijera")
if(jugador1 === "PIEDRA"){
    if(jugador2 === "PIEDRA"){
        console.log("Empate")
    }else if(jugador2 === "PAPEL"){
        console.log("Gana jugador 2")
    } else if(jugador2 === "TIJERA" ){
        console.log("Gana jugador 1")
    } else{
        console.log("Jugador 2 hizo trampa.")
    }
} else if(jugador1=== "PAPEL"){
    if(jugador2 === "PIEDRA"){
        console.log("Gana jugador 1")
    }else if(jugador2 === "PAPEL"){
        console.log("Empate")
    } else if(jugador2 === "TIJERA" ){
        console.log("Gana jugador 2")
    } else{
        console.log("Jugador 2 hizo trampa.")
    }
} else if(jugador1 === "TIJERA"){
    if(jugador2 === "PIEDRA"){
        console.log("Gana jugador 2")
    }else if(jugador2 === "PAPEL"){
        console.log("Gana jugador 1")
    } else if(jugador2 === "TIJERA" ){
        console.log("Empate")
    } else{
        console.log("Jugador 2 hizo trampa.")
    }
} else{
    console.log("Jugador 1 hizo trampa.")
} */

//11//

/* let color = prompt("Ingrese el color que desea")
switch (color) {
    case "blanco" || "negro":
        console.log("Falta de color")
        break
    case "verde":
        console.log("El color de la naturaleza")
        break
    case "azul":
        console.log("El color del agua");
        break
    case "amarillo":
        console.log("El color del sol");
        break
    case "rojo":
        console.log("El color del fuego");
        break
    case "marron":
        console.log("El color de la tierra");
        break
    default:
        console.log("Excelente elección, no lo teníamos pensado");
} */

//12//
/* 
let numero1 = prompt("Ingrese su primer numero")
let numero2 = prompt("Ingrese su segundo numero")
let operacion = prompt("Ingrese la operacion que desea realizar")

switch (operacion) {
    case "suma" || "Suma":
        console.log(Number(numero1) + Number(numero2));
        break;
    case "resta" || "Resta":
        console.log(Number(numero1) - Number(numero2));
        break;
    case "division" || "Division":
        if (Number(numero2) >= 0) {
            console.log(Number(numero1) / Number(numero2));
        } else {
            console.log("ERROR");
        }
        break;
    case "multiplicacion" || "Multiplicacion":
        console.log(Number(numero1) * Number(numero2));
        break;

    default:
        console.log("Operacion invalida");
        break;
} */

//13//

/* let nombre = prompt("Ingrese su nombre") 
let apellido =prompt("Ingrese su apellido")
let dniN = prompt("Inrgese el numero del dni")
let direccion = prompt("Imgrese la direcion")


let dni = {
    nombre:nombre,
    apellido:apellido,
    dniN:dniN,
    direccion:direccion,
}
console.log(dni.nombre + " " + dni.apellido + " " + "DNI " + dni.dniN + " " + "Direccion " + dni.direccion);

let preguta = prompt("Los datos ingresados son correctos")
if (preguta !== "Si") {
   ;console.log("Pruebe de nuevo dentro de un mes");
}else{
     console.log(dni)
}
 */