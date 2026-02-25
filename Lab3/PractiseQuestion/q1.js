// Write an arrow function to calculate the sum of all elements in an array.

const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);
const numbers = [10, 20, 30, 40];
console.log(sumArray(numbers)); 