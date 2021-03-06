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
// 0: {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968}
// 1: {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
// 2: {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727}
// 3: {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979}
// 4: {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
// 5: {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642}
// 6: {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955}
// 7: {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543}
// 8: {first: 'Marie', last: 'Curie', year: 1867, passed: 1934}
// 9: {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630}
// 10: {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905}
// 11: {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852}
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
// 11: {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968

//
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
// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabetically = people.sort(function (lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(`, `);
  const [bLast, bFirst] = nextOne.split(`, `);
  return aLast > bLast ? 1 : -1;
});
console.log(alphabetically);
// 0: "Beck, Glenn"
// 1: "Becker, Carl"
// 2: "Beckett, Samuel"
// 3: "Beddoes, Mick"
// 4: "Beecher, Henry"
// 5: "Beethoven, Ludwig"
// 6: "Begin, Menachem"
// 7: "Belloc, Hilaire"
// 8: "Bellow, Saul"
// 9: "Ben-Gurion, David"
// 10: "Benchley, Robert"
// 11: "Benenson, Peter"
// 12: "Benjamin, Walter"
// 13: "Benn, Tony"
// 14: "Bennington, Chester"
// 15: "Benson, Leana"
// 16: "Bent, Silas"
// 17: "Bentsen, Lloyd"
// 18: "Berger, Ric"
// 19: "Bergman, Ingmar"
// 20: "Berio, Luciano"
// 21: "Berle, Milton"
// 22: "Berlin, Irving"
// 23: "Berne, Eric"
// 24: "Bernhard, Sandra"
// 25: "Berra, Yogi"
// 26: "Berry, Wendell"
// 27: "Berry, Halle"
// 28: "Bethea, Erin"
// 29: "Bevan, Aneurin"
// 30: "Bevel, Ken"
// 31: "Biden, Joseph"
// 32: "Bierce, Ambrose"
// 33: "Biko, Steve"
// 34: "Billings, Josh"
// 35: "Biondo, Frank"
// 36: "Birrell, Augustine"
// 37: "Black, Elk"
// 38: "Blair, Tony"
// 39: "Blair, Robert"
// 40: "Blake, William"
