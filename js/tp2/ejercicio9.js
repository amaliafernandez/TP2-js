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
