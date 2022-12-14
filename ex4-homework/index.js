//Работа с if-else

// 1 Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const cheackNum = (i) => (i === 0 ? 'Верно' : 'Не верно');

// console.log(cheackNum(0));

// 2 Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const cheackNum = (i) => (i > 0 ? 'Верно' : 'Не верно');

// console.log(cheackNum(-2));

// 3 Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const cheackNum = (i) => (i < 0 ? 'Верно' : 'Не верно');

// console.log(cheackNum(-2));

//4 Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const cheackNum = (i) => (i >= 0 ? 'Верно' : 'Не верно');

// console.log(cheackNum(-2));

//5 Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const cheackNum = (i) => (i <= 0 ? 'Верно' : 'Не верно');

// console.log(cheackNum(-2));

//6  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const cheackNum = (i) => (i !== 0 ? 'Верно' : 'Не верно');

// console.log(cheackNum(-2));

//7 Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

// const cheackTest = (str) => (str === 'test' ? 'Верно' : 'Не верно');

// console.log(cheackTest('test'));

//8 Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

// const cheackNum = (i) => (i === '1' ? 'Верно' : 'Не верно');

// console.log(cheackNum('1'));

//Работа с логическими переменными

//1 Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// const test = true;

// const checkVariable = (test) => (test ? true : false);

// console.log(checkVariable(test));

//2 Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной

// const test = true;

// const checkVariable = (test) => (!test ? true : false);

// console.log(checkVariable(test));

//Работа с && (и) и || (или)

//1 Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// const cheackNum = (i) => (i > 0 && i < 5 ? 'Верно' : 'Не верно');

// console.log(cheackNum(7));

//2 Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// const cheackNum = (i) => (i === 0 || i === 2 ? i + 7 : 10);

// console.log(cheackNum(0));

//3 Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// const cheackNums = ({ a = 0, b = 0 }) => (a <= 1 || b >= 3 ? a + b : a - b);

// console.log(
//   cheackNums({
//     a: 10,
//     b: 10,
//   })
// );

//4 Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'

// const cheackNums = ({ a = 0, b = 0 }) =>
//   (a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Верно' : 'Не верно';

// console.log(
//   cheackNums({
//     a: 12,
//     b: 15,
//   })
// );

///На switch-case

/// 1 Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// const viewResult = (num) => {
//   switch (num) {
//     case 1: {
//       return 'Зима';
//       break;
//     }
//     case 2: {
//       return 'Весна';
//       break;
//     }
//     case 3: {
//       return 'Лето';
//       break;
//     }
//     case 4: {
//       return 'Осень';
//       break;
//     }
//     default: {
//       return 'Ошибка';
//     }
//   }
// };

// console.log(viewResult(1));

///Общие задачи

///1 В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const decardMonth = (num) =>
//   num > 0 && num <= 10
//     ? 'Первая декада месяца'
//     : num > 10 && num <= 20
//     ? 'Вторая декада месяца'
//     : 'Третья декада месяца';

// console.log(decardMonth(2));

///2  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// const intervalMonth = (month) => {
//   if (month >= 0 && month <= 2) {
//     return 'Зима';
//   } else if (month >= 3 && month <= 5) {
//     return 'Весна';
//   } else if (month >= 6 && month <= 8) {
//     return 'Лето';
//   } else if (month >= 8 && month <= 12) {
//     return 'Осень';
//   } else {
//     return 'Ошибка';
//   }
// };

// console.log(intervalMonth(12));

///3 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const checkWordFirst = (str) => (str[0] === 'a' ? true : false);

// console.log(checkWordFirst('avfds'));

//4. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const checkStrInStr = (str, findStr) => str.includes(findStr);

// console.log(checkStrInStr('12345', '123'));

//5. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий

// const sumStrZnach = (str) =>
//   str
//     .toString()
//     .slice(0, 3)
//     .split('')
//     .reduce((acc, el) => acc + (!isNaN(Number(el)) ? Number(el) : el), 0);

// console.log(sumStrZnach('131'));

//6  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const cheackNum = (num) => {
//   try {
//     if (num.length === 6) {
//       const strFirst = num
//         .slice(0, 3)
//         .split('')
//         .reduce((acc, el) => acc + (!isNaN(Number(el)) ? Number(el) : el), 0);
//       const strEnd = num
//         .slice(3, num.length)
//         .slice(0, 3)
//         .split('')
//         .reduce((acc, el) => acc + (!isNaN(Number(el)) ? Number(el) : el), 0);

//       return strFirst === strEnd;

//       return;
//     } else {
//       throw new Error('Либо не рано 6 либо не тот тип данных');
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

// console.log(cheackNum('111111'));

//Циклы while и for

///1  Выведите столбец чисел от 1 до 100.
// const whileExample = () => {
//   const mas = [];
//   let i = 1;
//   while (i !== 101) {
//     mas.push(i);
//     i++;
//   }

//   return mas;
// };

// console.log(whileExample());

//2 Выведите столбец чисел от 11 до 33.

// const whileExample = () => {
//   const mas = [];
//   let i = 11;
//   while (i !== 34) {
//     mas.push(i);
//     i++;
//   }

//   return mas;
// };

// console.log(whileExample());

//3 Выведите столбец четных чисел в промежутке от 0 до 100.

// const whileExample = () => {
//   const mas = [];
//   let i = 0;
//   while (i !== 101) {
//     if (i % 2 === 0) {
//       mas.push(i);
//     }
//     i++;
//   }

//   return mas;
// };

// console.log(whileExample());

//4 С помощью цикла найдите сумму чисел от 1 до 100.

// const whileExample = () => {
//   const mas = [];
//   let i = 0;
//   while (i !== 101) {
//     mas.push(i);
//     i++;
//   }

//   return mas.reduce((acc, el) => acc + el, 0);
// };

// console.log(whileExample());

//Работа с for для массивов

//1 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// const showMas = (mas) => {
//   mas.forEach((el) => {
//     console.log(el);
//   });
// };

// showMas([31, 3131, 3131, 313]);

//2 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// const sumMas = (mas) => mas.reduce((acc, el) => acc + el, 0);

// console.log(sumMas([13, 31, 313, 312]));

//Задачи общие.

//1 Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// const viewMas = (mas) => mas.filter((el) => el > 3 && el < 10);

// console.log(viewMas([13, 31, 12, 12, 32, 2, 12, 4, 8, 9]));

// 2 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// const viewMas = (mas) => mas.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);

// console.log(viewMas([13, 9, -1]));

//3 Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const viewMas = (mas, text) => (mas.includes(text) ? 'Есть' : 'Нет');

// console.log(viewMas([13, 21, 31], 24));

//4  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// const viewMas = (mas) =>
//   mas.filter((el) => {
//     return [1, 2, 5].includes(Number(el.toString()[0]));
//   });

// console.log(viewMas([10, 20, 30, 50, 235, 3000]));

//5 Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// const showViewMas = (mas) => {
//   mas.unshift('');
//   mas.push('');
//   return mas.join('-');
// };

// console.log(showViewMas([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//6  Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// const showIteration = (n) => {
//   let i = 0;
//   while (n >= 50) {
//     n /= 2;
//     i++;
//   }

//   return i;
// };

// console.log(showIteration(100));
