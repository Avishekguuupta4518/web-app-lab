// Show the difference between var, let and const inside a loop.

const a = 100;   // block-scoped, cannot be reassigned
let b = 100;     // block-scoped, can be reassigned
var c = 100;     // function-scoped, can be reassigned

for (let i = 1; i <= 3; i++) {
  // a = a + i;   // Error: const cannot be reassigned
  b = b + i;     // allowed
  c = c + i;     // allowed
}

console.log(`Const a: ${a}`);
console.log(`Let b: ${b}`);
console.log(`Var c: ${c}`);