const people2 = [
  { name: `Wes`, year: 1988 },
  { name: `Kait`, year: 1986 },
  { name: `Irv`, year: 1970 },
  { name: `Lux`, year: 2015 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one pearson 19?
let isAdult = people2.some(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});
console.log(isAdult); // true

isAdult = people2.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isAdult); // true
