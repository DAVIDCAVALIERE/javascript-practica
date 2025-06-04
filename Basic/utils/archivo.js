// 9. Exporta una función, una constante y una clase desde una carpeta
// En 'utils/archivo.js'
export function sumar(a, b) {
  return a + b;
}

export const VERSION = "1.0.0";

export class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }
}
