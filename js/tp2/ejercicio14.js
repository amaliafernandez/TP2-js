//14- realiza un script que pida una cadena de texto y lo muestre poniendo el signo -
// entre cada caracter sin usar el metodo repalce. Por ejemplo, si tecleo "hola qué tal", deberá salir
//"h-o-l-a-q-u-e-t-a-l".


const frase = prompt("ingresa una frase")
let resultado = ""
for (let i = 0;  i < frase.length; i++){
    resultado += frase.charAt(i) + "-"
}
console.log(resultado)
pantalla.innerHTML = resultado