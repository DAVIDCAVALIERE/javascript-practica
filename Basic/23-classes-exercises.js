/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia

class Persona {
  #nombre;
  #edad;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set edad(nuevoEdad) {
    this.#nombre = nuevoEdad;
  }

  static move() {
    console.log("la persona se mueve");
  }

  trabajar() {
    console.log("la persona trabaja");
  }
}

const persona = new Persona("David", 30);
console.log(persona.nombre);
persona.nombre = "David Caballero";
console.log(persona.nombre);
Persona.move()

class Programador extends Persona {
  #permisos;

  constructor(nombre, edad, permisos) {
    super(nombre, edad);
    this.#permisos = permisos;
  }

  get permisos() {
    return this.#permisos;
  }

  trabajar() {
    console.log("el programador esta codeando");
  }
}
const programador = new Programador("DAVINCI", 25, "Administrador")
console.log(programador.nombre);
console.log(programador.edad = 27);
console.log(programador.permisos);
programador.trabajar()
Programador.move()

