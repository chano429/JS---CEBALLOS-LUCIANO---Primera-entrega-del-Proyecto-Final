let nombresList = [];

function nombres() {
    for (let indice = 0; indice <= 2; indice++) {
      let nombre = prompt("Ingresa tu nombre:");
      nombresList.push( nombre ); 
    }
  }

  nombres(); // Iniciar la función
  console.log("Ud. ha ingresado los siguientes valores en la tabla: ")
  console.log(nombresList)

let opcion = prompt("Ingrese una opción (o), ordenar nombres")

if (opcion === "o"){ //ordenar x nombre
  console.log("Tabla ordenada x nombres:")
  console.log(nombresList.sort())
} else{
  if (opcion !== "o"){
    console.log("Ingresó otro caracter")
  }
}
