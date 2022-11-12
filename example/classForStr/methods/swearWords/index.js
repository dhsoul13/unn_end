import { words } from './helpers/words.js';

export function swearWords() {
  return this.str
    .split(/\s/)
    .map((el) => {
      const normalize = el.match(/\p{Script=Cyrillic}*/mu)?.[0];
      let error = false;
      words.forEach((elem) => {
        if (elem.word === normalize) {
          error = true;
          return;
        }
      });

      return error ? Array(normalize.length).fill('*').join('') : el;
    })
    .join(' ');
}
