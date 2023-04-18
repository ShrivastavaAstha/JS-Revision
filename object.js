const task = {
  name: "Astha",
  class: "Btech",
  branch: "ECE",
  address: "Gorakhpur",
  "college name": "MMMUT",
};
//first way to print object:
console.log(task["name"]);
console.log(task["branch"]);
console.log(task["college name"]);

//second way to print object:
console.log(task.class);
console.log(task.address);

//to get all the keys of an object
const objectkeys = Object.keys(task);
console.log(objectkeys);

//key should never have
//spaces between them and
//should not start with any number or special characters
//if it has spaces, then key should be enclosed within ""(string form)
//and can only be printed by first way.
