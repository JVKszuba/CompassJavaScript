// Exercise 1 - Sum of Arguments

console.log('Exercise 1 - Sum of Arguments')

function sum(...array) {

    return array.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 20))

function sumArray(...array) {

    if (array.length === 1 && Array.isArray(array[0])) array = [...array[0]]

    return array.reduce((a, b) => a + b)
}

console.log(sumArray([1, 2, 3, 4, 5]))
console.log(sumArray([10, 20]))

// Exercise 2 - Area of Circle

console.log('Exercise 2 - Area of Circle')

const circle = {

    radius: 2,
    get area() {return Math.PI * Math.pow(this.radius, 2)}
}

console.log(circle.area)

// Exercise 3 - Erro Handling

console.log('Exercise 3 - Erro Handling')

function countOccurrences(array, searchElement) {

    if (!Array.isArray(array)) throw new Error("Invalid input: first argument should be an array");
    if (typeof searchElement === 'undefined') throw new Error("Invalid input: searchElement should not be undefined");

    return array.reduce((count, element) => { 
        const occurrences = element === searchElement ? 1 : 0; 
        return count + occurrences; 
    }, 0);

}

try {

    console.log(countOccurrences([1, 2, 3, 4, 2], 2));
    console.log(countOccurrences([1, 2, 3, 4, 5], 6));
    //console.log(countOccurrences([1, 2, 3, 4, 2], undefined));
    //console.log(countOccurrences(null, 5))
    
} catch (e) {console.log(e)}
