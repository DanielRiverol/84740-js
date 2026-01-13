const productos = [
  { id: 1, nombre: "arroz integral", precio: 89 },
  { id: 2, nombre: "papa", precio: 90 },
  { id: 3, nombre: "tomate", precio: 204 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideo", precio: 124 },
  { id: 7, nombre: "fideo", precio: 160 },
  { id: 8, nombre: "arroz", precio: 500 },
  { id: 8, nombre: "arroz", precio: 500 },
  
];
const personas = [
  "Matias",
  "Pablo",
  "Maria",
  "Tobias",
  "Marcia",
  "Kevin",
  "Karen",
  "Federico",
  "Carolina",
  "Facundo",
  "Camila",
  "Stefi",
  "Augusto",
  "Jessica",
  "Carla",
  "Bautista",
  "Rodrigo",
  "German",
];
// acceder al DOM
const titulo_principal = document.getElementById('titulo')
titulo_principal.innerText = "Estamos trabajando con el DOM desde Js";
// titulo_principal.innerText = "<span>Clase 7</span>";
// titulo_principal.textContent = "Esto es desde un textContent";

// titulo_principal.innerHTML="<span>Clase 7</span>"
console.log(titulo_principal.innerText);

const subtitulos = document.getElementsByTagName('h2')
console.log(subtitulos[0].innerHTML);
console.log(subtitulos[1].innerHTML);
console.log(subtitulos[2].innerHTML);

// listado de paises
const paises = document.getElementsByClassName('pais')

console.log(paises);
let pais = "PARAGUAY"
paises[0].innerHTML=pais
for (const pais of paises) {
  // pais.style.color = "green";
  // pais.style.backgroundColor = "blue";
  console.log(pais.innerText);
  
}
