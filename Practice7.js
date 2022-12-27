//Create object using functions:
const object = (name, email, phonenumber, address, age) => {
  let newobject = {};
  newobject = {
    username: name,
    useremail: email,
    userphonenumber: phonenumber,
    useraddress: address,
    userage: age,
  };
  return newobject;
};
const form = object("astha", "@gmail", 9718386081, "gkp", 19);
console.log(form);
