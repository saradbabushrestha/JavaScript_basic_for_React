let age = 17;
let isOfage = false;
if (age < 18) {
  isOfage = true;
} else {
  isOfage = false;
}
console.log(isOfage);
// this is very log for a simple comparison so we can use ternary opeator
isOfage = age < 18 ? true : false;
console.log(isOfage);

let colour = "green";
let isCorrect = false;

colour = isCorrect = true ? "red" : "green";
console.log(colour);
//or hamilai yedi yeti lamo ternary ni lekna cahaina bane chai we can do like
colour = isCorrect && "red";
console.log(colour);
//another example
let umer = 17;
let name = umer < 18 ? "Sarad" : "Sujan";

const component = () => {
  return <div>{umer < 18 ? <div>Sarad</div> : <div>Sujan</div>}</div>;
};
