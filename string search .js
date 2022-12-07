//------>indexOf() FUNCTION :
let str = "Please locate where 'locate' occurs!";
let tr = str.indexOf("locate");                       //returns the first occurrence of a string in a string.
console.log(tr);

//------>lastIndexOf() FUNCTION :
let text = "Please locate where 'locate' occurs!";
let xt = text.lastIndexOf("locate");                  //returns the index of the last occurrence of a specified text in a string.
console.log(xt);
let p = text.lastIndexOf("John");
console.log(p);                                       //returns -1 if text is not found.
let q = text.lastIndexOf("locate", 15);
console.log(q);

//------>search() FUNCTION :
let search = text.search("locate");
console.log(search);

//------>match() FUNCTION :
let para = "The rain in SPAIN stays mainly in the plain";
let r = para.match("ain");
console.log(r);

//------>includes() FUNCTION :
let a = "Hello world, welcome to the universe.";
let b = a.includes("world");
console.log(b);

//------>startsWith() FUNCTION :
let c = a.startsWith("Hello");
console.log(c);

//------>endsWith() FUNCTION :
let d = a.endsWith("the");
console.log(d);
