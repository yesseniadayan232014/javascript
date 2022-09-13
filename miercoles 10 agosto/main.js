console.log('prueb')
const cambiarColor =() => {
    const color = document.getElementById('bgcolor').value
    console.log(color)
    document.bgColor = color
}
 const cambiarcolordesdeselect =() => {
    const color= document.getElementById('selectcolor').value
    document.bgColor = color
}

const colorear = (color) => {
    document.bgColor= color
}