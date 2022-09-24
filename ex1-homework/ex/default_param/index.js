export const defaultParam = () => {
  /// function declaration
  function sum({ a = 0, b = 0 }) {
    return a + b;
  }
  console.log(String(sum), "=>", sum({}));

  // arrow function
  const sumarrow = ({ a = 0, b = 0 }) => a + b;
  console.log(String(sumarrow), "=>", sum({ a: 6, b: 8 }));
};
