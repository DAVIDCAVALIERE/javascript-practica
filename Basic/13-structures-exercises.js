/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animalsArray = ["Gato", "Perro", "Elefante", "Leon", "Lobo"];
console.log(animalsArray);

// 2. Añade dos más. Uno al principio y otro al final
animalsArray.unshift("Tortuga");
animalsArray.push("Tigre");
console.log(animalsArray);

// 3. Elimina el que se encuentra en tercera posición
animalsArray.splice(3, 1);
console.log(animalsArray);

// 4. Crea un set que almacene cinco libros
let librosSet = new Set(["Salvador gaviota", "El coronel", "Casas Muertas", "El alquimista", "Las Valquirias"]);
console.log(librosSet);

// 5. Añade dos más. Uno de ellos repetido
librosSet.add("El coronel")
librosSet.add("El vencedor");
console.log(librosSet);

// 6. Elimina uno concreto a tu elección
librosSet.delete("Casas Muertas")
console.log(librosSet);

// 7. Crea un mapa que asocie el número del mes a su nombre
let mesMap = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(mesMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(mesMap.has(5))
    console.log(mesMap.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = ["Nuevo Array", "Dinero"]
console.log(myArray);
let mySet = new Set (myArray)
console.log(mySet);
let myMap = new Map();
myMap.set("mySet", mySet);
console.log(myMap);
