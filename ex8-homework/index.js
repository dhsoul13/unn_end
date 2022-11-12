//1 Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
const arr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const arrNum = [2, 3, 5, 7, 11, 13, 17, 19, 1, 3, 0];

//1

// const strMasFromElemMas = (arr) => arr.map((el) => el.length);

//2

// const strMasFromElemMas = (arr) => {
//   try {
//     if (Array.isArray(arr)) {
//       return arr.map((el) => el.length);
//     } else {
//       throw new Error('Ошибка не тот тип данных');
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(strMasFromElemMas(arr));

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const currentSums = (numbers) => {
//   try {
//     if (Array.isArray(numbers)) {
//       return numbers.reduce((acc, el, index) => {
//         if (index === 0) {
//           acc.push(el);
//           return acc;
//         }
//         const sum = acc.reduce((acc1, el1) => acc1 + el1, 0) + el;
//         acc.push(sum);
//         return acc;
//       }, []);
//     } else {
//       throw new Error('Должен быть массив');
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(currentSums(arrNum));

//Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const coupleSumSevent = (numbers) => {
//   try {
//     if (Array.isArray(numbers)) {
//       const sendNewArray = [];
//       numbers.forEach((el, index, array) => {
//         array.forEach((elem) => {
//           if (elem + el === 7) {
//             sendNewArray.push(`(${elem}:${el})`);
//           }
//         });
//       });

//       return sendNewArray.slice(0, Math.floor(sendNewArray.length - 1 / 2));
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(coupleSumSevent(arrNum));

//Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

// const strMas = ({ str }) => {
//   try {
//     if (typeof str === 'string') {
//       return str.match(/[\w\p{sc=Cyrillic}]+/gu).map((el) => el[0]);
//     } else {
//       throw new Error('Нужен массив');
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(
//   strMas({
//     str: 'адыоадылаал ыдл ыадаыла ыдоафлаола ваыло волаовыа ы',
//   })
// );

//Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// const str = 'Привет';

// const currentSumStr = (str) => {
//   try {
//     if (typeof str === 'string') {
//       return str.split('').reduce((acc, el, index, array) => {
//         if (index === 0) {
//           acc.push(el + array[index + 1]);
//           return acc;
//         }
//         if (index === array.length - 1) {
//           acc.push(array[index - 1] + el);
//           return acc;
//         }
//         acc.push(array[index - 1] + el + array[index + 1]);
//         return acc;
//       }, []);
//     } else {
//       throw new Error('Ошибка не тот тип данных');
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(currentSumStr(str));

//Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const sortMas = (numbers) => {
//   try {
//     return numbers.sort((a, b) => b - a);
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(sortMas(arrNum));

//Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// const concatThreeMas = (mas1, mas2, mas3) => {
//   try {
//     if (Array.isArray(mas1) && Array.isArray(mas2) && Array.isArray(mas3)) {
//       return new Array(...mas1, ...mas2, ...mas3)
//         .sort((a, b) => a - b)
//         .join(' ');
//     } else {
//       throw new Error('Новый массив');
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(concatThreeMas([331, 424], [24, 242], [36656, 543, 23]));

///Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const masOther = [[1, 2, 3], [4, 5], [6]];

// const sumMas = (mas, total) => {
//   try {
//     let sum = 0;
//     for (let i = 0; mas.length > i; i++) {
//       if (Array.isArray(mas[i])) {
//         sum = sum + sumMas(mas[i]);
//       } else {
//         sum += mas[i];
//       }
//     }
//     return sum;
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(sumMas(masOther));

///Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const reverse = (mas) => {
//   try {
//     if (Array.isArray(mas)) {
//       return mas.reverse();
//     } else {
//       throw new Error('Ошибка типа');
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(reverse(arrNum));

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const countTenNumbes = (arr) => {
//   try {
//     if (Array.isArray(arr)) {
//       return arr.reduce(
//         (acc, el) => {
//           if (acc.sum <= 10) {
//             return {
//               sum: acc.sum + el,
//               count: acc.count + 1,
//             };
//           }

//           return {
//             ...acc,
//           };
//         },
//         {
//           count: 0,
//           sum: 0,
//         }
//       );
//     } else {
//       throw new Error('Нужен массив');
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(countTenNumbes(arrNum));

/// Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (elem, count) => {
//   try {
//     if (typeof count === 'number') {
//       return new Array(count).fill(elem);
//     } else {
//       throw new Error(`Ошибка второй аргумент должен быть числом`);
//     }
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

// console.log(arrayFill('42', 5));
