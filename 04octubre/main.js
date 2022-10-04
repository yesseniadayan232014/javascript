const mayorDeEdad = (age) => { //evalua la condicion de edad para verdadero o falso

    if (age >= 18) {
        return true

    } else {
        return false
    }
}
console.log(mayorDeEdad(15))


const logmessage = (age) => {  //aqui se decreta el mensaje 
 
    if (mayorDeEdad(age)) {
        console.log("Es mayor de edad")


    } else {
        console.log("Es menor de edad")
    }

}

const transformAge = (age) => { // tranformamos el mensaje de texto a numero
    return number (age)
}
const userAge = prompt ("Indicanos tu edad")

logmessage (transformAge (userAge))