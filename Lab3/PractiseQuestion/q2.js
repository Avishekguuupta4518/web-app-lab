// Write a program to calculate the factorial of a number using:
// for loop  while loop

// Factorial using for loop

// const n = 5; 
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }

// console.log("Factorial using for loop:", fact);

// Factorial using while loop

const n = 5; 
let fact = 1;
let i = 1;

while (i <= n) {
  fact = fact * i;
  i++;
}

console.log("Factorial using while loop:", fact);