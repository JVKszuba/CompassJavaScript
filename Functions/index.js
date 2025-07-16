// Functions can be defined in various ways

// Funtion declaration:
// The function declaration is hoisted, can be called before it is defined in the code.

function walk() {

  console.log('Walking...');
}

walk();

// Function expression:
// The function expression is not hoisted, cannot be called before it is defined.

const run = function() {

  console.log('Running...');
}

run();

// Named function expression:
// The named function expression is not hoisted, cannot be called before it is defined.

const swim = function swimFunction() {

    console.log('Swimming...');

}

swim();

// Arrow function:
// The arrow function is not hoisted, cannot be called before it is defined.

const jump = () => {

  console.log('Jumping...');
}

jump();

// The functions can have arguments and return values

function sum(a, b) {

  return a + b;
}

console.log(sum(5, 10));
console.log(sum(20));
console.log(sum(20, 30, 40));

// The functions can use arguments without parameters
// Using the `arguments` object

function multiply() {

    let result = 1;
    
    for (let i = 0; i < arguments.length; i++) result *= arguments[i];
    
    return result;
}

console.log(multiply(2, 3, 4));
console.log(multiply(5, 10));

// Using the rest parameter syntax

function divide(...args) {

    let result = args[0];
    
    for (let i = 1; i < args.length; i++) result /= args[i];
    
    return result;
}

console.log(divide(100, 2, 5));
console.log(divide(100, 2, 5, 2));

function sumWithDiscount(discount, ...prices) {

    let total = 0;
    
    for (let price of prices) total += price;
    
    return total * (1 - discount);
}

console.log(sumWithDiscount(0.1, 100, 200, 300));

// The parameters can have default values

function interest(principal, rate = 0.05, time = 1) {

    return principal * rate * time;
}

console.log(interest(1000));
console.log(interest(1000, 0.07));
console.log(interest(1000, 0.07, 2));

// The functions can be used as methods of objects
// Getter and setter functions

const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {return `${this.firstName} ${this.lastName}`;},
    set fullName(name) {

        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person.fullName);
person.fullName = 'Jane Smith';
console.log(person.fullName);

// The variables defined inside a function are not accessible outside of it

function localScope() {

    const localVar = 'I am local';
    console.log(localVar);
}

localScope();
// console.log(localVar);

// Using `this` to reference the current object

const dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    bark() {
        console.log(`${this.name} is barking!`);
    }
};

dog.bark()

// The value of `this` depends on how the function is called

function showThis() {console.log(this);}

showThis();

const cat = {
    name: 'Whiskers',
    meow: showThis
};

cat.meow();

// Arrow functions do not have their own `this`
// They inherit `this` from the surrounding (lexical) scope

const rabbit = {
    name: 'Fluffy',
    jump() {
        const arrowFunc = () => console.log(`${this.name} is jumping!`);
        arrowFunc();
    }
};

rabbit.jump();

// If we used a regular function instead of an arrow function:

const turtle = {
    name: 'Speedy',
    crawl() {
        function regularFunc() {console.log(`${this.name} is crawling!`)};
        regularFunc();
    }
};

turtle.crawl();

// To preserve `this` inside regular functions, use `.bind`, `call`, or `apply`

function sayName() {console.log(`My name is ${this.name}`)};

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

sayName.call(person1);
sayName.apply(person2);
sayName.bind(person1)();