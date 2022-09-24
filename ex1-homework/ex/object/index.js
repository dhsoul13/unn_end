export const objectES6 = () => {
  const person = {
    age: 26,
    name: "Георг",
    job: "Юморист",
    ["date" + Date.now()]: "1",
    toString: function () {
      return Object.keys(this);
    },
    valueOf: function () {
      return this;
    },
  };

  //object.is
  //object.assing - модификация объкта ({}, {a:5}, {b:5})
  //object.entries(obj): перевод object => ассоциативный массив
  //object.keys
  //object.values

  console.log(person.toString());
};
