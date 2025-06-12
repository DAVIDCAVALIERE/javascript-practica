/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

const urlGet = "https://jsonplaceholder.typicode.com/users/1";
const urlPost = "https://jsonplaceholder.typicode.com/users";

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch(urlGet)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Datos obtenidos con fetch: ", data);
  })
  .catch((error) => {
    console.error(error);
  });

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getUsers() {
  try {
    const response = await fetch(urlGet);
    const data = await response.json();
    console.log("Datos obtenidos con ASYNC/AWAIT: ", data);
  } catch (error) {
    console.error("Error: ", error);
  }
}
getUsers();

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function createUser() {
  try {
    const user = {
      name: "David",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    const response = await fetch(urlPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("Datos CREADOS: ", data);
  } catch (error) {
    console.log(error);
  }
}
createUser();

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function userUpdate() {
  try {
    const userUpdate = {
      name: "David Caballero",
      username: "david",
      email: "david@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Chicago",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "MICROSOFT",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    const response = await fetch(urlGet, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    });
    const data = await response.json();
    console.log("Datos ACTUALIZADOS: ", data);
  } catch (error) {}
}
userUpdate();

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function partialUserUpdate() {
  try {
    const nameUpdate = { name: "David Caballero" };
    const response = await fetch(urlGet, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nameUpdate),
    });

    const data = await response.json();
    console.log("ACTUALIZACION PARCIAL: ", data);
  } catch (error) {
    console.log("Error", error);
  }
}

partialUserUpdate();

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function userDelete() {
  try {
    const response = await fetch(urlGet, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Eliminacion con exito: ", data);
  } catch (error) {
    console.log("Error", error);
  }
}
userDelete();

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemon(nombre) {
  try {
    // Data pokemon
    const response = await fetch(`${urlPokemon}${nombre}`);
    const data = await response.json();
    console.log(`Nombre: ${data.name}, urlEspecie: ${data.species.url}`);

    // Especie pokemon
    const responseEspecie = await fetch(`${data.species.url}`);
    const dataEspecie = await responseEspecie.json();
    console.log("Especie:");
    dataEspecie.egg_groups.forEach((grupo) => {
      console.log(grupo.name);
    });
    console.log("Url Cadena de Evolucion: ", dataEspecie.evolution_chain.url);

    // Cadena de evolucion pokemon
    const responseEvolucion = await fetch(dataEspecie.evolution_chain.url);
    const dataEvolucion = await responseEvolucion.json();
    console.log(
      `Cadena evolucion:
      ${dataEvolucion.chain.species.name} => ${dataEvolucion.chain.evolves_to[0].species.name} => ${dataEvolucion.chain.evolves_to[0].evolves_to[0].species.name}`
    );
  } catch (error) {
    console.log("Error", error);
  }
}
getPokemon("charmander");

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
