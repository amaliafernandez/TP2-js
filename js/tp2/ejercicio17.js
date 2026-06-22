//crear un script que muestre la posicion de la primera vocal de un texto introducido por teclado.

const frase =prompt("Ingrese una frase")
const vocales = "aeiou"
let encontrada = false
for (let i = 0; i < frase.length; i++){
    for (let j =0; j < vocales.length && !encontrada; j++){
        if (frase.charAt(i) === vocales.charAt(j) || frase.charAt(i) ===  vocales.charAt(j).toUpperCase()) {
            console.log(`la vocal ${vocales.charAt(j)} está en la posición ${i} : `)
            encontrada = true
            break
        }
    }
}

