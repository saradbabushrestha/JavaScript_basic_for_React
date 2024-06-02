
//objects
const person ={
    name: "Sarad",
    age: "20",
    isMarried: false,
};

// const name= person.name
// const age = person.age
// const is isMarried= person.isMarried
const {name ,  age , isMarried} = person;
const person2 = {...person, name : "Ram"};



const names = [ "Sarad", "Ram" , "Jack"];
const names2 = [...names , "Sita"];