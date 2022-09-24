//2 arrow function

export const arrowFunction = () => {
  console.log("one");
  // 1 type функций
  function cube(a) {
    return a ** 2;
  }
  console.log(cube(5));
  // 2 type arrow
  const arrowCube = (a) => {
    return a ** 2;
  };

  ///extra
  /// если 1 параметр можно скобки () убрать
  const arrowCubeExtra1 = (a) => {
    return a ** 2;
  };
  /// можно убрать ретерн, он понимает что это вычесленной значение нужно вернуть
  const arrowCubeExtra2 = (a) => a ** 2;

  /// context, у arrow нет собственного контекста(не создает собственного контекта), у fun создает собственный каждый раз

  const person = {
    name: "Даниил",
  };

  person.getname = function getname() {
    return this.name;
  };

  person.arrowGetName = () => this?.name;

  console.log(person.getname());
  console.log(person.arrowGetName());
};
