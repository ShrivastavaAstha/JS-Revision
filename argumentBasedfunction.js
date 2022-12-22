// non-argument based function
// non-argument based function does not require any input when called

// const breakfast = () => {
//   console.log("breakfast is in progress");
//   return "breakfast completed";
// };

// argument based function
// number of arguments can be passed while calling the function, but the calling arguments must be predefined in
// functions

//example 1:

const breakfast = (element) => {
  console.log(element, "is in progress");
  return `${element} completed`;
};
const bread = breakfast("Bread");
console.log(bread);

const butter = breakfast("Butter");
console.log(butter);

console.log(" ");

//example 2:

const subject = (element) => {
  console.log(element, "is started");
  return `${element} completed`;
};
const phy = subject("Physics");
console.log(phy);

const maths = subject("Mathematics");
console.log(maths);

const che = subject("Chemistry");
console.log(che);
