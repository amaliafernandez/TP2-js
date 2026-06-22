//Escribir un programa que solicite una nota de 0 a 10. luego mostrar la calificacion en un alert
//segun  lo siguientes rangos de nota
// 0-2: muy deficiente    3-4: Insuficiente
//5-6: suficiente    7: bien
//8-9: notable       10: sobresaliente
//si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de "numero erroneo"
//Si el numero ingresado no es valido mostrar el mensaje "introduce un numero valido"

let nota = parseInt(prompt("ingrese una nota: "))
if (!isNaN(nota)) {
    switch (nota) {
        case 0 :
        case 1 :
        case 2 :
            alert("Tu nota fue: Muy deficiente");
            break
        case 3 :
        case 4 :
            alert("Tu nota fue: Insuficiente");
            break
        case 5 :
        case 6 :
            alert("Tu nota fue: Suficiente");
            break
        case 7 :
            alert("Tu nota fue: Bien");
            break
        case 8 :
        case 9 :
            alert("Tu nota fue: Notable");
            break
        case 10 :
            alert("Tu nota fue: Sobresaliente");
            break
        default :
            alert("Introduce un número válido")
    }
} else {
    alert("Número erróneo")
}