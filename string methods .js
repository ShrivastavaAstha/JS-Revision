//------>slice FUNCTION :

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
let slice = text.slice(7, 13); //7th letter is  included but 13th letter is not included.
let part = text.slice(7); //It will slice out rest of the string.
let cut = text.slice(-12); //It counts from the end of the string.
let lice = text.slice(-12, -6); //slicing from position -12 to -6.
console.log(length);
console.log(slice);
console.log(part);
console.log(cut);
console.log(lice);

//------>substring FUNCTION :

let sub = text.substring(7, 13);
console.log(sub); // If the start > stop , then the function swaps both arguments while in slice() ,
// if start > stop, the function returns an empty string .

//------>substr FUNCTION :

let str = text.substr(7, 6); //second parameter specifies the length of the extracted part.
console.log(str);

//------>replace FUNCTION :

let newtext = text.replace("AB", "ab");
console.log(newtext);
//let ab = text.replaceAll("BCDEF","bcdef")
//console.log(ab);

//------>concat FUNCTION :

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat("", text2);
console.log(text3);

//------>trim FUNCTION :

let text4 = "       Hello World!           "; //removes whitespace from both sides of a string.
let text5 = text4.trim();
console.log(text5);

//------->trimStart FUNCTION :

let text6 = text4.trimStart();
console.log(text6);

//------->trimEnd FUNCTION :

let text7 = text4.trimEnd();
console.log(text7);

//------>padStart FUNCTION :

let txt = "5";
let padded = txt.padStart(4, "0");
console.log(padded);

//------>padEnd FUNCTION :

let paded = txt.padEnd(4, "0");
console.log(paded);

//------>charAt FUNCTION :
let word = "HELLO WORLD";
let char = word.charAt(0); //returns character at a specified index in a string.
console.log(char);

//------>charCodeAt FUNCTION :
let charcode = word.charCodeAt(0);
console.log(charcode); //returns a UTF-16 code.

//------>[] PROPERTY ACCESS FUNCTION :
let acc = word[0];
console.log(acc);

//------>split FUNCTION :
let split = word.split(" ");
console.log(split);
