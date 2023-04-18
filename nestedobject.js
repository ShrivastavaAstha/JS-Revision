//nested object is an object  in which one of the value of any key is again an object.
const info = [
  {
    name: "Astha",
    class: 10,
    school: "BVP",
    address: {
      state: "Bihar",
      district: "Saran",
    },
  },
  {
    name: "Astha",
    class: 10,
    school: "BVP",
    address: {
      state: "Bihar",
      district: "Saran",
    },
  },
  {
    name: "Astha",
    class: 10,
    school: "BVP",
    address: {
      state: "Bihar",
      district: "Saran",
    },
  },
  {
    name: "Astha",
    class: 10,
    school: "BVP",
    address: {
      state: "Bihar",
      district: "Saran",
    },
  },
  {
    name: "Astha",
    class: 10,
    school: "BVP",
    address: {
      state: "Bihar",
      district: "Saran",
    },
  },
  {
    name: "Astha",
    class: 10,
    school: "BVP",
    address: {
      state: "Bihar",
      district: "Saran",
    },
  },
];

for (let candidate of info) {
  console.log(candidate.address.district);
}
