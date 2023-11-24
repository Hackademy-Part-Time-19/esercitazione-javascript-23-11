function filtraNumeripari(lista) {
    let listaNumeri= lista.filter((index) => index % 2 == 0);;
    

 return listaNumeri
}



let array = [2,5,3,9,8,20,6,]

let listaNumeri =filtraNumeripari(array)
console.log(listaNumeri)