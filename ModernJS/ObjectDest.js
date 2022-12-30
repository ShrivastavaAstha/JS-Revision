// Object Destruction :

const obj = {
  name: "Astha",
  age: 19,
  school: "BVP",
};

//in normal JS ,to get values:
// let name = obj.name;
// let age = obj.age;
// let school = obj.school;
// console.log(name);
// console.log(age);
// console.log(school);

//in modern JS ,to get values:
let { name, age, school } = obj;
console.log(name);
console.log(age);
console.log(school);
