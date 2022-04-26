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

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let totalYears = 0;
let totalBirthYear = 0;
let totalPassed = 0;

for (let i = 0; i < inventors.length; i++) {
  totalBirthYear += inventors[i].year;
  totalPassed += inventors[i].passed;
}
totalYears = totalPassed - totalBirthYear;
console.log(totalBirthYear); // 21130
console.log(totalPassed); //21991
console.log(totalYears); // 861

//
totalYears = inventors.reduce((total, inventors) => {
  return total + (inventors.passed - inventors.year);
}, 0);
console.log(totalYears); // 861

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

// Sum all in array
let sumArray = [1, 2];
console.log(sumArray.reduce((a, b) => a + b, 0)); // 3
sumArray = [1, 2, 3, 4, 5];
console.log(sumArray.reduce((a, b) => a + b, 0)); // 15

//

// Add all in array
let multiplyArray = [2, 4];
console.log(multiplyArray.reduce((a, b) => a * b, 1)); // 8

multiplyArray = [2, 4, 6, 8, 10, 12, 14];
console.log(multiplyArray.reduce((a, b) => a * b, 1)); // 645120

let powerArray = [4, 3];
console.log(powerArray.reduce((a, b) => a * b, 1));
