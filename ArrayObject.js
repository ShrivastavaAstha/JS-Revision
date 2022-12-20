//Array is a datatype used to store multiple data of any datatype i.e. String,number,boolean etc.
//Array of an object is an array which holds objects as its values.

Models = [
  { name: "Astha", course: "Btech", college: "MMMUT", age: 19 },
  { name: "Astha 1", course: "Btech", college: "MMMUT", age: 19 },
  { name: "Astha 2", course: "Btech", college: "MMMUT", age: 19 },
  { name: "Astha 3", course: "Btech", college: "MMMUT", age: 19 },
  { name: "Astha 4", course: "Btech", college: "MMMUT", age: 19 },
  { name: "Astha 5", course: "Btech", college: "MMMUT", age: 19 },
  { name: "Astha 6", course: "Btech", college: "MMMUT", age: 19 },
  { name: "Astha 7", course: "Btech", college: "MMMUT", age: 19 },
  { name: "Astha 8", course: "Btech", college: "MMMUT", age: 19 },
];

//to access only name Astha 6:
console.log(Models[5].name);

//to update a particuar term:
for (let a of Models) {
  if (a.name === "Astha 4") {
    a.name = "Astha 9";
  }
}
console.log(Models);

//to update the particular term in all objects of array:
for (let a of Models) {
  a.age = 20;
}
console.log(Models);

//to add a new term in all objects of array:
for (let a of Models) {
  a.branch = "ECE";
}
console.log(Models);

//to add a new term only in a particular object of array:
for (let a of Models) {
  if (a.name === "Astha 1") {
    a.session = "2021-2025";
  }
}
console.log(Models);
