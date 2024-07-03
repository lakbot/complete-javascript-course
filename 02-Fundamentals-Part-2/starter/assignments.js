/*
// Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const sriLanka = describeCountry("Sri Lanka", 21, "Colombo");
console.log(sriLanka);
*/

/*
// Function Declaration vs Expresions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const country1 = percentageOfWorld1(1000);
const country2 = percentageOfWorld1(2000);
const country3 = percentageOfWorld1(3000);

const percentageOfWolrd2 = function (population){
  return (population / 7900) * 100;
}

const country4 = percentageOfWolrd2(3000);
*/

/*
// Arrow Functions
const percentageOfWolrd3 = (population) => (population / 7900) * 100;
*/

/*
// Functions Calling Other Functions\
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
}

const describePopulation = function(country, population){
  const precentage = percentageOfWorld1(population)
  return `${country} has ${population} million people, which is about ${precentage}% of the world`
}

describePopulation('Sri Lanka', 21);
*/

// Reviewing Functions - done

/*
// Introduction to Arrays
const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
*/

/*
// Basic Array Operations (Methods)
const neighbours = ["Norway", "Sweden", "Russia"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}
neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
*/

/*
// Introduction to Objects
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
};
*/

/*
// Dot vs Bracket Notation
("Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki");
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
myCountry["population"] -= 2;
*/

/*
// Object Methods
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsLand: function () {
    this.isIsLand = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsLand();

console.log(myCountry);
*/

/*
// The for Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/

/*
// Looping arrays, breaking, continuing
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
*/

/*
//Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/

/*
// The while loop
const populations = [10, 1441, 332, 83];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
  i++;
}
console.log(percentages3);
*/