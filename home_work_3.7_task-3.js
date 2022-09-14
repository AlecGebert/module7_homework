const emptyObj = () => Object.create(null);
const emptyOne = emptyObj();

console.log(emptyOne);
console.log(Object.getPrototypeOf(emptyOne));
