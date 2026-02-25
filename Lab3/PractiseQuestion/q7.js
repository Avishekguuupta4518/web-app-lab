// Write a function using rest parameters that accepts any number of arguments and returns their product.


const multiplyAll = (...numbers) => {
  let product = 1;
  for (let num of numbers) {
    product *= num;
  }
  return product;
};

console.log(multiplyAll(2, 3, 4));    
console.log(multiplyAll(5, 10));     
console.log(multiplyAll(1, 2, 3, 4)); 