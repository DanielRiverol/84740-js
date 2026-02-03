// console.log("Hola Mundo desde NODE");
// const persona = {
//   nombre: "Juanito Arcorirs",
//   edad: 18,
//   activo: true,
// };

// console.log(persona);
// const fs = require("fs")
// fs.writeFile("./archivo.txt", "Hola mundo",()=>{
//     try {
//         console.log("EXITO");

//     } catch (error) {
//         console.log("ERROR", error);

//     }
// })

const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>HOLA DESDE NODE</h1>");
    res.end();
  })
  .listen(4000);
