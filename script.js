`use strict`;
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

let fifteen = inventors.filter(function (inventors) {
  if (inventors.year >= 1500 && inventors.year < 1600) {
    return true; // keep it
  }
});
console.log(fifteen);

fifteen = fifteen = inventors.filter(
  (inventors) => inventors.year >= 1500 && inventors.year < 1600
);

console.log(fifteen);

//

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let fullNames = inventors.map((inventor) => inventor.first + inventor.last);
console.log(fullNames);
//['AlbertEinstein', 'IsaacNewton', 'GalileoGalilei', 'MarieCurie', 'JohannesKepler', 'NicolausCopernicus', 'MaxPlanck', 'KatherineBlodgett', 'AdaLovelace', 'Sarah E.Goode', 'LiseMeitner', 'HannaHammarström']

fullNames = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log(fullNames);
//['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Hanna Hammarström']

//

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
//ternary operator
ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(ordered);
// 0: {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543}
// 1: {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}
// 2: {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630}
// 3: {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727}
// 4: {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852}
// 5: {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
// 6: {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905}
// 7: {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
// 8: {first: 'Marie', last: 'Curie', year: 1867, passed: 1934}
// 9: {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968}
// 10: {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955}
// 11: {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979}

//

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let totalBirthYear = 0;
let totalPassed = 0;

for (let i = 0; i < inventors.length; i++) {
  totalBirthYear += inventors[i].year;
  totalPassed += inventors[i].passed;
}
let totalYears = totalPassed - totalBirthYear;
console.log(totalBirthYear); // 21130
console.log(totalPassed); //21991
console.log(totalYears); // 861

totalYears = inventors.reduce((total, inventors) => {
  return total + (inventors.passed - inventors.year);
}, 0);

console.log(totalYears); // 861

//

// 5. Sort the inventors by years lived
let oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nexGuy = b.passed - b.year;
  if (lastGuy > nexGuy) {
    return 1;
  } else {
    return -1;
  }
});
console.log(oldest);
// 0: {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852}
// 1: {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905}
// 2: {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630}
// 3: {first: 'Marie', last: 'Curie', year: 1867, passed: 1934}
// 4: {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543}
// 5: {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955}
// 6: {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}
// 7: {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
// 8: {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979}
// 9: {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727}
// 10: {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
// 11: {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968}

oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nexGuy = b.passed - b.year;
  return lastGuy > nexGuy ? -1 : 1;
});
console.log(oldest);
// 0: {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852}
// 1: {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905}
// 2: {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630}
// 3: {first: 'Marie', last: 'Curie', year: 1867, passed: 1934}
// 4: {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543}
// 5: {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955}
// 6: {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}
// 7: {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
// 8: {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979}
// 9: {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727}
// 10: {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
// 11: {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968}

//
/*
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// !!! Type in devtools console on link
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));
const de = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes(`de`));
//
// 0: "Boulevard de l'Amiral-Bruix"
// 1: "Boulevard des Capucines"
// 2: "Boulevard de la Chapelle"
// 3: "Boulevard de Clichy"
// 4: "Boulevard de l'Hôpital"
// 5: "Boulevard des Italiens"
// 6: "Boulevard de la Madeleine"
// 7: "Boulevard de Magenta"
// 8: "Boulevard Marguerite-de-Rochechouart"
// 9: "Boulevard de Sébastopol"
// 10: "Boulevard de Strasbourg"
// 11: "Boulevard de la Zone"
*/

//

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabetically = people.sort(function (lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(`, `);
  const [bLast, bFirst] = nextOne.split(`, `);
  return aLast > bLast ? 1 : -1;
});
console.log(alphabetically);
// ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Ben-Gurion, David', 'Benchley, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Wendell', 'Berry, Halle', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Tony', 'Blair, Robert', 'Blake, William']
//

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
// {car: 5, truck: 3, bike: 2, walk: 2, van: 2}

//

const people2 = [
  { name: `Wes`, year: 1988 },
  { name: `Kait`, year: 1986 },
  { name: `Irv`, year: 1970 },
  { name: `Lux`, year: 2015 },
];
const comments = [
  { text: `Love this!`, id: 524423 },
  { text: `Super good`, id: 823423 },
  { text: `You are the best`, id: 2039842 },
  { text: `Ramen is my fav food ever`, id: 123523 },
  { text: `Nice Nice Nice!`, id: 542328 },
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

//

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

// Array.prototype.find()
// Find is like filter, but instead return just the one you are looking for
//Find the comment with the ID of 823423
let comment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(comment); // {text: 'Super good', id: 823423}

comment = comments.find((comment) => comment.id === 823423);
console.log(comment); // {text: 'Super good', id: 823423}

//

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with ID od 823423

let index = comments.findIndex(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(index); // {text: 'Super good', id: 823423}

index = comments.findIndex((comment) => comment.id === 823423);
console.log(index); // {text: 'Super good', id: 823423}

//comments.splice(index, 1);
//console.log(comments);
// 0: {text: 'Love this!', id: 524423}
// 1: {text: 'You are the best', id: 2039842}
// 2: {text: 'Ramen is my fav food ever', id: 123523}
// 3: {text: 'Nice Nice Nice!', id: 542328}

newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.log(newComments);
// 0: {text: 'Love this!', id: 524423}
// 1: {text: 'You are the best', id: 2039842}
// 2: {text: 'Ramen is my fav food ever', id: 123523}
// 3: {text: 'Nice Nice Nice!', id: 542328}
