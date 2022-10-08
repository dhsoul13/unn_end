// let resullt = true ? (true ? true : false) : false;

// console.log(resullt);

//1 С помощью условных операторов вывести на экран длину наибольшего отрезка из трех данных (все отрезки разной длины).

// const foo = (...args) => {
//   return Math.max(...args);
// };

// console.log(foo(323, 3232, 32323));

const foo = (a = 0, b = 0, c = 0) => (a > b ? (a > c ? a : b) : b > c ? b : c);

console.log(foo(13, 14, 21));

//2 С помощью конструкции switch и переменной, хранящей роль пользователя (admin, manager, user …), выводить на экран информацию о пользователе (информацию любого типа, роль, дату рождения, любимый напиток и тд).

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
