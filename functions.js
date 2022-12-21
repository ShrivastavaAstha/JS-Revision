//Whenever we see a set of codes getting repeated or needed continuously then we define a function , which
//contains that repeated codes inside it. Now whenever we want that codes we call that function and get those codes

//without functions
//student 1
console.log("Academic records of student 1");
console.log("co_curricular records of student 1");
console.log("Physical activity records of student 1");
console.log("Discipline records of student 1");

//student 2
console.log("Academic records of student 2");
console.log("co_curricular records of student 2");
console.log("Physical activity records of student 2");
console.log("Discipline records of student 2");

//student 3
console.log("Academic records of student 3");
console.log("co_curricular records of student 3");
console.log("Physical activity records of student 3");
console.log("Discipline records of student 3");

//with functions (fat arrow)
const academicrecords = () => {
  console.log("Academic records of student ");
};

const co_curricular = () => {
  console.log("co_curricular records of student ");
};

const physical_activity = () => {
  console.log("Physical activity records of student ");
};

const discipline = () => {
  console.log("Discipline records of student ");
};

//student 1
academicrecords();
co_curricular();
physical_activity();
discipline();
console.log("Records of student 1");

//student 2
academicrecords();
co_curricular();
physical_activity();
discipline();
console.log("Records of student 2");

//student 3
academicrecords();
co_curricular();
physical_activity();
discipline();
console.log("Records of student 3");
