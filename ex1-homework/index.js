import { arrowFunction } from "./ex/arrowFunction/index.js";
import { classES6 } from "./ex/class/index.js";
import { defaultParam } from "./ex/default_param/index.js";
import { generatorES6 } from "./ex/generator/index.js";
import { mapAndSet } from "./ex/mapandset/index.js";
import { modulesES6 } from "./ex/modules/index.js";
import { objectES6 } from "./ex/object/index.js";
import { promiseES6 } from "./ex/promise/index.js";
import { restAndSpred } from "./ex/restAndSpred/index.js";
import { stringES6 } from "./ex/string/index.js";
import { symbolES6 } from "./ex/symbol/index.js";

const a = Number(process.env["NODE_ENV"]);
switch (a) {
  case 1: {
    console.log("Файл пуст");
    break;
  }
  case 2: {
    arrowFunction();
    break;
  }
  case 3: {
    defaultParam();
    break;
  }
  case 4: {
    stringES6();
    break;
  }
  case 5: {
    restAndSpred();
    break;
  }
  case 6: {
    objectES6();
    break;
  }
  case 7: {
    modulesES6();
    break;
  }
  case 8: {
    symbolES6();
    break;
  }
  case 9: {
    generatorES6();
    break;
  }
  case 10: {
    async function one() {
      await promiseES6();
    }
    one();
    break;
  }
  case 11: {
    mapAndSet();
    break;
  }
}
