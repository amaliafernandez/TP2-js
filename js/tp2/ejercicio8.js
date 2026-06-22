//8-crea un script para generar una piramide con los numeros del 1
// al que indique el usuario, no mayor a 50


let numero = prompt("ingrese un numero del 1 al 50")
console.log(numero)
if (numero < 50) {
    for (let i = 1; i <= numero; i++) {
        let fila = ""; // variable que acumula la fila

        for (let repet = 1; repet <= i; repet++) {
            fila += i; // le pego el número i, tantas veces como diga repet
        }
        console.log(fila);
    }

}else {
    alert("Ingrese un valor menor a 50")
}