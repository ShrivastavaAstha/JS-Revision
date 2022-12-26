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

//Finding product of two numbers :

const product = (num1, num2) => {
  console.log("Num1 is", num1);
  console.log("Num2 is", num2);
  return `product is ${num1 * num2}`;
};

const c = product(3, 2);
console.log(c);

//Finding division of two numbers :

const division = (num1, num2) => {
  console.log("Num1 is", num1);
  console.log("Num2 is", num2);
  return `division is ${num1 / num2}`;
};

const d = division(3, 2);
console.log(d);

//Finding all algo in single program:

const func = (x, y, type) => {
  if (type === "add") {
    return x + y;
  } else if (type === "sub") {
    return x - y;
  } else if (type === "mul") {
    return x * y;
  } else if (type === "div") {
    return x / y;
  }
};
console.log(func(2, 3, "add"));
console.log(func(2, 3, "sub"));
console.log(func(2, 3, "mul"));
console.log(func(2, 3, "div"));
