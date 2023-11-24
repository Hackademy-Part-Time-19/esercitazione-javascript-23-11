let array1 = ["avvertimento", "biliardi", "zeta", "compartimento", "ripieno"]
let array2 = ["titanico", "risciacquare", "barella", "profumo", "anestesia"]
let lunghezzaminimaPar = 5


function filtraPerLunghezza(lista1, lista2, lunghezzaMinima) {
    let arrayConcat = array1.concat(array2)
    let arrayFIltrato = arrayConcat.filter((index) => index.length >= lunghezzaMinima)
    return arrayFIltrato
}

let arrayFIltrato = filtraPerLunghezza(array1, array2, lunghezzaminimaPar)


console.log(arrayFIltrato)




