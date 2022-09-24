export const mapAndSet = () => {
  //map  это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

  //   Методы и свойства:

  // new Map() – создаёт коллекцию.
  // map.set(key, value) – записывает по ключу key значение value.
  // map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
  // map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
  // map.delete(key) – удаляет элемент по ключу key.
  // map.clear() – очищает коллекцию от всех элементов.
  // map.size – возвращает текущее количество элементов.

  //   map.keys() – возвращает итерируемый объект по ключам,
  //   map.values() – возвращает итерируемый объект по значениям,
  //   map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

  const map = new Map();
  map.set({ name: "daniil" }, 1);
  map.set({ name: "alex" }, 2);

  console.log();
  const mas = map.entries();

  for (let key of mas) {
    console.log(key[0], key[1]);
  }

  //   кроме этого, Map имеет встроенный метод forEach, схожий со встроенным методом массивов Array

  map.forEach((el, key) => console.log(el, key));

  let map2 = new Map([
    [1, "num1"],
    [true, "bool1"],
  ]);

  let obj = {
    name: "John",
    age: 30,
  };

  console.log(new Map(Object.entries(obj)));

  //   const set = new Set([1, 1, 2, 3, 5, 8, 13]);
  //   console.log(set);

  //   Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
  //   new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
  // set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
  // set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
  // set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
  // set.clear() – удаляет все имеющиеся значения.
  // set.size – возвращает количество элементов в множестве.
  const set = new Set();
  const person = {
    name: "",
    mesto: "Resturan DDD",
  };
  person.name = "Dannil";
  set.add(person);
  set.add({ ...person, name: "Kirill" });
  console.log("set", set);
};
