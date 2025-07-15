// Objects can contain:
// Properties: values or others objects that hold data
// Methods: functions that operate on the object

let circle = {
    radius: 5,
    location : {x: 1, y: 1},
    isVisible: true,
    draw: function() {console.log('draw');}
}

circle.draw();

// Objects can be created using:
// Factory function: a function that returns an object

function createCircle(radius) {

    return {
        radius,
        location: {x: 0, y: 0},
        isVisible: true,
        draw() {console.log('draw');}
    };
}

let circle_factory = createCircle(1);
console.log(circle_factory);

// Constructor function: a function that creates an object using the `new` keyword

function Circle(radius) {
    
    this.radius = radius;
    this.location = {x: 0, y: 0};
    this.isVisible = true;
    this.draw = function() {console.log('draw');}
}

const circle_constructor = new Circle(10);
console.log(circle_constructor);

// Objects are dynamic
// Properties and methods can be added or removed properties at any time

circle_constructor.color = 'red';
console.log(circle_constructor);

delete circle_constructor.color;
console.log(circle_constructor);

// Every object can have a constructor property

console.log(circle_constructor.constructor);
console.log(circle_factory.constructor);

// The propertys of an object can be verifed
// The `in` operator check if a property exists

console.log('radius' in circle_constructor);
console.log('color' in circle_constructor);

// The `for...in` loop iterate over the properties

for (let key in circle_constructor) console.log(key, circle_constructor[key]);

// The `Object.keys()` method returns an array of the property names

console.log(Object.keys(circle_constructor));

// Objects can be coppied
// Using the `Object.assign()` method

const target = {a: 1};
const source = {b: 2, c: 3};

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

// Using the spread operator
const newTarget = {...source};
console.log(newTarget);

// Objects can be frozen or sealed
// Frezing an object prevents any changes to its properties

const frozenCircle = Object.freeze(circle_constructor); 

frozenCircle.radius = 20;
console.log(frozenCircle.radius);

// Sealing an object prevents adding or removing properties

const sealedCircle = Object.seal(circle_constructor);

sealedCircle.color = 'blue';
console.log(sealedCircle.color);
