export const restAndSpred = () => {
  ///rest
  const sum = (arr, ...rest) => {
    return {
      result: arr.reduce((acc, i) => acc + i, 0),
      rest,
    };
  };

  const sumMas = (arr, ...rest) => {
    return [arr.reduce((acc, i) => acc + i, 0), rest];
  };

  console.log(sum([4, 5, 6], 3434));

  // spred

  console.log(...[1, 2, 3]);

  //диструктаризация
  const {
    result: a1,
    rest: [a2, a3],
  } = sum([1313, 3131], 932049, 320932);

  const [result1, rest2] = sumMas([1324243, 3131424], 9232049, 320932);

  console.log({
    a1,
    a2,
    a3,
  });

  console.log({
    rest2,
    result1,
  });

  //диструктаризация + создается новый объект
};
