//💰El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- Una vez ingresado mostrar las siguientes opciones en pantalla: 
  a- Saldo 💵
  b- Retiro 💸
  c- Depósito 💰
  d- Salir ❌
4- Al finalizar mostrar mensaje
*/

// alert('Bienvenido al banco')
// variables
let pinGuardado = "5701";
let saldo = 20000;
// funciones
function validarPin() {
  for (let i = 2; i >= 0; i--) {
    let ingreso = prompt("Ingresa tu clave");
    if (pinGuardado === ingreso) {
      alert("Bienvenido");
      return true;
    } else {
      alert("Error. Te quedan " + i + " intentos");
    }
  }
  return false;
}

function verSaldo() {
  alert("Tu saldo es $" + saldo);
}

function retiro() {
  let retiro = parseFloat(prompt("Ingresa el monto a retirar"));
  if (retiro > saldo) {
    alert("Fondos insufucientes, tu saldo es $" + saldo);
  } else {
    saldo = saldo - retiro;
    alert("Reitasre $" + retiro);
  }
}

function depositar() {
  // la hacen ustedes
}
// console.log(ingresoValido);

function iniciarCajero() {
  let ingresoValido = validarPin();
  if (ingresoValido) {
    let opcion = prompt(
      "Me nu exterior:Elegí una opción: \n1- Saldo. \n2 - Retiro. \n3 - Depósito. \nPresioná X para finalizar."
    );

    while (opcion != "x") {
      if (opcion == "1") {
        verSaldo();
      } else if (opcion == "2") {
        retiro();
      }

      // condicion de salida
      opcion = prompt(
        "Elegí una opción: \n1- Saldo. \n2 - Retiro. \n3 - Depósito. \nPresioná X para finalizar."
      );
    }
  } else {
    alert("Tarjeta retenida. Comnuciate con el 0800- que te importa");
  }
}

iniciarCajero();
