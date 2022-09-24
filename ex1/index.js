
const ourPlaneteName = "Земля";
let timeNow = Date.now();
let countState = 10;
const isPayNFC = true;
const userName = "Даниил";
const userSurname = "Игоревич";
const lastName = "Мухреев";
// const fio = userName + " " + userSurname + " " + lastName;
const fio = `${userName} ${userSurname} ${lastName}`;

console.log({
  ourPlaneteName,
  timeNow,
  countState,
  isPayNFC,
  fio,
});
