//11- realizar un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor


let edad1 = parseInt(prompt("ingresar edad 1: "))
while (isNaN(edad1)) {
    edad1 = parseInt(prompt("Eso no es un número. Ingresar edad 1: "))
}
let nombre1 = prompt("ingresar un nombre")

let edad2 = parseInt(prompt("ingresar edad 2: "))
while (isNaN(edad2)) {
    edad2 = parseInt(prompt("Eso no es un número. Ingresar edad 2: "))
}
let nombre2 = prompt("ingresar un nombre")

let edad3 = parseInt(prompt("ingresar edad 3: "))
while (isNaN(edad3)) {
    edad3 = parseInt(prompt("Eso no es un número. Ingresar edad 3: "))
}
let nombre3 = prompt("ingresar un nombre")

if (edad1 >= edad2 && edad1 >= edad3){
    alert(`${nombre1} es el mayor`)
}else if (edad2 >= edad1 && edad2 >= edad3) {
    alert(`${nombre2} es  mayor`)
}else {
    alert(`${nombre3} es mayor`)
}




