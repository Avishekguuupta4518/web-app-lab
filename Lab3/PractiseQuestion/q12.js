// Loop through object properties using for...in.

const student = {
  name: "Avishek",
  age: 21,
  course: "JavaScript Lab"
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}