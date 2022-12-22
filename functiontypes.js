//Functions are of two types on the basis of returning property
//1. Non returning functions , which just perform the task assigned and return nothing at the end
//2. Returning functions ,do the task assigned and also return the result

//Returning functions ends with the keyword "return data ;" which return the result,
//whereas non-returning doesn't return anything

//while calling returning functions, we need to store the returning value of the function in a variable,
//whereas, non-returning doesn't need such variable

//returning

const breakfast = () => {
  console.log("Breakfast is in progress");
  return "Breakfast prepared";
};
let a = breakfast();
console.log(a);
