//Examples of argumentBasedfunction:

//Finding sum of two numbers :

const sum = (num1, num2) => {
  console.log("Num1 is", num1);
  console.log("Num2 is", num2);
  return `Sum is ${num1 + num2} `;
};

const a = sum(3, 2);
console.log(a);

console.log(" ");
//Finding difference of two numbers :

const difference = (num1, num2) => {
  console.log("Num1 is", num1);
  console.log("Num2 is", num2);
  return `Diffference is ${num1 - num2}`;
};

const b = difference(3, 2);
console.log(b);
