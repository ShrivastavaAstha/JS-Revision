//importing statement where file is to be imported.

const { intfunc, intfuncsub } = require("./file");

const sum = intfunc(2, 4);
console.log(sum);
const diff = intfuncsub(2, 4);
console.log(diff);
