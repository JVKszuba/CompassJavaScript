// Exercise 1 - Arrays From Range

console.log('Exercise 1 - Arrays From Range');

function arrayFromRange(min, max) {

    if (typeof min !== 'number' || typeof max !== 'number') return "Invalid input: min and max should be numbers";

    if (min > max) return "Invalid input: min should not be greater than max";

    const result = [];

    for (let i = min; i <= max; i++) result.push(i);
  
    return result;
}

console.log(arrayFromRange(1, 4));
console.log(arrayFromRange(-2, 2));

// Exercise 2 - Includes

console.log('Exercise 2 - Includes');

function includes(array, searchElement) {

    if (!Array.isArray(array)) return "Invalid input: first argument should be an array";

    for (let element of array) if (element === searchElement) return true;
    
    return false;
}

console.log(includes([1, 2, 3, 4], 3));
console.log(includes([1, 2, 3, 4], 5));

// Exercise 3 - Except

console.log('Exercise 3 - Except');

function except(array, excluded) {

    if (!Array.isArray(array) || !Array.isArray(excluded)) return "Invalid input: both arguments should be arrays";

    const result = [];

    for (let element of array) {
        
        if (!excluded.includes(element)) result.push(element);
        
    }

    return result;
}

console.log(except([1, 2, 3, 4], [1, 2]));
console.log(except([1, 2, 3, 4], [2, 3, 4]));

// Exercise 4 - Moving an Element

console.log('Exercise 4 - Moving an Element');

function move(array, index, offset) {

    if (!Array.isArray(array)) return "Invalid input: first argument should be an array";
    if (typeof index !== 'number' || typeof offset !== 'number') return "Invalid input: index and offset should be numbers";
    if (index < 0 || index >= array.length) return "Invalid input: index out of bounds";

    const newIndex = index + offset;

    if (newIndex < 0 || newIndex >= array.length) return "Invalid move: new index out of bounds";
    
    const output = [...array];

    const element = output.splice(index, 1)[0];
    output.splice(newIndex, 0, element);

    return output;
}

console.log(move([1, 2, 3, 4], 0, 2));
console.log(move([1, 2, 3, 4], 2, -1));
console.log(move([1, 2, 3, 4], 3, 1));

// Exercise 5 - Count Occurrences

console.log('Exercise 5 - Count Occurrences');

function countOccurrences(array, searchElement) {

    if (!Array.isArray(array)) return "Invalid input: first argument should be an array";
    if (typeof searchElement === 'undefined') return "Invalid input: searchElement should not be undefined";

    return array.reduce((count, element) => { 
        const occurrences = element === searchElement ? 1 : 0; 
        return count + occurrences; 
    }, 0);

}

console.log(countOccurrences([1, 2, 3, 4, 2], 2));
console.log(countOccurrences([1, 2, 3, 4, 5], 6));
console.log(countOccurrences([1, 2, 3, 4, 2], undefined));

// Exercise 6 - Get Max

console.log('Exercise 6 - Get Max');

function getMax(array) {

    if (!Array.isArray(array)) return "Invalid input: argument should be an array";
    if (array.length === 0) return "Invalid input: array should not be empty";

    return array.reduce((max, element) => (max > element) ? max : element);
}

console.log(getMax([1, 2, 3, 4]));
console.log(getMax([-1, -2, -3, -4]));
console.log(getMax([]));

// Exercise 7 - Movies

console.log('Exercise 7 - Movies');

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3.0 },
    { title: 'd', year: 2017, rating: 4.5 }
];

chosenMovies = movies
    .filter(movie => movie.year === 2018 && movie.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(movie => movie.title);

console.log(chosenMovies);