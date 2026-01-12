// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   total = total + i;
// }
// console.log(total);

// function sumarRango(inicio, fin) {
//   let total = 0;
//   for (let i = inicio; i <= fin; i++) {
//     total = total + i;
//   }
//   return total
// }

// console.log(sumarRango(1,10));
// console.log(sumarRango(2,5));
// console.log(sumarRango(1,45));

const nums = [1, 2, 3, 4, 5, 3, 7, 8, 9];

// for (let index = 0; index < nums.length; index++) {
//   const element = nums[index];
//   console.log(element);
// }

// for (const element of nums) {
//   console.log(element);
// }
const cadenas = ["Hola", "soy", "un", "mensaje"];
// for (const element of cadenas) {
//   console.log(element);
// }

// funciones de Orden superior
function porCadaUno(arr, funcion) {
  for (const element of arr) {
    //nums
    funcion(element); //alert(element) | console.log(element)
  }
}

// porCadaUno(nums,alert)
// porCadaUno(nums,console.log)

// metodos de los arrays
// nums.forEach((num) => console.log(num));
const funcionCadena = (cadena) => console.log(cadena);
// cadenas.forEach(funcionCadena);

// find devuelve el primer elemento que encuentra
let mayorADos = nums.find((el) => { return el > 2});
console.log(mayorADos);
// let noEncontrado = nums.find((el) => el > 20);
// console.log(noEncontrado);
// // filter devuelve un array
// const filtrado= nums.filter(num => num > 5)
// console.log(filtrado);
// fnution flecha ()=> return (implicito)
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  { id: 8, nombre: "mascarillas", precio: 2300, img: "mascarilla.jpeg" },
];


const precioMenor= servicios.filter(servicio=>{
    return servicio.precio <= 2000 
})
console.log(precioMenor);
const precioMayor= servicios.filter(servicio=>{
    return servicio.precio >= 2000 
})
console.log(precioMayor);


precioMayor.forEach(el=>console.log(el)
)
let resultado= prompt('busca producto')
// buscar entre los de precio por nombre
const encontrado =precioMenor.find(el=> {
    return el.nombre.includes(resultado)
})

console.log(encontrado);
