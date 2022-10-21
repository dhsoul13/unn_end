//1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// const squareNumber = (number) => Math.pow(number, 2);

// console.log(squareNumber(10));

//2. Сделайте функцию, которая возвращает сумму двух чисел.

// const sumTwoNumber = (a, b) => {
//   if (
//     typeof a === 'object' ||
//     typeof b === 'object' ||
//     !a ||
//     !b ||
//     isNaN(a) ||
//     isNaN(b)
//   ) {
//     return 'Ошибочка';
//   } else {
//     return Number(a) + Number(b);
//   }
// };

// console.log(sumTwoNumber('10', 10));

//3 Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// const resultMath = (a, b, c) => {
//   if (
//     typeof a === 'object' ||
//     typeof b === 'object' ||
//     typeof c === 'object' ||
//     !a ||
//     !b ||
//     !c ||
//     isNaN(a) ||
//     isNaN(b) ||
//     isNaN(c)
//   ) {
//     return 'Ошибочка';
//   } else {
//     return (Number(b) - Number(a)) / Number(c);
//   }
// };

// console.log(resultMath(10, 20, 5));

//4  Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// const getMonthFromNumber = (a) => {
//   if (typeof a === 'object' || !a || isNaN(a)) {
//     return 'Ошибочка';
//   } else {
//     switch (Number(a)) {
//       case 1: {
//         return 'Январь';
//       }
//       case 2: {
//         return 'Февраль';
//       }
//       case 3: {
//         return 'Март';
//       }
//       case 4: {
//         return 'Апрель';
//       }
//       case 5: {
//         return 'Май';
//       }
//       default: {
//         return 'Номера такого нет';
//       }
//     }
//   }
// };

// console.log(getMonthFromNumber(1));

//5 Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// const isEqual = (a, b) => {
//   if (
//     typeof a === 'object' ||
//     typeof b === 'object' ||
//     !a ||
//     !b ||
//     isNaN(a) ||
//     isNaN(b)
//   ) {
//     return 'Ошибочка';
//   } else {
//     return Number(a) === Number(b) ? true : false;
//   }
// };

// console.log(isEqual(5, -5));

//6 Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// const isMoreThanTen = (a, b) => {
//   if (
//     (typeof a === 'object' ||
//       typeof b === 'object' ||
//       !a ||
//       !b ||
//       a !== 0 ||
//       b !== 0,
//     isNaN(a) || isNaN(b))
//   ) {
//     return 'Ошибочка';
//   } else {
//     return Number(a) + Number(b) > 10 ? true : false;
//   }
// };

// console.log(isMoreThanTen(7, 2));

//7 Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// const isNegative = (a) => {
//   if (typeof a === 'object' || !a & (a !== 0) || isNaN(a)) {
//     return 'Ошибочка';
//   } else {
//     return !Number(a) > 0 ? true : false;
//   }
// };

// console.log(isNegative(10));

//8 Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = (a) => {
//   if (typeof a === 'object' || !a & (a !== 0) || isNaN(a)) {
//     return 'Ошибочка';
//   } else {
//     return Number(a) > 0 && Number(a) < 10 ? true : false;
//   }
// };

// console.log(isNumberInRange(1));

//9.Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// const checkElemFromСondition = (mas, callback) => {
//   if (Array.isArray(mas) && typeof callback === 'function') {
//     return mas.filter((el) => callback(el));
//   } else {
//     return 'Ошибочка';
//   }
// };

// console.log(checkElemFromСondition([10, 10, 3, 3, 12, 3, 5], isNumberInRange));

//10 Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// const getDigitsSum = (a) => {
//   if (typeof a === 'object' || !a & (a !== 0) || isNaN(a)) {
//     return 'Ошибочка';
//   } else {
//     return String(a)
//       .split('')
//       .reduce((acc, el) => acc + Number(el), 0);
//   }
// };

// console.log(getDigitsSum(999));

//11 Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// const getMas = (start, end) => {
//   const mas = [];
//   for (let index = start; index < end; index++) {
//     mas.push(index);
//   }
//   return mas;
// };

// const checkDate = (num, callback) => {
//   if (Array.isArray(num) && typeof callback === 'function') {
//     return num.filter((el) => callback(el) === 13);
//   } else {
//     return 'Ошибочка';
//   }
// };

// console.log(checkDate(getMas(1, 2020), getDigitsSum));

//12 Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = (a) => {
//   if (typeof a === 'object' || !a & (a !== 0) || isNaN(a)) {
//     return 'Ошибочка';
//   } else {
//     return a % 2 === 0;
//   }
// };

// console.log(isEven(41));

//13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// const getMas = (start, end) => {
//   const mas = [];
//   for (let index = start; index < end; index++) {
//     mas.push(index);
//   }
//   return mas;
// };

// const isEvenMas = (mas, callback) => {
//   if (Array.isArray(mas) && typeof callback === 'function') {
//     return mas.filter((el) => isEven(el));
//   }
// };

// console.log(isEvenMas(getMas(1, 100), isEven));

// 14 Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// const getDivisors = (a) => {
//   if (typeof a === 'object' || !a & (a !== 0) || isNaN(a)) {
//     return 'Ошибочка';
//   } else {
//     const mas = [];
//     for (let i = 0; i < a; i++) {
//       mas.push(a % i === 0 ? i : '');
//     }

//     return mas.filter((el) => el);
//   }
// };

// console.log(getDivisors(10));

//15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// const getDigitsSum = (a) => {
//   if (typeof a === 'object' || !a & (a !== 0) || isNaN(a)) {
//     return 'Ошибочка';
//   } else {
//     let find = false;
//     let result = a;
//     while (!find) {
//       result = String(result)
//         .split('')
//         .reduce((acc, el) => acc + Number(el), 0);
//       if (result < 9) {
//         find = true;
//         return result;
//       }
//     }
//   }
// };

// console.log(getDigitsSum(105));

// const getDigitsSum = (a) => {
//   if (typeof a === 'object' || !a & (a !== 0) || isNaN(a)) {
//     return 'Ошибочка';
//   } else {
//     const result = String(a)
//       .split('')
//       .reduce((acc, el) => acc + Number(el), 0);

//     if (result <= 9) {
//       return result;
//     } else {
//       return getDigitsSum(result);
//     }
//   }
// };

// console.log(getDigitsSum(999));

/// 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// const palidrome = (str) => {
//   if (str && typeof str === 'string') {
//     return str.split('').reverse().join('') === str;
//   } else {
//     return 'Ошибка';
//   }
// };

// console.log(palidrome('lol'));
