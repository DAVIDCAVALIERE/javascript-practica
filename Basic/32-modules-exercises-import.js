/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

import despedir, { Animal, GRAVEDAD, Persona, PI, saludar } from "./31-modules-exercises-export.js";
import { sumar, VERSION, Vehiculo } from "./utils/archivo.js";

// 4. Importa una función
console.log(saludar("David"));

// 5. Importa una constante
console.log(PI);

// 6. Importa una clase
const persona = new Persona("Laura", 25);
console.log(persona);

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
console.log(despedir("Luis"));
console.log(GRAVEDAD);
const perro = new Animal("Perro");
console.log(perro);

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
console.log(sumar(5, 3));
console.log(VERSION);
const coche = new Vehiculo("Toyota");
console.log(coche);
