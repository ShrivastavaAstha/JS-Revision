//Program to display the sum of n natural numbers
let sum = 0;
const n = 100;

//looping from i = n to 1.
//in each iteration, i is decreased by 1.

for(let i = n; i >= 1; i--){
    // adding i to sum in each iteration
    sum += i; //sum = sum + 1
}

console.log('Sum of natural numbers from 1 to 100:' ,sum);