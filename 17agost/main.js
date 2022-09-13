const calcular = () => {
 //"1+100+20+9"

    const formulaInput = document.getElementById('formulaInput').value;
    const arregloConNumeros =formulaInput.split('+')
    console.log(arregloConNumeros)

    let suma = 0;
    for (let indice = 0; indice < arregloConNumeros.length; indice++){
    
    suma= Number(arregloConNumeros[indice]) + suma;
    }
    console.log(suma)
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<p> El resultado es <strong>" +  suma + "</strong></p>"
   }

   