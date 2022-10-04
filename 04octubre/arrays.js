const grupoNumeros = [1, 2, 3, 4, 5, 6]

const invertirArrays = (array) => {
    let index = array.length - 1
    do {
        console.log(array[index])
        index-- // index = index - 1
    } while (index >= 0)
}

//invertirArrays(grupoNumeros)
invertirArrays([1,2,3,9])
invertirArrays([1,9])
invertirArrays([12,3,9])