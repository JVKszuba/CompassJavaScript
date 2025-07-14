
let name = 'Mosh';
console.log(name);

// variables:
// cannot be a reserved keyword
// should be meaningful
// cannot start with a number
// cannot contain a space or hyphen
// are case-sensitive

const interestRate = 0.3;
console.log(interestRate);

// constants:
// cannot be changed

let firstName = 'Mosh'; // String literal
let age = 30; // Number literal
let isApproved = true; // Boolean literal
let lastName = undefined;
let selectedColor = null;

// primitives:
// undefined is the absence of a value
// null is an empty value

let person = {
    name: 'Mosh',
    age: 30
}
console.log(person);

// objects:
// a collection of key-value pairs

// Dot notation

person.name = 'John';
console.log(person.name);

// Bracket notation

person['name'] = 'Mary';
console.log(person['name']);

let selectedColors = ['red', 'blue'];
console.log(selectedColors);

selectedColors[2] = 1;
console.log(selectedColors);

// arrays:
// a collection of items

function greet(name, lastName = 'Doe') {

    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary');

function square(number) {

    return number * number;
}

console.log(square(2));

// functions:
// a block of code that performs a task