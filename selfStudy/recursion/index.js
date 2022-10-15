export const recursion = () => {
  /// Example 1
  //   let t = 0;
  //   const foo = (text) => {
  //     if (t === 2) return '';
  //     t++;
  //     console.log(text);
  //     return foo(text);
  //   };
  //   console.log(foo('Hello'));
  /// Example 2
  //   let count = '';
  //   let i = 0;
  //   const foo = (n) => {
  //     if (i === n) return count;
  //     count = `${count} + ${i}`;
  //     i++;
  //     return foo(n);
  //   };
  //   console.log(foo(5));
  /// Example 3
  //   function getRandomInRange(min, max) {
  //     return Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  //   let sum = 0;
  //   const moneyRecursionBOMZ = (n) => {
  //     if (sum > n) return 'Пора купить водку';
  //     const add = getRandomInRange(1, 100);
  //     sum = sum + add;
  //     console.log({
  //       sum,
  //       add,
  //     });
  //     return moneyRecursionBOMZ(n);
  //   };
  //   console.log(moneyRecursionBOMZ(100));
  /// Example 4
  //   const obj = {
  //     person: {
  //       name: 'Даниил',
  //       family: {
  //         father: {
  //           name: 'Игорь',
  //         },
  //         mother: {
  //           name: 'Ann',
  //         },
  //       },
  //     },
  //   };
  //   function getFiniteValue(obj) {
  //     getProp(obj);
  //     function getProp(o) {
  //       for (var prop in o) {
  //         if (typeof o[prop] === 'object') {
  //           getProp(o[prop]);
  //         } else {
  //           if (prop === 'name') {
  //             console.log('Finite value: ', o[prop]);
  //           }
  //         }
  //       }
  //     }
  //   }
  //   getFiniteValue(obj);
  ///1 Элементарный
  //   let i = 0;
  //   const foo = (n) => {
  //     if (i > 10) return 'done';
  //     console.log(i, 'Hello');
  //     i++;
  //     return foo(n);
  //   };
  //   foo(10);
  /// 2  Заполнение массива
  //   const addMas = (mas = [], length = 2) => {
  //     if (mas.length === length) {
  //       console.log(mas);
  //     } else {
  //       mas.push(1);
  //       addMas(mas, length);
  //     }
  //   };
  //   console.log(addMas());
  //   const foo = (arr) => {
  //     console.log(arr);
  //     if (arr.length === 0) return 0;
  //     return arr.pop() + foo(arr);
  //   };
  //   console.log(foo([1, 2, 3]));
  //   const mas = [1, 2, [3, [4, 5]]];
  //   const foo = (arr) => {
  //     for (let i in arr) {
  //       if (typeof arr[i] === 'object') {
  //         foo(arr[i]);
  //       } else {
  //         arr[i] = `${arr[i] > 2 ? true : false}`;
  //       }
  //     }
  //   };
  //   foo(mas);
  //   console.log(mas);


  
};
