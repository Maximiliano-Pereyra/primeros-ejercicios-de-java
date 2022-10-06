//UNIDAD 3 BUCLES//

//1//

/* let num=prompt("ingrese un numero")
for (let i = 1; i < 11; i++) {
   console.log(i*num);
} */

//2//

/* let dato = prompt("ingrese un numero")
do{
console.log(dato);
dato++
}while (dato!=0)*/

//3//

/* let numeroIncognita=45
for (let index = 1; index>0 ; index++) {
    let numeroIngresado = prompt("Ingtrese un numeor del 1 al 10") 
    if (numeroIngresado < numeroIncognita) {
        console.log("El numero ingresado es menor, vuelve a intentarlo");
        continue
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El numero ingresado es mayor, vuelve a intentarlo");
        continue
    } else {
        console.log(`Ganaste, haz adivinado el numero desde de ${index-1} cantidad de intentos`);
        break
    }   
} */

//4//

/* let numerito = prompt("ingrese un numero") 
if (numerito%2!=0) {
    console.log(`es impar`);
}else{
    console.log(`es par`);
} */

//5//

/* let numerito = prompt("Ingrese un numero") 

for (let index = 1; index <= numerito; index++) {
    if (numerito % index === 0) {
        console.log(`el numero ${index} es divisor`);
    } 
} */

//6//
//Dado un array de 10 elementos, realizar un programa que recorra ese array y//
//muestre un mensaje por consola con cada uno de los elementos del array//

/* let listita = ["queso", "coca", "crema", "carbon", "leche", "salame", "pan", "cd", "jabon", "algo"]

for (let index = 0; index < listita.length; index++) {
    console.log(listita[index]);  
} */

//7
//Dado un array de 10 numeros, realizar un programa que muestre por consola el
//doble de cada uno de los elementos.

/* let listaDeN =[1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < listaDeN.length; index++) {
    console.log(listaDeN[index]*2); 
} */

//8
//Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
//objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
//que muestre un mensaje de presentacion por cada elemento del array

/* let familia =[
    {
        nombre: "Jorge",
        altura: 1.76,
        peso: 79,
        edad: 50,
    },
    {
        nombre: "Maxi",
        altura: 1.77,
        peso: 68,
        edad: 23,
    },
    {
        nombre: "matias",
        altura: 1.79,
        peso: 67,
        edad: 20,
    },
    {
        nombre: "tomas",
        altura: 1.78,
        peso: 68,
        edad: 16,
    },
]
for (let participante of familia) {
console.log("hola mi nombre es " + participante.nombre + " y tengo " + participante.edad +" de edad." );   
} */

//9
//Dado un array de 10 numeros, realizar un programa que recorra el array y solo
//muestre los numeros impares

/* let listaDeN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
for (let num of listaDeN) {
    if (num%2 !==0) {
        console.log("Es impar "num);
    };
} */

//10 
//Realizar un programa que permita la entrada de numeros y calcule la suma de los
//numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
//el usuario ingresa un 0.

/* let ingreso = Number(prompt("inrgese un numero"))
let pares=0;
let impares=0;

while (ingreso != 0 ){
    if (ingreso % 2 === 0) {
        pares += ingreso;
    }else {
        impares+= ingreso;
    }
 ingreso = Number(prompt("inrgese un numero"))   
}
console.log(`la suma de los pares ingresados es ${pares}`);
console.log(`la suma de los impares ingresados es ${impares}`); */

//11
//11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas grande.

/* let numeros =[78,2,3,4,5,6,7,8,11,45]

let mayor = 0

for(let numA of numeros){
    if(numA > mayor){
        mayor = numA
    }
}
console.log(`El numeros mas grande es ${mayor}`); */

//12 
//Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//numero mas chico.

/* let numeros = [1,8,5,4,0,4,52,43,87];

let menor = numeros[0]

for (let numeroI of numeros){
    if (numeroI<menor) {
        menor= numeroI
    }
}
console.log(`El numero menor es ${menor}`); */

//13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
//ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
//manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
//un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora.

/* let jugador1 = prompt("Ingrese el primer jugador")
let jugador2 = prompt("Ingrese el segundo jugador")

let elección1 = prompt("Ingrese un numero parar elegir piedra, papel o tijera");
let elección2 = prompt("Ingrese un numero parar elegir piedra, papel o tijera");

if (elección1 == "piedra" && elección2 == "tijera") {
    console.log("gana el jugador " + jugador1);
} else if (elección1 == "papel" && elección2 == "piedra") {
    console.log("gana el jugador " + jugador1);
} else if (elección1 == "tijera" && elección2 == "papel") {
    console.log("gana el jugador " + jugador1);
} else if (elección1 == "tijera" && elección2 == "piedra") {
    console.log("gana el jugador " + jugador2);
} else if (elección1 == "papel" && elección2 == "tijera") {
    console.log("gana el jugador " + jugador2);
} else if (elección1 == "tijera" && elección2 == "piedra") {
    console.log("gana el jugador " + jugador2);
} else if (elección1 == elección2) {
    while (elección1 == elección2) {
        console.log("empataron eligan de nuevo");
        elección1 = prompt("Ingrese un numero parar elegir piedra, papel o tijera");
        elección2 = prompt("Ingrese un numero parar elegir piedra, papel o tijera");

        if (elección1 == "piedra" && elección2 == "tijera") {
            console.log("gana el jugador " + jugador1);
        } else if (elección1 == "papel" && elección2 == "piedra") {
            console.log("gana el jugador " + jugador1);
        } else if (elección1 == "tijera" && elección2 == "papel") {
            console.log("gana el jugador " + jugador1);
        } else if (elección1 == "tijera" && elección2 == "piedra") {
            console.log("gana el jugador " + jugador2);
        } else if (elección1 == "papel" && elección2 == "tijera") {
            console.log("gana el jugador " + jugador2);
        } else if (elección1 == "tijera" && elección2 == "piedra") {
            console.log("gana el jugador " + jugador2);
        }
    }
}
 */

//14
//Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

/* let espacio = ''

for(i = 0; i < 5; i++){
    espacio+= '*'
    console.log(espacio)
} */

//15 
//Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
//pero invertido.
// no me salio
/* let espacio2 = ''

for(i = 5; i > 0; i--){
    espacio2 = 
    console.log(espacio2)
} */

//16

//Dado un array de 10 numeros desordenados, realizar un programa que imprima por
//pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)
/* let numeros = [12,34,53,5,4,2,35,77,854]
const arrayOrdenado = []
let mayor = 0
for(i = 0; i < numeros.length++; i++){
    for(let num of numeros){
        if(num > mayor){
            mayor = num
        }
    }
    arrayOrdenado.unshift(mayor)
    let index = numeros.indexOf(mayor)
    numeros.splice(index, 1)
    mayor = 0
}

console.log(arrayOrdenado) */