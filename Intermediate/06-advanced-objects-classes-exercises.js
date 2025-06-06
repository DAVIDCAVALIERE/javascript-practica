/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
Object.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};
const persona = {
  nombre: "David",
  edad: 30,
};
persona.saludar(); // Hola, soy David

// 2. Crea un objeto que herede de otro
const animal = {
  tipo: "mamífero",
  sonido: "ruido genérico",
  hacerSonido() {
    console.log(`El ${this.tipo} hace un ${this.sonido}`);
  },
};
const perro = Object.create(animal);
perro.tipo = "perro";
perro.sonido = "ladrido";
perro.hacerSonido(); // El perro hace un ladrido

// 3. Define un método de instancia en un objeto
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  mostrarDetalles() {
    console.log(`Coche: ${this.marca} ${this.modelo}`);
  },
};
coche.mostrarDetalles(); // Coche: Toyota Corolla

// 4. Haz uso de get y set en un objeto
const personaConGetSet = {
  _nombre: "David",
  get nombre() {
    return this._nombre;
  },
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  },
};
personaConGetSet.nombre = "MoureDev";
console.log(personaConGetSet.nombre); // MoureDev

// 5. Utiliza la operación assign en un objeto
const objetoBase = { a: 1, b: 2 };
const objetoNuevo = { b: 3, c: 4 };
const objetoCombinado = Object.assign(objetoBase, objetoNuevo);
console.log(objetoCombinado); // { a: 1, b: 3, c: 4 }

// 6. Crea una clase abstracta
class AbstractClass {
  constructor() {
    if (new.target === AbstractClass) {
      throw new Error("No se puede instanciar una clase abstracta");
    }
  }

  abstractMethod() {
    throw new Error("Este método debe ser implementado por la subclase");
  }
}
class ConcreteClass extends AbstractClass {
  constructor() {
    super();
  }
  abstractMethod() {
    console.log("Método implementado en la subclase");
  }
}
const instancia = new ConcreteClass();
instancia.abstractMethod(); // Método implementado en la subclase

// 7. Utiliza polimorfismo en dos clases diferentes
class Animal {
  hacerSonido() {
    console.log("Haciendo un sonido genérico");
  }
}
class Gato extends Animal {
  hacerSonido() {
    console.log("Miau");
  }
}
class Perro extends Animal {
  hacerSonido() {
    console.log("Guau");
  }
}
const eclipse = new Gato();
const cremita = new Perro();
eclipse.hacerSonido(); // Miau
cremita.hacerSonido(); // Guau

// 8. Implementa un Mixin
const VoladorMixin = {
  volar() {
    console.log(`${this.nombre} está volando`);
  },
};
class Pajaro {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
class Dragón {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
Object.assign(Pajaro.prototype, VoladorMixin);
Object.assign(Dragón.prototype, VoladorMixin);
const loro = new Pajaro("Loro");
const dragón = new Dragón("Smaug");
loro.volar(); // Loro está volando
dragón.volar(); // Smaug está volando

// 9. Crea un Singleton
class Singleton {
  constructor(data) {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = data;
    Singleton.instance = this;
  }

  getData() {
    return this.data;
  }
}
const instancia1 = new Singleton("Instancia 1");
const instancia2 = new Singleton("Instancia 2");
console.log(instancia1.getData()); // Instancia 1
console.log(instancia2.getData()); // Instancia 1

// 10. Desarrolla un Proxy
const objetoOriginal = {
  nombre: "David",
  edad: 30,
};
const proxy = new Proxy(objetoOriginal, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      console.log(`Propiedad ${prop} no existe`);
    }
  },
  set(target, prop, value) {
    console.log(`Cambiando ${prop} a ${value}`);
    target[prop] = value;
    return true;
  },
});
console.log(proxy.nombre); // David
proxy.edad = 31; // Cambiando edad a 31
console.log(proxy.edad); // 31
console.log(proxy.altura); // Propiedad altura no existe
console.log(proxy); // { nombre: 'David', edad: 31 }
