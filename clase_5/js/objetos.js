// OBJETOS 
// let nombre= "Alan"
// let apellido = "Lopez"
// let telefono = "+5491234565434"
// let direccion= "calle falsa 123"
// let nombre1= "Juan"
// let apellido1 = "perez"
// let telefono1 = "+549134567865"
const agenda=[]
//  objetos literales

const contacto = {
    nombre:"Alan",
    apellido: "Lopez", 
    telefono:"+549567876474", 
    direccion:"calle falsa 123"
}
// console.log(contacto);
const contacto1 = {
    nombre:"Juan",
    apellido: "Perez", 
    telefono:"+5498383738", 
    telefono_laboral:"+8398372892", 
}
// console.log(contacto1);
const contacto2 = {
    nombre:"Laura",
    apellido: "Perez", 
email:"lauperez@mail.com",
hobbies:["jugar al paddle", "hacer macramé"]
}
// console.log(contacto2);
agenda.push(contacto,contacto1,contacto2)
// console.log(agenda);

// acceder a la las claves de los objetos
// notacion []
console.log(contacto["nombre"]);
console.log(contacto2["email"]);

// notacion (.)
console.log(contacto1.telefono_laboral);
console.log(contacto1);

