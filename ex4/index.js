// let resullt = true ? (true ? true : false) : false;

// console.log(resullt);

//1 С помощью условных операторов вывести на экран длину наибольшего отрезка из трех данных (все отрезки разной длины).

// const foo = (...args) => {
//   return Math.max(...args);
// };

// console.log(foo(323, 3232, 32323));

const foo = (a = 0, b = 0, c = 0) => (a > b ? (a > c ? a : b) : b > c ? b : c);

console.log(foo(13, 14, 21));

///2 Реализовать систему рекомендаций для пользователя опираясь на значение переменной, хранящей значение температуры в градусах Цельсия.
// ниже либо равна -30:  “Оставайтесь дома!”;
// от -30 до -10 включительно: “Сегодня холодно”;
// от -10 до +5 включительно: “Не холодно”;
// от +5 до +15 включительно: “Тепло”;
// от +15 до +25 включительно: “Очень тепло”;
// от +25 до +35: “Жарко”;
// выше либо равно +35: “Пекло!”;

const foo1 = (t) => {
  if (5 < t && t < 15) {
    return 'Тепло';
  }

  if (15 < t && t < 25) {
    return 'Очень тепло';
  }

  if (25 < t && t < 35) {
    return 'Жарко';
  }

  if (t > 35) {
    return 'Пекло!';
  }

  if (-30 < t && t < -10) {
    return 'Сегодня холодно';
  }

  if (-10 < t && t < 5) {
    return 'Не холодно';
  }

  if (-30 === t) {
    return 'Оставайтесь дома!';
  }
};

console.log(foo1(40));
//3 С помощью конструкции switch и переменной, хранящей роль пользователя (admin, manager, user …), выводить на экран информацию о пользователе (информацию любого типа, роль, дату рождения, любимый напиток и тд).

switch ('admin') {
  case 'admin': {
    console.log(1, 'admin');
    break;
  }
  case 'manager': {
    console.log(2, 'manager');
    break;
  }
  case 'user': {
    console.log(3, 'user');
    break;
  }
}




const chooseYears = (start, end) => {
  const yearmas = [];
  for (let i = start; end >= i; i++) {
    yearmas.push((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0 ? i : '');
  }

  return yearmas.filter((el) => el);
};

console.log(chooseYears(1990, 2100));