//map, filter
const names = ["Sarad", "Ram", "Jack"];

names.map((name) => {
  return name + "1";
});
names.map((name) => {
  return <h1>{name}</h1>;
});

const namess = ["Sarad", "Ram", "Jack", "Sarad", "Sarad"];

namess.filter((name) => {
  return name !== "Sarad";
});
