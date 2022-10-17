const callback = (element) => {
    

    if (element >= 5) {
    return (element)
    }

    else {
        return (0)
    }
}

const result = [4, 6, 7, 9, 10, 12].map(callback)
console.log(result)