//// 1
// const helloPerson = ({ person = 'гость' }) => `Привет,${person}`;
// console.log(helloPerson({}));

//// 2

// const pow = (x, y) => Math.pow(x, (y = 1));

// console.log('Pow:', pow(4, 2));

// const powRecurce = (x, y) => {
//   if (y === 0) return 1;
//   return x * pow(x, y - 1);
// };

// console.log('Pow с рекурсией:', powRecurce(5, 2));

// ////3

// const middle = (arr = [1, 1]) =>
//   Array.isArray(arr)
//     ? arr.reduce((acc, el) => acc + el, 0) / arr.length
//     : 'Не массив';

// console.log('Middle:', middle([4, 4, 8, 19]));

/// 1 Напишите стрелочную функцию которая будет выводить переданную строку в консоль n раз.

const getStrRepeat = (str, n) => {
  if (n === 0) return 'done';
  n--;
  console.log(str);

  return getStrRepeat(str, n);
};

console.log(getStrRepeat('Привет', 4));

///2. Напишите стрелочную функцию, которая будет принимать в качестве параметра букву и если она гласная, функция будет  возвращать true, в противном случае false .

const cheackWordVowels = (n) => {
  const vowels = 'aeiouy';
  return vowels.includes(n.toLowerCase());
};

console.log(cheackWordVowels('b'));

//3 Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае*.

const isCheckPalidrom = (str) =>
  str.split('').reverse().join('').toLowerCase() === str.toLowerCase();

console.log(isCheckPalidrom('lol'));
