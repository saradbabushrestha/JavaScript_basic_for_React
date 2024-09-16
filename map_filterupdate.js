let names = ["sarad", "saram", "samrat"];
names.map((name) => {
  return name + "1";
});
console.log(names);
names.map((name) => {
  return <h1>{name}</h1>;
});

let namess = ["sarad", "saram", "samrat", "Sarad", "sarthak"];

namess.filter((name) => {
  return name != "sarad";
});
