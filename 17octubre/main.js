const callback =  (element, i, arr) => {
    console.log (element, i, arr)
return element * 2
}



const arr = [1, 5, 6, 8] .map (callback)
console.log (arr)