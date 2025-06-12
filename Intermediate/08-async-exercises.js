/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback.
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function saludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
}
saludar("David", (nombre) => {
  console.log(`Hola, ${nombre}`);
});

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback).
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback) {
  setTimeout(() => {
    console.log("Tarea 1 completada");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Tarea 2 completada");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Tarea 3 completada");
    callback();
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("Todas las tareas completadas");
    });
  });
});

// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function verificarNumero(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve("numero par");
    } else {
      reject("numero impar");
    }
  });
}

verificarNumero(4)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });

verificarNumero(3)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primera promesa completada");
      resolve();
    }, 1000);
  });
}

function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Segunda promesa completada");
      resolve();
    }, 2000);
  });
}

function thirdTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tercera promesa completada");
      resolve();
    }, 1500);
  });
}

firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then(() => {
    console.log("Todas las promesas completadas");
  });

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks()

async function executeTasks() {
  await firstTask();
  await secondTask();
  await thirdTask();
  console.log("Todas las promesas completadas a traves de async/await");
}
executeTasks();

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 5) {
        resolve({ id, nombre: "Usuario " + id });
      } else {
        reject("Usuario no encontrado");
      }
    }, 5000);
  });
}
async function obtenerUsuario(id) {
  try {
    const usuario = await getUser(id);
    console.log("Usuario encontrado:", usuario);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
  }
}
obtenerUsuario(3); // Usuario encontrado: { id: 3, nombre: 'Usuario 3' }
obtenerUsuario(5); // Error al obtener el usuario: Usuario no encontrado

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
console.log("Inicio"); // 1
setTimeout(() => console.log("setTimeout ejecutado")); // 4
Promise.resolve().then(() => console.log("Promesa resuelta")); // 3
console.log("Fin"); // 2

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 1 con PromiseAll completada");
      resolve();
    }, 1000);
  });
}
function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 2 con PromiseAll completada");
      resolve();
    }, 2000);
  });
}
function tarea3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 3 con PromiseAll completada");
      resolve();
    }, 3000);
  });
}
function ejecutarTareas() {
  Promise.all([tarea1(), tarea2(), tarea3()])
    .then(() => {
      console.log("Todas las promesas con PromiseAll resueltas");
    })
    .catch((error) => {
      console.error("Error en alguna de las promesas:", error);
    });
}
ejecutarTareas();

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(segundos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tiempo finalizado");
    }, segundos * 1000);
  });
}
async function esperar() {
  const mensaje = await waitSeconds(3);
  console.log(mensaje);
}
esperar();

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
function checkBalance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(500);
    }, 1000);
  });
}
function withdrawMoney(amount, balance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount <= balance) {
        balance -= amount;
        resolve(balance);
      } else {
        reject("Fondos insuficientes");
      }
    }, 2000);
  });
}
async function cajeroAutomatico(dineroRetirar) {
  try {
    let balance = await checkBalance();
    console.log(`Saldo disponible: ${balance}$`);

    balance = await withdrawMoney(dineroRetirar, balance);
    console.log(`Retirando ${dineroRetirar}$...`);
    console.log(`Operación exitosa, saldo restante: ${balance}$`);

    console.log(`Retirando ${dineroRetirar}$...`);
    balance = await withdrawMoney(dineroRetirar, balance);
    console.log(`Operación exitosa, saldo restante: ${balance}$`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
cajeroAutomatico(300);
