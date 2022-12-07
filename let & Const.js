//variables are containers which are used to store data .
//variables are initalized with two types of declarations:
//1. let => let is used whendata needs to be updated in future.
//2. const => when data have to kept constant.
//In other languages declarations depends on type of data we are using.
//for e.g. in c++, we use int for storing integer, string for storing string values bool for storing boolean
//but in Javascript you can use same declaration(let/const) for every data type

//use of let (when data will be updated)
// let a = 10;
// a = 15;
// console.log(a);

//use of const (when data have to be constant)
// const a = 10;
// a=15;
// console.log(a);

//in other languages , declaration depends on datatypes:
//int a = 10;
// string a ="Astha"
// boolean a = true;

//in js ,we can use let/const foreach kind of data
let a = 10;                         //number  
let b = "Astha";                    //string
let c = true;                       //boolean
let d = [1,2,3,4,5]                 //array
let e = {a:"Astha"};                //object
console.log("let declarations for each datatype");
console.log(a,"number");
console.log(b, "string");
console.log(c,"boolean");
console.log(d,"array");
console.log(e, "object");

console.log("const declarations for each datatype");
const f = 10;                 //number
const g = "Astha";            //string
const h = true;               //boolean
const i = [1,2,3,4,5];        //array
const j = {a: "Astha"};       //object
console.log(f, "number");
console.log(g, "string");
console.log(h, "boolean");
console.log(i, "array");
console.log(j, "object");




