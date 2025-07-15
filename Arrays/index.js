// Arrays are a collection of items
// They can be of any type, including other arrays

let numbers = [3, 4];
console.log(numbers);

// Adding items to an array:
// Using push to add an item to the end

numbers.push(5);
console.log(numbers);

// Using unshift to add an item to the beginning

numbers.unshift(2);
console.log(numbers);

// Using splice to add an item at a specific index

numbers.splice(2, 0, 3.5);
console.log(numbers);

// Finding items in an array:
// Using indexOf to find the index of an item

const index = numbers.indexOf(3);
console.log(index);

// If the item is not found, indexOf returns -1
const notFoundIndex = numbers.indexOf(10);
console.log(notFoundIndex);

// Always return the last index of the item if it appears multiple times
const lastIndex = [3, 3, 4, 2, 3].lastIndexOf(3);
console.log(lastIndex);

// Using includes to check if an item exists in the array

const exists = numbers.includes(4);
console.log(exists);

// Using find to get the first item that matches a condition

const firstGreaterThanThree = numbers.find(function (item) {return item > 3; });
console.log(firstGreaterThanThree);

// Using findIndex to get the index of the first item that matches a condition

const firstGreaterThanThreeIndex = numbers.findIndex(item => item > 3);
console.log(firstGreaterThanThreeIndex);

// Removing items from an array:
// Using pop to remove the last item

const lastItem = numbers.pop();
console.log(numbers);
console.log(lastItem);

// Using shift to remove the first item

const firstItem = numbers.shift();
console.log(numbers);
console.log(firstItem);

// Using splice to remove an item at a specific index

const removedItem = numbers.splice(1, 1);
console.log(numbers);
console.log(removedItem);

// Emptying an array:
// Assigning an empty array

numbers = [1, 2, 3, 4, 5];

numbers = [];
console.log(numbers);

// Setting the length to 0

numbers = [1, 2, 3, 4, 5];

numbers.length = 0;
console.log(numbers);

// Using splice to remove all items

numbers = [1, 2, 3, 4, 5];

numbers.splice(0, numbers.length);
console.log(numbers);

// Using a while loop to remove items until the array is empty

numbers = [1, 2, 3, 4, 5];

while (numbers.length > 0) numbers.pop(); 
console.log(numbers);

// Combining arrays:
// Using concat to combine arrays

const firstArray = [1, 2];
const secondArray = [3, 4];

const combinedArray = firstArray.concat(secondArray);
console.log(combinedArray);

// Using spread operator to combine arrays

const spreadCombinedArray = [...firstArray, ...secondArray];
console.log(spreadCombinedArray);

// Slicing arrays:
// Using slice to get a portion of an array

const slicedArray = combinedArray.slice(1, 3);
console.log(slicedArray);

// Using slice to get a portion of an array from the end

const slicedFromEnd = combinedArray.slice(-2);
console.log(slicedFromEnd);

// Iterating over arrays:
// Using for of loop to iterate over each item

numbers = [1, 2, 3, 4, 5];

for (const item of numbers) console.log(item);

// Using forEach to iterate over each item

numbers.forEach((item, index) => console.log(index, item));

// Joining arrays:
// Using join to create a string from an array

const joinedString = numbers.join(', ');
console.log(joinedString);

// Sorting arrays:
// Using sort to sort an array of numbers

const unsortedNumbers = [2, 3, 1];

unsortedNumbers.sort();
console.log(unsortedNumbers);

// Using sort with a custom comparator function

unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers);

// Using reverse to reverse the order of an array

const reversedNumbers = unsortedNumbers.reverse();
console.log(reversedNumbers);

// Testing arrays:
// Using every to check if all items match a condition

const allPositive = numbers.every(item => item > 0);
console.log(allPositive);

const allBiggerThan2 = numbers.every(item => item > 2);
console.log(allBiggerThan2);

// Using some to check if at least one item matches a condition

const anyBiggerThan2 = numbers.some(item => item > 2);
console.log(anyBiggerThan2);

// Filtering arrays:
// Using filter to create a new array with items that match a condition

const filteredArray = numbers.filter(item => item > 2);
console.log(filteredArray);

// Mapping arrays:
// Using map to create a new array with transformed items

const mappedArray = numbers.map(item => item * 2);
console.log(mappedArray);

const mappedObjects = numbers.map(item => ({ value: item }));
console.log(mappedObjects);

// Reducing arrays:
// Using reduce to accumulate a single value from an array

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);