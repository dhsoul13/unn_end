try {
  class GenerateHash {
    constructor() {}
    getHash(length, isWord = false) {
      try {
        if (length && !isNaN(length)) {
          const mas = [];
          if (!isWord) {
            for (let i = 0; i < length; i++) {
              mas.push(GenerateHash.getRandomNumber(9, 0));
            }
          } else {
            for (let i = 0; i < length; i++) {
              const isNumber = GenerateHash.getRandomNumber(1, 0)
                ? true
                : false;
              if (isNumber) {
                mas.push(GenerateHash.getRandomNumber(9, 0));
              } else {
                mas.push(GenerateHash.getRandomString());
              }
            }
          }

          const str = mas.join('');
          return str;
        } else {
          if (length) {
            throw new Error('Не число');
          } else {
            throw new Error('Не указан размер');
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    static getRandomNumber(max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static getRandomString() {
      let abc = 'abcdefghijklmnopqrstuvwxyz';
      let rs = '';
      while (rs.length < 1) {
        rs += abc[Math.floor(Math.random() * abc.length)];
      }
      return rs;
    }
  }

  const hash = new GenerateHash();

  const num = hash.getHash(6, true);

  console.log(num);
} catch (e) {
  console.log(e);
}
