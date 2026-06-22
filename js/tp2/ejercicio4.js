//4- Realizar un script que pida numeros hasta que se pulse "cancelar". Si no es un número deberá
// indicarse con un "alert" y seguir pidiendo números. Al salir con "cancelar" deberá indicarse
// la suma total de los números introducidos.

let suma = 0
let numero = null;

do {
    numero = prompt("Introduce un número:");
    //si aprieta cancelar da null
    if (numero !== null) {
        if (!isNaN(numero)) {
            suma += numero
        }else {
            alert("debe untroducir un numero")
        }
    }
} while (numero !== null);

alert("Resultado final: " + suma);