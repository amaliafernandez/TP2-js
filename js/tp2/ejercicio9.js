//crea un scrip que escriba los numeros del 1 al 500 que indique cuales son los multiplos de 4 y de9
// y que cada 5 lineas muestre una linea horizontal.


for (let i = 1; i <= 500; i++) {
    console.log(i)
    if (i % 5 === 0) {
        console.log("-------")
    }
    if (i % 4 === 0){
        console.log(`este numero:${i} es multiplo de 4`)
    }
    if (i % 9 === 0){
        console.log(`este numero:${i} es multiplo de 9`)
    }
}
