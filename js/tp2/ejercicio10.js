//realizar un scrip que pida numero de filas y columnas y escrivba una tabla.
// Dentro de cada una de las celdas deberá escribirse un numero consecutivo en orden
// descendente. Si, por ejemplo, la tabla es de 7x5  los números irán del 35 al 1.

const pantalla = document.getElementById("pantalla")
const fila = parseInt(prompt("Ingresa el número de filas deseados: "))
const columnas = parseInt(prompt("Ingresa el número de columnas deseados: "))
let celdas = fila * columnas
//pantalla.textContent = "hola mundo" text.content solo imprime texto

let tabla = `<table class="table table-striped"><tbody>`
for (let indiceFilas = 1; indiceFilas <= fila; indiceFilas++) {
    tabla += `<tr>`
    for (let indiceColumna = 1; indiceColumna <= columnas; indiceColumna++) {
        tabla += `<td>${celdas--}</td>`
    }
    tabla += `</tr>`
}
tabla += `</tbody></table>`
pantalla.innerHTML = tabla