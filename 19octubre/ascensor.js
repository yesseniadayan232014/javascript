const posicionAscensores = [-1, 5, 10, 1, 1]
const piso = 15
const distanciaCallbackFn = (pisoDelAscensor) => {
    const distancia = piso - pisoDelAscensor
    return MatchMedia.abs (distancia)
}

const calcularAscensorMasCercano = (acumulado , pisoActual , index ) => {
    if (acumulado < pisoActual) {
        return acumulado
    } else {
        return pisoActual
    }
}

//¿cual es la menor distancia?
const pisoMasCercano = distanciaArr.reduce (calcularAscensorMasCercano)
console.log ("pisoMasCercano"  (pisoMasCercano))



// ¿ a que distancia estan los ascensores del usuario
const distanciaArr = posicionAscensores.map ( distanciaCallbackFn)
  console.log (distanciaArr)


  // ¿cual es el ascensor indicado ?
console.log ("enviar el ascensor :" ,  distanciaArr.indexOf (pisoMasCercano) +1 )

// si el usuario llama desde el piso 5 , mandaria el ascensor 2





