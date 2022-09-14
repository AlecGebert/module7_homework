function isProp(obj, str) {
  return str in obj;
}
const objBeast = {
  name: "Alien",
  power: 78,
  type: "mesomorphe",
};

console.log(isProp(objBeast, "power"));
