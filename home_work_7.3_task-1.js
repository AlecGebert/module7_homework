const objectKeys = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ: ${key}, значение: ${obj[key]}`);
    }
  }
};

const objExample = {
  name: "Joe",
  age: 56,
  gun: "Beringer",
};

objectKeys(objExample);
