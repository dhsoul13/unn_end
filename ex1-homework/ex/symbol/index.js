export const symbolES6 = () => {
  const age = Symbol("age");
  const person = {
    [age]: 1313,
    age: 323,
    name: "313",
  };

  console.log(person.age);
  console.log(Object.keys(person));

  for (let key in person) {
    console.log(key);
  }
};
