const createObject = (name, number) => {
  const newobject = {
    username: name,
    userphonenumber: number,
  };
  return newobject;
};

const abc = createObject("Astha", 452565634);
console.log(abc);

let name = "astha";
let phone = 4444414595;
let address = "affafa";
//const normalobject = { name: name, phone: phone, address: address };
const normalobject = { name, phone, address };

console.log(normalobject);

//In Modern JS, ES6, if in an object,the names of key and its value is same, then we need not to mention both.
