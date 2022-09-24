export const classES6 = () => {
  class Person {
    constructor(name) {
      this.name = name;
    }

    toString() {
      console.log(this.name);
    }

    static getName() {
      console.log("Person");
    }
  }

  class Work extends Person {
    constructor(name, work) {
      super(name);
      this.work = work;
    }

    get workGet() {
      console.log(this.work);
    }
    toString() {
      super.toString;
      console.log(this.work);
    }
  }

  const person1 = new Work("Даниил", 23);

  person1.toString();
  console.log(person1.workGet);

  ///static без создание объекта просто обратиться к классу

  Person.getName();
};
