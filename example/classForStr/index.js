import { coundWord } from './methods/coundWords/index.js';
import { coundWordFromProbs } from './methods/coundWordsFromProb/index.js';
import { deleteNotWords } from './methods/deleteNotWords/index.js';
import { swearWords } from './methods/swearWords/index.js';

class StringPlus extends String {
  constructor(str) {
    super(str);
    this.str = String(str);
  }
}

StringPlus.prototype.coundWord = coundWord;
StringPlus.prototype.coundWordFromProbs = coundWordFromProbs;
StringPlus.prototype.deleteNotWord = deleteNotWords;
StringPlus.prototype.swearWords = swearWords;

export default StringPlus;
