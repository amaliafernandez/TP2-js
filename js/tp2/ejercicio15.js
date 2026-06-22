//realiza un script que cuente el numero de vocales que tiene un texto.

const texto = prompt("Ingrasa un texto: ")
const vocales = "aeiou"
let resultado = 0
for (let i = 0; i < texto.length; i++){
    for (let j =0; j < vocales.length; j++){
        if (texto.charAt(i) === vocales.charAt(j) || texto.charAt(i) ===  vocales.charAt(j).toUpperCase()) {
            resultado++
        }
    }
}
console.log(resultado)
pantalla.innerHTML = resultado