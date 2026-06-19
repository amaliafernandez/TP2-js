//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje
//que ya puede conducir, si la edad ingresada no es un numero valido indicarlo en un mensaje.

const edad = parseInt(prompt("ingrese su edad: "))
if (!isNaN(edad)) {
    if (edad >= 18) {
        console.log("¡Ya puedes conducir!")
        alert("¡Ya puedes conducir!");
    } else {
        alert("¡No puedes conducir todavia!");
    }
}else {
    alert("Ingresaste un valor no numerico")
}