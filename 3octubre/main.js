const saludar = () => {
    console.log("Hello world")
}

const getSalute = (name) => {
    return "Hola" + name
}

saludar()
//console.log(getSalute("Abigail"))
//console.log(getSalute("Ale"))
//console.log("Hola")





const nombreCompleto = (name , apellidoMaterno ,apellidoPaterno ) => {
    return name + " " + apellidoPaterno + " " + apellidoPaterno
}

const fullName = nombreCompleto ( "Abigail" , "Rojas" , "Araneda") ;


console.log (fullName , "Tu nombre tiene " , fullName.length , "caracteres")

