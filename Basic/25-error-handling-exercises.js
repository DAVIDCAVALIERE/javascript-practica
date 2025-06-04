/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

// 2. Captura una excepción utilizando try-catch y finally

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["10.5", "abc", "3.14", undefined, "7"];

for (let valor of valores) {
  try {
    let numero = parseFloat(valor);
    if (isNaN(numero)) {
      throw new Error(`No se pudo convertir '${valor}' a número.`);
    }
    console.log(`Número convertido: ${numero}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function verificarPropiedad(objeto, propiedad) {
  if (!objeto.hasOwnProperty(propiedad)) {
    throw new Error(`La propiedad '${propiedad}' no existe en el objeto.`);
  }
  return objeto[propiedad];
}

try {
  const persona = { nombre: "Carlos", edad: 25 };
  console.log(verificarPropiedad(persona, "nombre")); // OK
  console.log(verificarPropiedad(persona, "direccion")); // Lanza excepción
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function ejecutarConReintentos(funcion, maxIntentos = 10) {
  let intento = 0;
  while (intento < maxIntentos) {
    try {
      return funcion(); // Intenta ejecutar la función
    } catch (error) {
      intento++;
      console.error(`Intento ${intento} fallido: ${error.message}`);
      if (intento === maxIntentos) {
        throw new Error("Se alcanzó el máximo de intentos sin éxito.");
      }
    }
  }
}

// Ejemplo: Función que puede fallar
function funcionAleatoria() {
  if (Math.random() < 0.9) throw new Error("Fallo aleatorio");
  return "Éxito!";
}

try {
  console.log(ejecutarConReintentos(funcionAleatoria));
} catch (error) {
  console.error(`Error: ${error.message}`);
}
