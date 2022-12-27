//Find ap using functions:
const ap = (a, d, n) => {
  let arr = [];
  let counter = 0;
  for (let i = a; counter < n; i = i + d) {
    arr.push(i);
    counter = counter + 1;
  }

  return arr;
};
const even = ap(2, 5, 9);
console.log(even);

//Find gp using functions:
const gp = (a, r, n) => {
  let arrr = [];
  let z = 0;
  for (let i = a; z < n; i = i * r) {
    arrr.push(i);
    z = z + 1;
  }
  return arrr;
};
const ans = gp(1, 2, 5);
console.log(ans);
