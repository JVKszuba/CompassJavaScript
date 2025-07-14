// Arithmetic operators:

let x = 10;
let y = 3;

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Exponentiation:", x ** y);

// Increment and Decrement

console.log("Increment x:", ++x);
console.log("Decrement x:", x++);

console.log("Decrement y:", --y);
console.log("Increment y:", y--);

// Assignment operators:

let z = 10;

z = z + 5; // Addition assignment
z += 5; // Same as above

z = z * 3; // Multiplication assignment
z *= 3; // Same as above

// Comparison operators:

let a = 1;

// Relational
console.log("Greater than:", a > 0);
console.log("Greater than or equal to:", a >= 1);
console.log("Less than:", a < 1);
console.log("Less than or equal to:", a <= 1);

// Equality
console.log("Equal to:", a == 1);
console.log("Not equal to:", a != '2');
console.log("Strictly equal to:", a === 1);
console.log("Strictly not equal to:", a !== '1');

// Ternary operator:

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log("Type:", type);

// Logical operators:

let b = true;
let c = false;

console.log("Logical AND:", b && c);
console.log("Logical OR:", b || c);
console.log("Logical NOT:", !b);

// Non-Boolean

// Falsy values:
// 0, "", null, undefined, NaN, false

console.log("Non-Boolean AND:", 1 && 0);
console.log("Non-Boolean OR:", 1 || 0);
console.log("Non-Boolean NOT:", !1);

// Bitwise operators:

console.log("Bitwise AND:", 5 & 3); // 0101 & 0011 = 0001
console.log("Bitwise OR:", 5 | 3); // 0101 | 0011 = 0111
console.log("Bitwise XOR:", 5 ^ 3); // 0101 ^ 0011 = 0110
console.log("Bitwise NOT:", ~5); // ~0101 = 1010 (inverts bits)
console.log("Left Shift:", 5 << 1); // 0101 << 1
console.log("Right Shift:", 5 >> 1); // 0101 >> 1



