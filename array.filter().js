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

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let fifteen = inventor.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; // keep it
  }
});
console.log(fifteen);
// {first: "Galileo", last: "Galilei", year: 1564, passed: 1642}
// {first: "Johannes", last: "Kepler", year: 1571, passed: 1630}

// Same but ternary
fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

console.log(fifteen);
// {first: "Galileo", last: "Galilei", year: 1564, passed: 1642}
// {first: "Johannes", last: "Kepler", year: 1571, passed: 1630}

//

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
