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

const persona = {
  nombre: "Juanito Arcorirs",
  edad: 18,
  activo: true,
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.activo);
// destructuring
const { nombre, activo } = persona;
console.log(nombre);
console.log(activo);
// const crearTarjeta = (obj) => {
//   
//   let html = `<div class="card">
//                   <h3> Nombre: ${obj.nombre}</h3>
//                     <p>Edad: ${obj.edad}</p>
//                 </div>`;
//   return html;
// };
// const crearTarjeta = (obj) => {
//   const { nombre, edad } = obj;
//   let html = `<div class="card">
//                   <h3> Nombre: ${nombre}</h3>
//                     <p>Edad: ${edad}</p>
//                 </div>`;
//   return html;
// };
const crearTarjeta = ({ nombre, edad }) => {
  return `<div class="card">
                  <h3> Nombre: ${nombre}</h3>
                    <p>Edad: ${edad}</p>
                </div>`;
};
contenedor.innerHTML=crearTarjeta(persona)