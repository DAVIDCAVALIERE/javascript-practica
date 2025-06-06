/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
// Ejemplo: Dado un array de números, crea uno nuevo con los números al cuadrado y filtra sólo los mayores de 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredAndFiltered = numbers
  .map((num) => num ** 2)
  .filter((num) => num > 10);
console.log(squaredAndFiltered); // [16, 25, 36, 49, 64, 81, 100]

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const cuboNumbers = numbers
  .map((element) => element ** 3)
  .filter((element) => element % 2 === 0);
console.log(cuboNumbers);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
const anidado = [
  [1, 2],
  [3, 4],
];
const resultado = anidado.flat().map((num) => num * 10);
console.log(resultado); // [10, 20, 30, 40]

const productos = [
  { nombre: "Laptop", etiquetas: ["tecnología", "portátil"] },
  { nombre: "Teléfono", etiquetas: ["tecnología", "móvil"] },
  { nombre: "Libro", etiquetas: ["educación", "lectura"] },
];

const etiquetasUnicas = productos.flatMap((producto) => producto.etiquetas);

console.log(etiquetasUnicas); // ["tecnología", "portátil", "tecnología", "móvil", "educación", "lectura"]

// 4. Ordena un array de números de mayor a menor
const ordenado = numbers.sort((a, b) => b - a);
console.log(ordenado);

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const setA = new Set([4, 4, 5, 6, 7, 8, 9, 10]);
const setB = new Set([1, 2, 3, 4, 5, 5, 6, 2, 4]);
const setUnion = new Set([...setA, ...setB]);
console.log(setUnion);

const setInterseccion = new Set(
  [...setA].filter((element) => setB.has(element))
);
console.log(setInterseccion);

const SetDiferencia = new Set(
  [...setA].filter((element) => !setB.has(element))
);
console.log(SetDiferencia);

// 6. Itera los resultados del ejercicio anterior
SetDiferencia.forEach((element) => console.log(element));

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
const usuarios = new Map([
  ["usuario1", { nombre: "Juan", edad: 25, email: "juan@example.com" }],
  ["usuario2", { nombre: "María", edad: 17, email: "maria@example.com" }],
  ["usuario3", { nombre: "Carlos", edad: 22, email: "carlos@example.com" }],
]);

usuarios.forEach((datos, clave) => {
  console.log(
    `Clave: ${clave}, Nombre: ${datos.nombre}, Edad: ${datos.edad}, Email: ${datos.email}`
  );
});

// 8. Dado el mapa anterior, crea un array con los nombres
const nombresUsuarios = Array.from(usuarios.values()).map(
  (usuario) => usuario.nombre
);
console.log(nombresUsuarios);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emailsMayores = new Set(
  Array.from(usuarios.values())
    .filter((usuario) => usuario.edad >= 18)
    .map((usuario) => usuario.email)
);
console.log(emailsMayores);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
const objectFromMap = Object.fromEntries(usuarios);
console.log(objectFromMap);

const mapFromObject = new Map(
  Object.entries(objectFromMap).map(([key, value]) => [
    value.email,
    { nombre: value.nombre, edad: value.edad },
  ])
);
console.log(mapFromObject);

const claveEmail = new Map(
    [...usuarios.values()].map((value) => [value.email, { nombre: value.nombre, edad: value.edad }])
);
console.log(claveEmail);
