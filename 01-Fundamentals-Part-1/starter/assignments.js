/*
// Values and Variables
let country = "Sri Lanka";
let continent = "Asia";
let population = 21;

console.log(country);
console.log(continent);
console.log(population)
*/

/*
// Data Types
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
// let, const, var
language = 'Sinhala';
const country = "Sri Lanka";
const continent = "Asia";
const isIsland = true;
isIsland = false;
*/


/*
// Basic operators
console.log(population/2);

population++;
console.log(population);

console.log(population > 6);
console.log(population < 33);

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

console.log(description);
*/

/*
// Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
*/


/*
// If /else
if (population > 33) {
  console.log(`${country}'s population is above average`)
} else {
  console.log(`${country}'s population is ${(33 - population) / 2} million below average`)
}
*/


/*
// Type Conversion and Coercion
// The answers the pred1icted on the fly
*/

/*
// Truthy and Falsy Values - no assignment
*/

/*
// Equality Operators
const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
*/

/*
// Boolean Logic
if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/

/*
// Switch statement
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}
*/


// Statements and Expressions - no assignment

/*
// Conditional (Ternary) Operator
console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
*/