const notas = [1.3, 2.1, 3.4, 7.0, 6.2, 5.4]
let suma = 0

//contador = contador +1
for (let contador = 0; contador < notas.length;contador ++ ) {

    suma += notas[contador] //suma = suma +notas [contador]
    

    console.log("el total es:", suma)
}

const promedio = suma / notas.length

console.log(promedio)