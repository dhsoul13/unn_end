const str = `Hello! My name is Kate. My surname is Pavlova. I'm seven. I live in Minsk, in Pushkin street. I go to school number 214. I'm in the first form.
I've got a family. It is small. We are a family of four. I've got a father, a mother and a brother. I haven't got a sister. My father is.an engineer. He works in a plant. My mother is a teacher. She works at school. My brother is little. He doesn't go to school. He goes to a kindergarten. He is four.
I like to play. I have got many toys. I have got a teddy-bear, dolls, a ball, a toy monkey and a doll's house. I like the doll's house very much. It is big. It is pink and nice.
We have got a cat. It is small and grey. It is very nice. It has big blue eyes, a funny nose, a small mouth and sharp teeth. Its ears are small. It can play hide-and-seek. I love my cat. It loves me, too.
I go to school. I'm a pupil. I have got many friends. We have our classroom. It is nice and large. You can see twelve desks, many chairs, our teacher's table, a blackboard, two bookcases in the classroom. At the lessons we have pens, pencils, pencil-boxes or pencil-cases, rulers, erasers, textbooks, exercise-books, record-books on the desks.
I like to read. I can read well. I like fairytales. They are very interesting. I like «Cinderella» and «Pinocchio» best.
Bye!`;

const str2 = str.replace(/(\n)/g, '');

//Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

//1

// const stringToarray = (str) => {
//   return str.split(' ');
// };

// const stringToarray = (str) => {
//   return str.split(/\b\W*\b/gim);
// };

// console.log(stringToarray(str));

//2 Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const deleteСharacters = (str, length = 0) => {
//   return str.substr(0, length);
// };

// console.log(deleteСharacters(str, 10));

//3 Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const insertDash = (str) => {
//   return str
//     .split(/(?<!\,)\s(?=[a-z])/gm)
//     .map((el) => el.toUpperCase())
//     .join('-');
// };

// console.log(insertDash(str2));

//4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const changeRegistr = (str) => {
//   return str.replace(
//     /(?<=((\.\s)|(\!\s))|(^)|(\.))[A-Z]\w*(?![\.\«\»])\b/gm,
//     (el) => {
//       return el
//         .split('')
//         .map((el, index) => {
//           if (index === 0) {
//             return el.toLowerCase();
//           } else {
//             return el;
//           }
//         })
//         .join('');
//     }
//   );
// };

// console.log(changeRegistr(str2.slice(0, 30)));

//5 Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// на регулярках
// const capitalize = (str) => {
//   return str.match(/(?<=(\.\s)|(^)|(\.))[A-Z]\w*(?![\.\«\»])\b/gm, (el) => {
//     return el;
//   });
// };

// console.log(capitalize(str).length);

//6 Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const changeRegistr = (str) => {
//   return str
//     .split('')
//     .map((el) => {
//       if (el === el.toLowerCase()) {
//         return el.toUpperCase();
//       } else {
//         return el.toLowerCase();
//       }
//     })
//     .join('');
// };

// 7 Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const removeChar = (str) => {
//   return str.match(/[a-zA-Z]/g).join('');
// };

// console.log(removeChar('82348216dhsdhsjd23923'));

//8 Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// const zeros = (num, len) => {
//   return Number(
//     [...num.toString().split(''), ...Array(len).fill('0')].join('')
//   );
// };

// console.log(zeros(29, 0));

//9 Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

// console.log(comparison('df', 'df'));

//10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const insensitiveSearch = (str1, str2) => {
//   console.log(new RegExp(`\\d${str2}\\d`));
//   return Array.from(str1.matchAll(new RegExp(`\\b${str2}\\b`, 'g'))).map(
//     (el) => ({
//       elem: el[0],
//       index: el.index,
//     })
//   );
// };

//11 Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const initCap = (str) => {
//   const indexFromUpper = initCap.getRandomeNumber(str.length);
//   return str
//     .toLowerCase()
//     .split('')
//     .map((el, index) => {
//       if (index === indexFromUpper || index > indexFromUpper) {
//         return el.toUpperCase();
//       } else {
//         return el;
//       }
//     })
//     .join('');
// };

