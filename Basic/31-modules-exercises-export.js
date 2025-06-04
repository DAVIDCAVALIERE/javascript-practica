/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
  
// 2. Exporta una constante
export const PI = 3.1416;

// 3. Exporta una clase
export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}  

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function despedir(nombre) {
  return `Adiós, ${nombre}!`;
}

export const GRAVEDAD = 9.81;

export class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
}


