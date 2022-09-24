import { it } from "node:test";

export const generatorES6 = () => {
  /// iterator
  const array = [1, 2, 3, 4];

  const a = array[Symbol.iterator]();
  console.log(a.next());
  console.log(a.next());
  console.log(a.next());
  console.log(a.next());

  /// for ... of у всех у кого есть итератор

  for (let item of array) {
    console.log(item);
  }

  /// obj

  const country = {
    values: ["ru", "es", "br"],
    [Symbol.iterator]() {
      let i = 0;
      return {
        next: () => {
          const value = this.values[i];
          i++;
          return {
            done: i > this.values.length,
            value,
          };
        },
      };
    },
  };

  for (let item of country) {
    console.log(item);
  }

  /// generator - порционо выводить данные

  function* gen(n) {}
};