// initCap.getRandomeNumber = (length) => {
//   if (length <= 2) {
//     if (length === 0) {
//       return 0;
//     } else {
//       return 1;
//     }
//   } else {
//     return Math.floor(Math.random() * (length - 2 + 1)) + 2;
//   }
// };

// console.log(initCap('ismaping'));
// console.log(insensitiveSearch(str2, 'and'));

//12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// const initSnake = (str) => {
//   const indexFromUpper = initSnake.getRandomeNumber(str.length);
//   const mas = str.toLowerCase().split('');
//   return [
//     ...mas.slice(0, indexFromUpper),
//     '_',
//     ...mas.slice(indexFromUpper),
//   ].join('');
// };

// initSnake.getRandomeNumber = (length) => {
//   if (length <= 2) {
//     if (length === 0) {
//       return 0;
//     } else {
//       return 1;
//     }
//   } else {
//     return Math.floor(Math.random() * (length - 1 - 2 + 1)) + 2;
//   }
// };

// console.log(initSnake('ismaping'));

//13 Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// const repeatStr = (str, n = 1) => str.repeat(n);

// console.log(repeatStr('fox', 10));

// const repeatStr = (str, n = 1) =>
//   str
//     .split('')
//     .reduce((acc, el, index, mas) => {
//       if (index === 0) {
//         return ` ${el}`;
//       }
//       if (mas.length - 1 == index) {
//         return `${acc}${el} `;
//       }

//       return `${acc}${el}`;
//     }, '')
//     .repeat(n);

// console.log(repeatStr('fox', 10));

//14 Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// const path = (pathname) => pathname.match(/\w*.[\w]*$/gm);

// console.log(
//   path(
//     `C:\\Users\\muxre\\Desktop\\enducation\\web\\JavaScript\\Pictures\\index.js`
//   )
// );

//15. Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// String.prototype.endsWith = function (str) {
//   return this.toString().match(new RegExp(`${str}$`));
// };

// console.log('aada'.endsWith('da'));

//16 Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// const getSubstr = (str, char, pos) => {
//   const index = str.split('').slice(pos).join('').match(new RegExp(char));
//   if (index) {
//     return {
//       start: [...str.slice(0, index.index)].join(''),
//       end: [...str.slice(index.index)].join(''),
//     };
//   }
//   return str;
// };

// console.log(getSubstr('hello', 'e', 1));

//17 Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// const insert = (str, substr, pos = 0) => {
//   const mas = str.split('');
//   console.log(mas);
//   if (mas[pos]) {
//     return [...mas.slice(0, pos), substr, ...mas.slice(pos)].join('');
//   } else {
//     mas[pos] = substr;
//     return mas
//       .toString()
//       .replace(/[\][]/g)
//       .split(',')
//       .map(function (x) {
//         return x ? x : ' ';
//       })
//       .join('');
//   }
// };

// console.log(insert('fsfsf', 'хай', 4));

//18 Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// const limitStr = (str, n, symb = '...') => {
//   const strnew = str.slice(0, n);
//   if (strnew === str) {
//     return str;
//   } else {
//     return str.slice(0, n) + symb;
//   }
// };

// console.log(limitStr('dfsfsfewewe', 30));

//19 Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const count = (str, stringsearch) =>
//   str.match(new RegExp(stringsearch, 'gmi'))
//     ? str.match(new RegExp(stringsearch, 'gmi')).length
//     : 0;

// console.log(count('fsfsfsa', 's'));

//20 Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// const strip = (str) => str.trim();

// console.log(strip(' fsfsf sffasfs dfs f'));

//21 Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// const cutString = (str, n) =>
//   str.match(new RegExp(n, 'g')) ? str.match(new RegExp(n, 'g')).join('') : str;

// console.log(cutString('fsfsfsf', 'a'));

// const cutString = (str, n) => str.substr(0, n);
// console.log(cutString('fsfsfsf', 10));

//22 Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// const findWord = (word, str) => str.toLowerCase().includes(word.toLowerCase());

// console.log(findWord('Hello', str));
