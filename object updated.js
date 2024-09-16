const person = {
  name: "Sarad",
  age: 21,
  isMarried: false,
};
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;
// yo sabai single line ma garna milxa by using destuctor
const { name, age, isMarried } = person;

//arko way chai
const namee = "Saman";
const agee = 18;
const person1 = {
  namee,
  agee,
  isMarried: false,
};
//another useful way
const person2 = { ...person, name: "Sarthak" };
//arko use chai
const person3 = ["shyam", "hari", "tulu"];
const person4 = [...person3, "sulu", "lulu"];
