/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 10 + 5;
let resta = 20 - 8;
let multiplicacion = 4 * 3;
let division = 16 / 4;
let modulo = 17 % 3;

// 2. Crea una variable para cada tipo de operación de asignación,
let x = 10;
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 4;  // x = x / 4
x %= 3;  // x = x % 3

// que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5);   // true
console.log(8 <= 8);   // true
console.log("Hola" !== "Adiós"); // true
console.log(3 * 3 === 9); // true
console.log(20 / 4 >= 5); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 10);   // false
console.log(8 < 8);    // false
console.log("Hola" === "Adiós"); // false
console.log(3 * 3 !== 9); // false
console.log(20 / 4 < 5); // false

// 5. Utiliza el operador lógico and
console.log(true && true);  // true
console.log(true && false); // false
console.log(10 > 5 && 8 < 12); // true

// 6. Utiliza el operador lógico or
console.log(true || false); // true
console.log(false || false); // false
console.log(10 < 5 || 8 > 12); // false

// 7. Combina ambos operadores lógicos
console.log((10 > 5 && 8 < 12) || (3 > 7)); // true
console.log((false && true) || (true && false)); // false

// 8. Añade alguna negación
console.log(!true);  // false
console.log(!false); // true
console.log(!(10 > 5)); // false


// 9. Utiliza el operador ternario
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

// 10. Combina operadores aritméticos, de comparáción y lógicas
let resultado =
  10 + 5 > 20 / 4 && 8 % 2 === 0
    ? "Cumple la condición"
    : "No cumple la condición";
console.log(resultado);
