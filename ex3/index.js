class GetPostcard {
  constructor(title, str, from, to) {
    this.title = title;
    this.str = str;
    this.from = from;
    this.to = to;
    this.date = new Date();
  }

  getInformation() {
    return {
      title: this.title,
      str: this.str,
      from: this.from,
      to: this.to,
      date: Number(this.date),
    };
  }

  static InformationAboutGetTransformString() {
    return `Данный класс создает открытку `;
  }
}

const postcard1 = new GetPostcard(
  'Название открытки',
  'Строка поздравления',
  'Даниил',
  'Настя'
);
console.log(-5 + '4' + '4' * 5);
