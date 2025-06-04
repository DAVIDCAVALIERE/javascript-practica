/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let array = [1, 2, 3, 4];

let [element1, element2] = array;
console.log(element1);
console.log(element2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [element3, element4, element5 = 7] = array;
console.log(element3);
console.log(element4);
console.log(element5);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
  nombre: "David",
  edad: 30,
  profesion: "Desarrollador",
  country: {
    pais: "Colombia",
    departamento: "Distrito Capital Bogota",
  },
};

let { nombre, edad } = person;
console.log(nombre);
console.log(edad);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { nombre: name1, edad: age } = person;
console.log(name1);
console.log(age);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {
  country: { pais },
  country: { departamento },
} = person;
console.log(pais);
console.log(departamento);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [5, 6, 7, 8, 9];
let array2 = [...array, ...array1]
console.log(array2)

// 7. Usa propagación para crear una copia de un array
let array3 = [...array1]
console.log(array3);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let person2 = {
  name: "Brais",
  age: 37,
  alias: "MoureDev",
  walk: function () {
    console.log("La persona camina.");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.age} años de experiencia trabaja.`);
    },
  },
};

let person3 = {...person, ...person2}
console.log(person3);

// 9. Usa propagación para crear una copia de un objeto
let person4 = { ...person};
console.log(person4);

// 10. Combina desestructuración y propagación
