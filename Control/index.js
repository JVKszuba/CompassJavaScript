// If Else

let hour = 10;

if (hour >= 6 && hour < 12) {

    console.log("Good morning");

} else if (hour >= 12 && hour < 18) {

    console.log("Good afternoon");

} else {

    console.log("Good evening");
}

// Switch Case

let role = 'admin';

switch (role) {

    case 'guest':

        console.log("Welcome, guest!");
        break;

    case 'moderator':

        console.log("Hello, moderator!");
        break;
    
    case 'admin':

        console.log("Greetings, admin!");
        break;

    default:

        console.log("Role not recognized.");
        break;
}

// For Loop

for (let i = 0; i < 5; i++) {

    console.log(`Number ${i}`);

    if (i % 2 !== 0) {

        console.log("This is an odd number.");
    }
}

// While Loop

let i = 0;

while (i < 5) {

    if (i % 2 !== 0) {

        console.log(`Odd number: ${i}`);
    }

    i++;
}

// Do While Loop

let j = 0;

do {

    if (j % 2 === 0) {

        console.log(`Even number: ${j}`);
    }

    j++;

} while (j < 5);

// For in Loop

const person = {
    name: 'Alice',
    age: 30,
}

for (let key in person) {

    console.log(`${key}: ${person[key]}`);
}

// For of Loop

const colors = ['red', 'green', 'blue'];

for (let color of colors) {

    console.log(`Color: ${color}`);
}