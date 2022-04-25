const people2 = [
  { name: `Wes`, year: 1988 },
  { name: `Kait`, year: 1986 },
  { name: `Irv`, year: 1970 },
  { name: `Lux`, year: 2015 },
];

// Array.prototype.every() // is everyone 19?
let everyAdult = people2.every(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

console.log(everyAdult); // False

everyAdult = people2.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(everyAdult); // False
