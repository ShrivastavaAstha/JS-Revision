for (let i=1; i<50; i=i*3){
    console.log(i);
}

for (let i=1; i<50; i=i+5){
    console.log(i);
}

//Iteration means one cycle of for loop before update of i

//Break Statement :-
//-----> it instantly terminates the for loop and come outside of it.

for (let i=1; i<1024; i=i*4){
    if (i === 256) {
        break;
    }
    console.log(i);
}

//Continue Statement :-
//-----> it only terminates the indicated iteration and move to the next iteration , it does not
//       terminates the whole loop like break.

for(i=0; i<100; i= i+5){
    if (i === 75){
        continue;
    }
    console.log(i);
}