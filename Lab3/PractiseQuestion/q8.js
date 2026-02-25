// Copy an object using the spread operator and modify one property.

const originalPerson = {
  name: "Avishek",
  age: 21,
  course: "JavaScript Lab"
};

const updatedPerson = {
  ...originalPerson,
  age: 22  
};

console.log("Original:", originalPerson);
console.log("Updated:", updatedPerson);