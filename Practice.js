//AP till 10 terms:
let x = 1;
for (i = 1; i <= 10; i++) {
  x = x + 5;
  console.log(x);
}

//GP till 10 terms:
let a = 1;
for (i = 1; i <= 10; i++) {
  a = a * 3;
  console.log(a);
}

//sum of ap:
let firstterm = 1;
let sum = 0;
for (let i = 1; i < 5; i++) {
  sum = sum + firstterm;
  firstterm = firstterm + 5;
  console.log(firstterm);
  console.log(sum);
}

// example:
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
  console.log("");
}

//sum of odd numbers
const l = 50;
let s = 0;
for (i = 0; i <= 50; i++) {
  if (i % 2 !== 0) {
    s += i;
  }
}
console.log(s);
