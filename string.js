// double quotes or single quotes both can be used.
// let a = '1';
// let b = "2";
// let c = "'3'";
// console.log(a,b,c);

let text = "We are the so-called "//Vikings" from the north."; //the string will be chopped from the first closing inverted comma or throw error.
console.log(text);

let text1 = "We are the so-called \" Vikings\" from the north."; 
console.log(text1);


//for new line:
let a = "Everything happens for a good reason , \n keep faith on yourself and almighty!";
console.log(a);


//for carriage return:
let b = "Everything happens for a good reason , \r keep faith on yourself and almighty!";
console.log(b);


//for horizontal tabulator
let c = "Everything happens for a good reason , \t keep faith on yourself and almighty!";
console.log(c);


//for vertical tabulator:
let d = "Everything happens for a good reason , \v keep faith on yourself and almighty!";
console.log(d);


//for backspace:
let e = "Everything happens for a good reason , \b keep faith on yourself and almighty!";
console.log(e);


//for form feed:
let f = "Everything happens for a good reason , \f keep faith on yourself and almighty!";
console.log(f);

//strings can also be defined as objects with the keyword new:
let x = "ASTHA";
let y = new String("ASTHA");
let z = (x==y);
let w = (x===y);
console.log(x,y,z,w);

