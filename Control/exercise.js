// Exercise 1 - Max of Two Numbers

console.log("Exercise 1 - Max of Two Numbers");

function maxOfTwo(a, b) {

    return a > b ? a : b;
}

console.log(maxOfTwo(10, 20));
console.log(maxOfTwo(30, 15));

// Exercise 2 - Landscape or Portrait

console.log("Exercise 2 - Landscape or Portrait");

function landscapeOrPortrait(width, height) {

    return width > height ? "Landscape" : "Portrait";
}

console.log(landscapeOrPortrait(800, 600));
console.log(landscapeOrPortrait(600, 800));

// Exercise 3 - FizzBuzz

console.log("Exercise 3 - FizzBuzz");

function fizzBuzz(n) {

    if (typeof n !== 'number') return NaN;

    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    else if (n % 3 === 0) return "Fizz";
    else if (n % 5 === 0) return "Buzz";
    else return n;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));
console.log(fizzBuzz("Hello"));

// Exercise 4 - Demerit Points

console.log("Exercise 4 - Demerit Points");

function demeritPoints(speed) {

    if (typeof speed !== 'number' || speed < 0) return "Invalid speed";

    const limit = 70;
    const kmPerPoint = 5;

    if (speed < limit + kmPerPoint) return "Ok";

    const points = Math.floor((speed - limit) / kmPerPoint);

    return points >= 12 ? "License suspended" : `Points: ${points}`;
}

console.log(demeritPoints(70));
console.log(demeritPoints(90));
console.log(demeritPoints(130));

// Exercise 5 - Even or Odd Numbers

console.log("Exercise 5 - Even or Odd");

function showNumbers(limit) {

    if (typeof limit !== 'number' || limit < 0) return "Invalid limit";

    for (let i = 0; i <= limit; i++) {

        const message = (i % 2 === 0) ? `even` : `odd`;

        console.log(`${i} is ${message}`);        
    }
}

showNumbers(10);

// Exercise 6 - Count Truthy Values

console.log("Exercise 6 - Count Truthy Values");

function countTruthy(array) {

    if (!Array.isArray(array)) return "Invalid input";

    let count = 0;

    for (const item of array) if (item) count++;

    return count;
}

console.log(countTruthy([0, null, undefined, 1, "Hello", false, 42]));
console.log(countTruthy([null, NaN, "", 0, false]));

// Exercise 7 - String Properties

console.log("Exercise 7 - String Properties");

const movie = {

    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction",
    rating: 8.8
};

function showProperties(obj) {

    if (typeof obj !== 'object' || obj === null) return "Invalid object";

    for (const key in obj) {

        if (typeof obj[key] === 'string') console.log(`${key}: ${obj[key]}`);
        
    };
}

showProperties(movie);

// Exercise 8 - Sum of Multiples 3 and 5

console.log("Exercise 8 - Sum of Multiples 3 and 5");

function sumOfMultiples(limit) {

    if (typeof limit !== 'number' || limit < 0) return "Invalid limit";

    let sum = 0;

    for (let i = 0; i < limit; i++) {

        if (i % 3 === 0 || i % 5 === 0) sum += i;
    
    }

    return sum;
}

console.log(sumOfMultiples(10));
console.log(sumOfMultiples(1000));

// Exercise 9 - Grade Calculator

console.log("Exercise 9 - Grade Calculator");

function calculateGrade(scores) {

    let average = calculateAverage(scores);

    if (average < 60) return "F";
    else if (average < 70) return "D";
    else if (average < 80) return "C";
    else if (average < 90) return "B";
    else return "A";
}

function calculateAverage(scores) {

    if (!Array.isArray(scores)) return "Invalid input";

    let sum = 0;

    for (const item of scores) { sum += item; }

    return sum / scores.length;
}

console.log(calculateGrade([90, 80, 70, 60]));
console.log(calculateGrade([60, 50, 85, 70]));

// Exercise 10 - Star Pattern

console.log("Exercise 10 - Star Pattern");

function showStars(rows) {

    if (typeof rows !== 'number' || rows < 1) return "Invalid number of rows";

    for (let row = 1; row <= rows; row++) {

        let pattern = '';

        for (let i = 0; i < row; i++) pattern += '*';

        console.log(pattern);
    }
}

showStars(5);
showStars(3);

// Exercise 11 - Prime Numbers

console.log("Exercise 11 - Prime Numbers");

function showPrimes(limit) {

    if (typeof limit !== 'number' || limit < 2) return "Invalid limit";

    for (let number = 2; number <= limit; number++) {

        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {

    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) if (number % i === 0) return false;
    
    return true;
}

showPrimes(20);
showPrimes(50);