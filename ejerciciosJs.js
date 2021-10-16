// ALGUNOS EJERCICIOS QUE NOS DIERON PARA PRACTICAR JS


// 1) Escribe un programa de una sola línea que haga que aparezca en la pantalla un
// alert que diga “Hello World”.

// alert("Hello World");

// 2) Escribe un programa de una sola línea que escriba en la pantalla un texto que
// diga “Hello World” (document.write).

// document.write("Hello World");

// 3) Escribe un programa de una sola línea que escriba en la pantalla el resultado
// de sumar 3 + 5.

// document.write(3+5);

// 4) Escribe un programa de dos líneas que pida el nombre del usuario con un
// prompt y escriba un texto que diga “Hola nombreUsuario”.

// let nombre = prompt("Ingrese su nombre: ");
// console.log("Hola ", nombre);

// 5) Escribe un programa de tres líneas que pida un número, pida otro número y
// escriba el resultado de sumar estos dos números.

// let a = parseFloat(prompt("Ingrese el primer número: "));
// let b = parseFloat(prompt("Ingrese el segundo número: "));
// console.log(a+b);

// 6) Escribe un programa que pida dos números y escriba en la pantalla cual es el
// mayor.

// let a = parseFloat(prompt("Ingrese el primer número: "));
// let b = parseFloat(prompt("Ingrese el segundo número: "));
// if(a>b){
//     console.log("El número más grande es el: ", a);
// }else if (a==b){
//     console.log("Ambos números son iguales!!");
// }else{
//     console.log("El número más grande es el: ", b);
// }

// 7) Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
// los tres.

// let a = parseFloat(prompt("Ingrese el primer número: "));
// let b = parseFloat(prompt("Ingrese el segundo número: "));
// let c = parseFloat(prompt("Ingrese el tercer número: "));

// const d = (n1, n2, n3) => {
//     if (n1>n2 && n1>n3){
//         console.log("El número mayor es el ", n1);
//     }
//     else if (n2>n1 && n2>n3){
//         console.log("El número mayor es el ", n2);
//     }
//     else if (n3>n1 && n3>n2){
//         console.log("El número mayor es el ", n3);
//     }
//     else{
//         console.log("Son todos los números iguales");
//     }
// }

// d(a,b,c);

// 8)Escribe un programa que pida un número y diga si es divisible por 2

// let a = () => {
//     let x = parseFloat(prompt("Ingrese un número: "));
//     if (x%2==0){
//         if (x==0){
//             console.log("Introdujiste el número 0, y se está debatiendo sobre si es o no es un número divisible por 2.")
//         }
//         else{
//         console.log(x, "es divisible por 2.");
//         }
//     }
//     else if (x%2!=0){
//         console.log(x, "no es divisible por 2.")
//     }
// };

// a();

// 9)Escribe un programa que pida una frase y escriba cuantas veces aparece la
// letra a

// let a = () => {
//     let algo = prompt("Ingresate una frase: ");
//     let frase = algo.toLowerCase();
//     let contadorA = 0;
//     for (let i = 0; i<frase.length; i++){
//         if ((frase[i] == "a") || (frase[i] == "á")){
//             contadorA++;
//         }
//     }
//     return console.log(`Cantidad de a's: ${contadorA}.`);
// }
// a();

// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen
// let a = () => {
//     let fraseOriginal = prompt("Ingresate una frase: ");
//     let frase = fraseOriginal.toLocaleLowerCase();
//     let vocales = [];
//     if (frase.includes("a") || frase.includes("á")) {
//         vocales.push("a");
//     }
//     if (frase.includes("e") || frase.includes("é")){
//         vocales.push("e");
//     }
//     if (frase.includes("i") || frase.includes("í")){
//         vocales.push("i");
//     }
//     if (frase.includes("o") || frase.includes("ó")){
//         vocales.push("o");
//     }
//     if (frase.includes("u") || frase.includes("ú")){
//         vocales.push("u");
//     }
//     vocales = vocales.sort();
//     return console.log(`Vocales dentro de la frase: ${vocales}`)
// }
// a();

// 11) Escribe un programa que pida una frase y escriba cuántas de las letras que
// tiene son vocales

