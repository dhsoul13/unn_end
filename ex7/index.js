import StringPlus from '../example/classForStr/index.js';

const str = new StringPlus('бля, чел, иди нахуй сука ты тупая');

console.log(str.swearWords());

//Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, и в качестве результата работы функции возвращать сумму четных положительных элементов переданного массива.

// const sumPositive = (el) => {
//   if (Array.isArray(el)) {
//     return el.reduce((acc, el) => {
//       if (el > 0) {
//         return acc + el;
//       } else {
//         return acc;
//       }
//     }, 0);
//   } else {
//     return null;
//   }
// };

// console.log(sumPositive([1, -31, 31, 98]));

///Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.

// const deleteEqual = (el) => {
//   if (Array.isArray(el)) {
//     return el.reduce((acc, elem, i) => {
//       if (i === 0) {
//         acc.push(elem);
//         return acc;
//       }
//       if (acc.includes(elem)) {
//         return acc;
//       } else {
//         acc.push(elem);
//         return acc;
//       }
//     }, []);
//   } else {
//     return null;
//   }
// };

// const deleteEqual = (el) => {
//   if (Array.isArray(el)) {
//     return Array.from(new Set([...el]));
//   }
// };
// console.log(deleteEqual([1, -31, 31, 98, 98, 31, 1]));

///Написать функцию  которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

// const compareMas = (mas1, mas2) => {
//   if (Array.isArray(mas1) && Array.isArray(mas2)) {
//     if (mas1.toString() === mas2.toString()) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return null;
//   }
// };

// console.log(compareMas([1, 2, 3], [1, 2, 3, 4]));
