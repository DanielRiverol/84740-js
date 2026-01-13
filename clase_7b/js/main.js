const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Canada",
];
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

const caja = document.getElementById('caja')


// caja.addEventListener('click',()=>{
//   console.log('Hiciste clic');
//   caja.style.backgroundImage = "url(./img/pum.png)";
// })
// caja.addEventListener("mouseenter",()=>{
//   console.log('Entraste a la caja');
//   caja.style.backgroundImage= "url(./img/estados.jpg)"
  
// })
// caja.addEventListener("mouseleave",()=>{
//   console.log('Salist a la caja');
//    caja.style.backgroundImage = "url(./img/australia.jpg)";
  
// })

const inputSearch = document.getElementsByTagName("input")[0];
const contenedor = document.getElementById("contenedor")
// console.log(inputSearch);
function crearHtml(el) {
  //llamo al elemento contenedor
  contenedor.innerHTML = "";
  //creo una variable con un estructura html
  let html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button class="btn" id="${el.id}">Comprar</button>
                  </div>
              </div>`;
  //se la agrego al contenedor

  //modificar para que muestre un cartel producto no encontrado
  contenedor.innerHTML = html;
}
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}


//  
const encontrado = buscarServicio(servicios, prompt())
console.log(encontrado);
inputSearch.value= "Manzana"
 crearHtml(encontrado)