// let a = () => {
//     let frase = prompt("Ingresá una frase: ");
//     frase = frase.toLocaleLowerCase();
//     let cantidad = 0;
//     for (let i = 0; i < frase.length; i++){
//         if ((frase[i] == "a") || (frase[i] == "á") || (frase[i] == "e") || (frase[i] == "é") || (frase[i] == "i") || (frase[i] == "í") || (frase[i] == "o") || (frase[i] == "ó") || (frase[i] == "u") || (frase[i] == "ú")){
//             cantidad++;
//         }
//     }
//     return console.log(`Cantidad de vocales dentro de la frase: ${cantidad}.`);
// }
// a();

// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
// cada una de las vocales

// let a = () => {
//     let frase = prompt(`Ingresate una frase: `);
//     frase = frase.toLocaleLowerCase();
//     let contadorA = 0;
//     let contadorE = 0;
//     let contadorI = 0;
//     let contadorO = 0;
//     let contadorU = 0;
//     for (let i = 0; i < frase.length; i++) {
//         switch (frase[i]){
//             case "a":
//                 contadorA++
//             break;
//             case "á":
//                 contadorA++
//             break;
//             case "e":
//                 contadorE++
//             break;
//             case "é":
//                 contadorE++
//             break;
//             case "i":
//                 contadorI++
//             break;
//             case "í":
//                 contadorI++
//             break;
//             case "o":
//                 contadorO++
//             break;
//             case "ó":
//                 contadorO++
//             break;
//             case "u":
//                 contadorU++
//             break;
//             case "ú":
//                 contadorU++
//             break;
//         }
//     }
//     return console.log(`Cantidad de letras: \n a: ${contadorA}\n e: ${contadorE}\n i: ${contadorI}\n o: ${contadorO}\n u: ${contadorU}`)
// };
// a();

// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
// 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
//     que decir todos por los que es divisible)

// let division = () => {
//     let numerito = parseFloat(prompt(`Ingresate un número: `));  
//     // Esto pertenece al ejercicio 13.
//     // if (numerito == 0){
//     //     return console.log(`0 no se puede dividir.`)
//     // }
//     // else if (numerito%2 == 0){
//     //     return console.log(`${numerito} es divisible por 2.`)
//     // }
//     // else if (numerito%3 == 0){
//     //     return console.log(`${numerito} es divisible por 3.`)
//     // }
//     // else if (numerito%5 == 0){
//     //     return console.log(`${numerito} es divisible por 5.`)
//     // }
//     // else if (numerito%7 == 0){
//     //     return console.log(`${numerito} es divisible por 7.`)
//     // }
//     // else{
//     //     return console.log(`${numerito} no es divisible ni por 2, ni por 3, ni por 5 ni por 7`);
//     // }
//     let divisores = [];
//     if (numerito%2 == 0){
//         divisores.push(2);
//     }
//     if (numerito%3 == 0){
//         divisores.push(3);
//     }
//     if (numerito%5 == 0){
//         divisores.push(5);
//     }
//     if (numerito%7 == 0){
//         divisores.push(7);
//     }
//     return console.log(`${numerito} es divisible por ${divisores}`);
// }
// division();

// 15. Escribir un programa que escriba en pantalla los divisores de un número dado

// let a = () => {
//     let numero = parseFloat(prompt(`Ingrese un número: `));
//     let divisores = [];
//     for (let i = 0; i<=numero; i++){
//         if (numero%i==0){
//             divisores.push(i);
//         }
//     }
//     return console.log(`${numero} es divisible por ${divisores}.`)
// }
// a();

// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos
// números dado

// let a = () => {
//     let primerNumero = parseInt(prompt("Ingresa el primer número."));
//     let divisoresPrimer = [];
//     let segundoNumero = parseInt(prompt("Ingresa el segundo número."));
//     let divisoresSegundo = [];
//     let comunes = [];
//     let i = 0;
//     let i2 = 0;
//     for (i; i <= primerNumero; i++){
//         if(primerNumero%i == 0){
//             divisoresPrimer.push(i);
//         }
//     }
//     for (i2; i2 <= segundoNumero; i2++){
//         if(segundoNumero%i2 == 0){
//             divisoresSegundo.push(i2);
//         }
//     } 
//     divisoresPrimer.forEach(divisor => { 
//         divisoresSegundo.includes(divisor) ? comunes.push(divisor) : "" 
//     });
//     return console.log (`Los divisores comunes de ambos números son ${comunes}`);
// }
// a();