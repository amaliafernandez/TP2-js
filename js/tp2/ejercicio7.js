// Haz un script que escriba una pirámide inversa de los numeros
// del 1 al numero que indique el usuario (no mayor a 50) de la siguiente forma:
// (suponiendo que indica 30)
//3030303030303030
//29292929292929
//282828282828 ....

//1
let numero = prompt("ingrese un numero del 1 al 50")
console.log(numero)
if (numero < 50) {
    for (let i = numero; i >= 0; i--) {
        let fila = ""; // variable que acumula la fila

        for (let repet = 1; repet <= i; repet++) {
            fila += i; // le pego el número i, tantas veces como diga repet
        }
        console.log(fila);
    }

}else {
    alert("Ingrese un valor menor a 50")
}