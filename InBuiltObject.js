// In Build methods are such function/object which are already defined in Javascript.

// Date object returns date in UTC format which is accepted globally
const currdate = new Date();
console.log(currdate); //returns date in utc format

const currtimezoneTime = new Date().toString();
console.log(currtimezoneTime); //returns date and time  in local timezone

const currtimezoneDate = new Date().toDateString();
console.log(currtimezoneDate); //returns only date

const currtimezonetym = new Date().toTimeString();
console.log(currtimezonetym); //returns only time
