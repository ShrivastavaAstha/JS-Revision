//program to find highest number in the list:

let a = [10, 12, 15, 20, 30, 50, 100, 300, 360, 150];
let b = -Infinity;
for (i = 0; i < a.length; i++) {
  if (a[i] > b) {
    b = a[i];
  }
}
console.log(b);

//program to find lowest number in the list:

let lowest = Infinity;
for (i = 0; i < a.length; i++) {
  if (a[i] < lowest) {
    lowest = a[i];
  }
}
console.log(lowest);
