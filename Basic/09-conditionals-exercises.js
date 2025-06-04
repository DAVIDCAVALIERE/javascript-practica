/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = "David";
if (nombre === "David") {
  console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const usuario = "David";
const password = "123.";

if (usuario === "David" && password === "123") {
  console.log("Te has logueado correctamente");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = 2;
if (numero > 0) {
  console.log("El numero es positivo");
} else if (numero === 0) {
  console.log("El numero es zerooo");
} else {
  console.log("El numero es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edad = 14;
if (edad >= 18) {
  console.log("Puedes votar");
} else {
  const edadFaltante = 18 - edad;
  console.log(
    `No puedes votar y te faltan ${edadFaltante} años para ser mayor de edad`
  );
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
const persona = edad >= 18 ? "Adulto" : "menor";
console.log(persona);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Marzo";
if (mes == "Enero") {
  console.log("La estacion es Invierno");
} else if (mes == "Febrero") {
  console.log("La estacion es Invierno");
} else if (mes == "Marzo") {
  console.log("La estacion es Primavera");
} else if (mes == "Abril") {
  console.log("La estacion es Primavera");
} else if (mes == "Mayo") {
  console.log("La estacion es Primavera");
} else if (mes == "Junio") {
  console.log("La estacion es Verano");
} else if (mes == "Julio") {
  console.log("La estacion es Verano");
} else if (mes == "Agosto") {
  console.log("La estacion es Verano");
} else if (mes == "Septiembre") {
  console.log("La estacion es Otoño");
} else if (mes == "Octubre") {
  console.log("La estacion es Otoño");
} else if (mes == "Noviembre") {
  console.log("La estacion es Otoño");
} else if (mes == "Diciembre") {
  console.log("La estacion es Invierno");
} else {
  console.log("Mes Invalido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (
  mes === "Enero" &&
  mes === "Marzo" &&
  mes === "Mayo" &&
  mes === "Julio" &&
  mes === "Agosto" &&
  mes === "Octubre" &&
  mes === "Diciembre"
) {
  console.log("El mes tiene 31 dias");
} else if (mes === "Febrero") {
  console.log("El mes tiene 28 dias");
} else {
  console.log("El mes tiene 30 dias");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 12;
let estacion;

switch (mes) {
  case 12:
  case 1:
  case 2:
    estacion = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  default:
    estacion = "Mes inválido. Ingresa un número entre 1 y 12.";
}

console.log("La estación del año es:", estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let dias;
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = "31 dias";
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = "30 dias";
    break;
  case 2:
    dias = "28 dias";
    break;
  default:
    dias = "Mes inválido. Ingresa un número entre 1 y 12.";
}

console.log("El mes tiene ", dias);
