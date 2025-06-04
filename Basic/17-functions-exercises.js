/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 2));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayorNumero(array) {
  return Math.max(...array);
}
console.log(mayorNumero([1, 2, 3, 4, 5]));

const conseguirMayor = (array) => {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
};
console.log(conseguirMayor([57, 48, 12, 30, 99]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(cadena) {
  const vocales = "aeiou";
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i].toLowerCase();
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}
console.log(contarVocales("Hola Mundo"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const convertirMayuscula = (array) => {
  const newArray = [];
  for (const element of array) {
    const mayuscula = element.toUpperCase();
    newArray.push(mayuscula);
  }
  return newArray;
};
console.log(convertirMayuscula(["Hola Mundo", "David", "georgina", "laUra"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(esPrimo(7));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2) {
  return array1.filter((element) => array2.includes(element));
}
console.log(elementosComunes([1, 2, 3, 4, 5], [3, 5, 6, 7, 8]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(array) {
  let suma = 0;
  for (const num of array) {
    if (num % 2 === 0) {
      suma += num;
    }
  }
  return suma;
}
console.log(sumaPares([1, 2, 3, 4, 5, 6, 7, 8]));

function sumPares(array) {
  return array.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}
console.log(sumPares([1, 2, 3, 4, 5, 6, 7, 8]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarCuadrado(array) {
  return array.map((num) => num ** 2);
}
console.log(elevarCuadrado([1, 2, 3, 4, 5]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirCadena(texto) {
  let textoInvertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }
  return textoInvertido;
}
console.log(invertirCadena("Hola"));

function invertirPalabras(cadena) {
  return cadena.split(" ").reverse().join(" ");
}
console.log(invertirPalabras("Hola Mundo desde JavaScript"));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0 || num === 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log(factorial(4));
