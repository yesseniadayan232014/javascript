//calculando promedios (mas alto , mas bajo , promedio de curso )

const grades = [5.1, 4.7, 4.6, 4.4, 3.8, 3.7, 3.1, 2.9, 2.9, 2.7, 2.8]

const reduceFn = (acumulado, actual) => {
    return acumulado + actual
}

const reduceHighestFn = (previo, actual) => {
    if ( previo > actual) {
        return previo
    }else {
        return actual 
    }
}

const reducelowestFn = ( previo , actual ) => {
    if ( previo < actual) {
        return previo
    }else {
        return actual
    }
}

const highestGrade = grades.reduce(reduceHighestFn)
const lowestGrade = grades.reduce(reduceLowestFn)

console.log(" El promedio del oficio de progra fue:" + gredes.reduce(reduceFn) /
    gredes.length)

console.log(" La nota mas alta fue:" + highestGrade)

console.log(" La nota mas baja fue:" + lowestGrade)