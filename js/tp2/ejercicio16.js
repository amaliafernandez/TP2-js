//Realizar un script que pida una cadena de texto y la devuelva al reves. Es decir, si tecleo "hola que tal"
//deberá mostrar "lat euq aloh"


const frase = prompt("ingresa una frase")
let resultado = ""
for (let i = frase.length-1;  i >= 0; i--){
    resultado += frase.charAt(i)
}
console.log(resultado)
pantalla.innerHTML = resultado