var numbers = [2, 6, 10, 14, 18];

//Map -Create a new array by doing something with each item in an array. 
const newNumbers1 = numbers.map(num => num * 2);
console.log(newNumbers1);

//Filter - Create a new array by keeping the items that return true. 
const newNumbers2 = numbers.filter(num => num > 6);
console.log(newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumbers3 = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
console.log(newNumbers3);

//Find - find the first item that matches from an array.
const newNumbers4 = numbers.find(num => num > 6);
console.log(newNumbers4);

//FindIndex - find the index of the first item that matches.
const newNumbers5 = numbers.findIndex(num => num > 6);
console.log(newNumbers5);

// using these 5 types of methods(or functions) helps us to minimize the effort of writing the code using "foreach + push" method.