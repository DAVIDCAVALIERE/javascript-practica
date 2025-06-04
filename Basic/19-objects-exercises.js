/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let persona = {
  nombre: "David",
  edad: 30,
  profesion: "Desarrollador",
};

console.log(persona);

// 2. Accede y muestra su valor
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

// 3. Agrega una nueva propiedad
persona.empresa = "Meraki"
console.log(persona);

// 4. Elimina una de las 3 primeras propiedades
delete persona.edad
console.log(persona);

// 5. Agrega una función e invócala
persona.comer = function () {
  console.log("La persona esta comiendo.");
};
console.log(persona);
persona.comer();

// 6. Itera las propiedades del objeto
for (const key in persona) {
    console.log(key + ": " + persona[key])
}

// 7. Crea un objeto anidado
let persona2 = {
  nombre: "David",
  edad: 30,
  profesion: "Desarrollador",
  country: {
    pais: "Colombia",
    departamento: "Distrito Capital Bogota"
  }
};

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona2.country.departamento)

// 9. Comprueba si los dos objetos creados son iguales
console.log(persona === persona2);
console.log(persona.nombre === persona2.nombre);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona.nombre === persona2.edad);
