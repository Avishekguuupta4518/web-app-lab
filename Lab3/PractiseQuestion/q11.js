// Sort an array of objects based on age or marks.

const students = [
  { name: "Avishek", age: 21, marks: 85 },
  { name: "Riya", age: 19, marks: 92 },
  { name: "Samir", age: 22, marks: 78 },
  { name: "Anya", age: 20, marks: 90 }
];

// Sort by age (ascending)
const sortByAge = [...students].sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sortByAge);

// Sort by marks (descending)
const sortByMarks = [...students].sort((a, b) => b.marks - a.marks);
console.log("Sorted by marks:", sortByMarks);