/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let texto1 = "Hola";
let texto2 = "Mundo";
let resultado = texto1 + " " + texto2;
console.log(resultado); // "Hola Mundo"


// 2. Muestra la longitud de una cadena de texto
let mensaje = "JavaScript es genial";
console.log(mensaje.length); // 20


// 3. Muestra el primer y último carácter de un string
let palabra = "Programación";
console.log(palabra.charAt(0)); // "P"
console.log(palabra.charAt(palabra.length - 1)); // "n"


// 4. Convierte a mayúsculas y minúsculas un string
let texto = "Hola Mundo";
console.log(texto.toUpperCase()); // "HOLA MUNDO"
console.log(texto.toLowerCase()); // "hola mundo"


// 5. Crea una cadena de texto en varias líneas
let multilinea = `Esta es una línea.
Esta es otra línea.
Y aquí hay una tercera línea.`;
console.log(multilinea);


// 6. Interpola el valor de una variable en un string
let nombre = "Carlos";
let edad = 30;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);


// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "JavaScript es poderoso";
console.log(frase.replace(/ /g, "-")); // "JavaScript-es-poderoso"


// 8. Comprueba si una cadena de texto contiene una palabra concreta
let textoEjemplo = "Aprender JavaScript es divertido";
console.log(textoEjemplo.includes("JavaScript")); // true
console.log(textoEjemplo.includes("Python")); // false


// 9. Comprueba si dos strings son iguales
let str1 = "Hola";
let str2 = "Hola";
console.log(str1 === str2); // true


// 10. Comprueba si dos strings tienen la misma longitud
let cadena1 = "JavaScript";
let cadena2 = "Programación";
console.log(cadena1.length === cadena2.length); // false
