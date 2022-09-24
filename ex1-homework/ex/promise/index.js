import { rejects } from "assert";
import { resolve } from "path";

export const promiseES6 = async () => {
  const delay = (ms) =>
    new Promise((resolve, rejects) => {
      if (ms > 5000) {
        return rejects(`Not done ${ms}`);
      } else {
        setTimeout(() => resolve(`Done ${ms}`), ms);
      }
    });

  try {
    console.log(await delay(30000));
  } catch (e) {
    console.log(e);
  }
};
