const card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

btn.addEventListener("click", () => {
  setTimeout(() => {
    card.classList.remove("active");
  }, 2500);
  card.classList.add("active");

  // card.style.display='block'
});

// PROMESAS

// Evento futuro
// console.log('Hola tarola');
// console.log(
//   new Promise((resolve, reject) => {
//     // cuerpo de la promessa
//   }),
// );
// console.log('Hola tarola');

const eventoFuturo = (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response === true) {
        resolve("Promesa resuelta");
      } else {
        reject("Promesa rechazada");
      }
    }, 2000);
  });
};

// const resultadoExitoso= eventoFuturo(true).then(res=>{
//   console.log(res);

// })
// console.log(resultadoExitoso);
// const resultadoRechazado= eventoFuturo(false).catch(error=>{
//   console.log(error);

// })
//  console.log(resultadoRechazado);

// const resultado = eventoFuturo(false)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const devolverCD = (respuesta) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (respuesta === 5) {
        resolve("Si tomá gracias por prestarlo");
      } else {
        reject("Uh lo perdí");
      }
    }, 3000);
  });
};

console.log("Te acordas el cd que te presté?");
devolverCD(5)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Sigo haciendo cosas");

const renderServicios = (arr) => {
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;
    html = `
        <div class="card">
      		<div class="card-image">
        	<img src="../img/${img}">
        	<span class="card-title">${nombre.toUpperCase()}</span>
       </div>
     	 <div class="card-content"> 
     		<p>$${precio}</p>
      </div>
      <div class="card-action">
        <button class="btn btn-normal" id="${id}">Comprar</button>
      </div>
     </div>
     `;
    contenedor.innerHTML += html;
  }
};

const pedirServicios = (arr) => {
  // contenedor.innerHTML = "CARGANDO...⏱️ ";

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr) {
        resolve(arr);
      } else {
        reject("Error al cargar los datos");
      }
    }, 3000);
  });
};
// pedirServicios(false)
//   .then((res) => {
//     renderServicios(res);
//   })
//   .catch((error) => {
//     contenedor.innerHTML = error;
//   });

// fetch
fetch("https://api.npoint.io/5f4b004b70542a5efb70")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderServicios(data);
  });
