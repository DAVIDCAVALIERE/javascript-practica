/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

// 2. Implementa una función currificada que multiplique 3 números
const mult = (...number) => {
  let result = 1;
  for (const element of number) {
    result *= element;
  }
  return result;
};

function curryMult(a) {
  return function (b) {
    return function (c) {
      return mult(a, b, c);
    };
  };
}

const multAB = curryMult(1)(2);
{
  {
    console.log(multAB);
  }
}
console.log(multAB(5));
console.log(multAB(7));

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
console.log(power(2, 3));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(initialValue) {
  let count = initialValue;

  return {
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },
    getValue: () => {
      return count;
    },
  };
}
const counter = createCounter(0);
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum * multiplier;
}
console.log(sumManyTimes(2, 1, 2, 3, 4));

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumWithCallback(callback, ...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  callback(sum);
}
sumWithCallback(
  (result) => {
    console.log(`La suma es: ${result}`);
  },
  1,
  2,
  3,
  4
);

// 7. Desarrolla una función parcial
function partial(fn, ...args) {
  return function (...newArgs) {
    return fn(...args, ...newArgs);
  };
}
function add(a, b) {
  return a + b;
}
const addFive = partial(add, 5);
console.log(addFive(10));

// 8. Implementa un ejemplo que haga uso de Spread
function spreadExample(numbers) {
  console.log("Los argumentos son:", ...numbers);
}

spreadExample([1, 2, 3, 4, 5]);

// 9. Implementa un retorno implícito
const rest = (a, b) => a - b;
console.log(rest(10, 5));

// 10. Haz uso del this léxico
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hola, mi nombre es ${this.name}`);
  },
};
person.greet();
