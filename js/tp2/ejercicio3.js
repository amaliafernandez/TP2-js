//3- realizar un script que pida cadenas de texto hasta que se pulse "cancelar". Al salir con
//"cancelar" deben mostrarse todas las cadenas concatenadas con un guion


let resultado = "";
let entrada;

do {
    entrada = prompt("Introduce una cadena de texto (o pulsa Cancelar para salir):");
//cuando hafo click en cancelar me devuelve un null
    if (entrada !== null) {
        if (resultado === "") {
            resultado += entrada
        } else {
            resultado += "-" + entrada
        }
    }

} while (entrada !== null);

alert("Resultado final: " + resultado);