//Realizar un script que escriba una piramide del 1 al 30 de la siguiennte forma:
//1
//22
//333
//4444
//55555
//666666
//7777777 ....


for (let i = 1; i <= 30; i++) {
    let fila = ""; // variable que acumula la fila

    for (let repet = 1; repet <= i; repet++) {
        fila += i; // le pego el número i, tantas veces como diga repet
    }
    console.log(fila);
}