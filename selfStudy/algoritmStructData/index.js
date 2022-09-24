export const algoritmStructData = ({
  nameAlgoritm = '',
  array,
  findEl,
  graph,
}) => {
  console.log('Data');

  /// Алгоритм - последовательность ходов
  // Сложность O(n) n - колличество операций, причем всегда в худшию

  /* 
    O(n) = найти в масиве из 10 эл какое то число.
    O(Log2n) = бинарный поиск, должен быть отсортирован, каждый шак массив делиться пополам
  */

  /// Линейный поиск

  if (nameAlgoritm === 'line') {
    console.log('line');
    let k = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      count++;
      if (array[i] === findEl) {
        console.log(`Найденный элемеет находиться на позиции: ${i}`);
        k++;
      }
    }
    if (!k) {
      console.log(`Хмм походу нет`);
    }

    console.log('Колличество итераций:' + count);
  }

  ///Бинарный поиск

  if (nameAlgoritm === 'binar') {
    console.log('binar');

    /// Для старта:
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    // while (found === false && start <= end) {
    //   //// находим половину массива
    //   middle = Math.floor((start + end) / 2);
    //   //// если половина и есть данное число то найден
    //   if (array[middle] === findEl) {
    //     found = true;
    //     position = middle;
    //     console.log(`Позиция:${position}`);
    //     return true;
    //   }
    //   /// сдвиг на позицию от центра влево и вправо
    //   if (findEl < array[middle]) {
    //     end = middle - 1;
    //   } else {
    //     start = middle + 1;
    //   }
    // }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (start <= end) {
        count = count + 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] == findEl) {
          found = true;
          position = middle;
          console.log(`Позиция:${position}, колличество итераций: ${count}`);
          break;
        }

        if (findEl < array[middle]) {
          end = middle - 1;
        } else {
          start = middle + 1;
        }
      } else {
        break;
      }
    }
  }

  /// Сортировки

  //1. Выбора

  if (nameAlgoritm === 'Sort-Selection') {
    console.log('selection sort');

    // for (let i = 0; i < array.length; i++) {
    //   let min = i;
    //   for (let k = i + 1; k < array.length; k++) {
    //     if (array[k] < array[min]) {
    //       min = k;
    //     }
    //   }
    //   let tmp = array[i];
    //   array[i] = array[min];
    //   array[min] = tmp;
    // }

    let min = 0;

    for (let i = 0; i < array.length; i++) {
      for (let k = i + 1; k < array.length; k++) {
        if (array[min] > array[k]) {
          min = k;
        }
      }

      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }

    console.log(array);
  }

  //2 Пузырьковая сортировка
  if (nameAlgoritm === 'Sort-Bubble') {
    console.log('sort-buble');
    for (let i = 0; i < array.length; i++) {
      for (let k = i + 1; k < array.length; k++) {
        if (array[k] < array[i]) {
          let tmp = array[k];
          array[k] = array[i];
          array[i] = tmp;
        }
      }
    }
    console.log(array);
  }

  //3 Быстрая сортировка

  if (nameAlgoritm === 'Sort-Quich') {
    console.log('Sort-Quich');

    function quich(array) {
      if (array.length <= 1) {
        return array;
      }

      let privotIndex = Math.floor(array.length / 2);
      let privot = array[privotIndex];
      let less = [];
      let greate = [];

      for (let i = 0; i < array.length; i++) {
        if (i === privotIndex) continue;
        if (array[i] < privot) {
          less.push(array[i]);
        } else {
          greate.push(array[i]);
        }
      }

      console.log({ less, privot, greate });
      return [...quich(less), privot, ...quich(greate)];
    }

    console.log(quich(array));
  }

  // Рекурсия - это функция которая вызывает сама себя

  if (nameAlgoritm === 'recursion') {
    console.log('recursion');

    const factorial = (n) => {
      if (n === 1) {
        return 1;
      }
      return n * factorial(n - 1);
    };

    const fibonachi = (n) => {
      if (n === 1 || n === 2) {
        return 1;
      }
      return fibonachi(n - 1) + fibonachi(n - 2);
    };
    console.log(factorial(5));
    console.log(fibonachi(10));
  }

  if (nameAlgoritm === 'breadthSearch') {
    console.log('breadthSearch');
    // graph.a = ["b"];
    // graph.b = ["c"];
    // graph.c = ["f", "d"];
    // graph.d = ["c", "e"];
    // graph.e = ["d", "f"];
    // graph.f = ["c", "e"];

    const graphResult = (graph, start, end) => {
      let queue = [];
      let visited = false;

      queue.push(start);
      while (queue.length > 0) {
        console.log(queue);
        const current = queue.shift();
        if (!graph[current]) {
          graph[current] = [];
        }
        if (graph[current].includes(end)) {
          console.log(graph[current].includes(end));
          return true;
        } else {
          queue = [...queue, ...graph[current]];
        }
      }
      return false;
    };

    console.log(graphResult(graph, 'a', 'c'));
  }
};
