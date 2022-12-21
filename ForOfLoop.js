//For Of Loop :-
//It is a special kind of for loop which is used specially in case of array or similar data types.

const arr = [
  "Post1",
  "Post2",
  "Post3",
  "Post4",
  "Post5",
  "Post6",
  "Post7",
  "Post8",
];
//for loop :
for (i = 0; i < arr.length; i++) {
  if (arr[i] === "Post2") {
    continue;
  }
  console.log(arr[i]);
}
console.log(" ");

//for of loop :
for (let candidate of arr) {
  if (candidate === "Post2") {
    continue;
  }
  console.log(candidate, "of for of loop");
}
console.log(" ");

//array mapping
arr.map((candidate) => {
  console.log(candidate, "of mapping");
});
console.log(" ");

//array find
const findedpost = arr.find((candidate) => {
  return candidate === "Post4";
});
