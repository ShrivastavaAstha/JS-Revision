<<<<<<< HEAD
//print all odd number between 1 and 45 .
const n=45;
for(let i=1;i<=45;i++)
{
    if(i%2!=0){
        console.log(i);
    }
}
 
//print sum of all even numbers between 0 and 50 .
const m=50;
let sum=0;
for(let x=0;x<=m;x++)
{
    if(x%2==0){
        sum+=x;
    }
}
console.log(sum);

//Execution Time Of Code .

console.time("timer-1")
var a = 20
var b = 3
for(let i = b; i<a; i++)
{

}
=======
//print all odd number between 1 and 45 .
const n=45;
for(let i=1;i<=45;i++)
{
    if(i%2!=0){
        console.log(i);
    }
}
 
//print sum of all even numbers between 0 and 50 .
const m=50;
let sum=0;
for(let x=0;x<=m;x++)
{
    if(x%2==0){
        sum+=x;
    }
}
console.log(sum);

//Execution Time Of Code .

console.time("timer-1")
var a = 20
var b = 3
for(let i = b; i<a; i++)
{

}
>>>>>>> d5eee098d274689f2d04faecf52ceefe4d2aa18f
console.timeEnd("timer-1")