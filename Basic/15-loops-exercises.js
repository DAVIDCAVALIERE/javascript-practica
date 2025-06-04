/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  const element = i;
  console.log(element);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let element = 0;
for (let i = 1; i <= 100; i++) {
  element += i;
  console.log(element);
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  const par = i % 2;
  if (par === 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["David", "Laura"];
for (const nombre of nombres) {
  console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "Laura";
let contadorVocales = 0;
for (let i = 0; i < cadena.length; i++) {
  const letra = cadena[i].toLowerCase();
  if ("aeiou".includes(letra)) {
    contadorVocales++;
  }
}
console.log(`Número de vocales: ${contadorVocales}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [2, 2, 3, 5, 4];
let producto = 1;
for (let i = 0; i < numeros.length; i++) {
  producto *= numeros[i];
  console.log(producto);
}
console.log(`Producto de los números: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let texto = "David";
let textoInvertido = "";
for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}
console.log(`Texto invertido: ${textoInvertido}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log("Primeros 10 números de Fibonacci:", fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosArray = [5, 12, 8, 20, 3, 15];
let mayoresA10 = [];
for (let i = 0; i < numerosArray.length; i++) {
  if (numerosArray[i] > 10) {
    mayoresA10.push(numerosArray[i]);
  }
}
console.log("Números mayores a 10:", mayoresA10);
