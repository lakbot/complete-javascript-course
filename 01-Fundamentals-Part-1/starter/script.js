/*
// Values and Variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);
let firstName = "Jonas";
console.log(firstName);
// constants are written in all UPPERCASE
let PI = 3.1415;
*/

/*
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//below is undefined
let year;
console.log(year);
console.log(typeof year);

year = 2024;

console.log(typeof null);
*/

/*
// let, const, var
let age = 30;
age = 31;

const birthYear = 1995;

// cannot declare empty const
// const job;

// do not use var
var job = 'programmer';
job = 'teacher'

//eventhough below works, you should always properly declare variables
lastName = 'Smith'
*/

/*
// Basic operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
const isFullAge = ageSarah >= 18;
*/


/*
// Operator Precendence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`
console.log(jonas);

// many developers started using using backticks for normal strings
console.log(`Just a regular string`);

// old way of doing multi-line strings. now not used anymore
console.log('String with \n\ multiple \n\ lines');

// Template Literals can be used for multi-line strings which is the new way
console.log(`String
multiple
lines`);
*/

/*
// If /else
const age = 15;
if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000){
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/


/*
// Type conversion
const inputYear = '1991';
// Number(inputYear) will not change the original inputYear
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
// The below will output NaN - this means an invalid number
console.log(Number('Jonas'));
console.log(typeof NaN)
// convert number to string
console.log(String(23), 23);

// Type coercion
// The plus operator will auto-convert number to string
console.log('I am ' + 23 + ' years old');
// The minus operator will auto-convert string to number
console.log('23' - '10' - 3);
// * and / operator will convert string to number
console.log('23' * '2');
console.log('123' < 57); // -> false. will convert to number
*/


/*
// Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// if money is any number/ string, it will become truthy value
const money = 0;
// here JS will convert the condition into a Boolean (coercion)
if(money){
    console.log("Don't spend it all")
} else{
  console.log('You should get a job!')
}

// this can be used to check whether a variable is defined or not
let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
// Equality Operators
const age = '18';
// strict equality operator
if (age === 18) console.log('You just became an adult :D (strict)');
// loose equality operator
if (age == 18) console.log('You just became an adult :D (loose)');

// get values from the webpage
const favorite1 = prompt("What's you favorite number?");
console.log(favorite1) // here favorite is a String
if (favorite1 == 23) { // '23' == 23
  console.log('Cool! 23 is an amazing number')
}

// however, it is better to implement strict equality operator
const favorite2 = Number(prompt("What's you favorite number?"));
console.log(favorite2)
if (favorite2 === 23) {
  console.log('Cool! 23 is an amazing number')
} else if (favorite2 === 7) {
  console.log('Cool! 7 is an amazing number')
} else {
  console.log('Number is not 23 or 7')
}

// difference operator
// this also has strict and loose
if (favorite2 !== 23) console.log('Why not 23?')
*/

/*
// Boolean Logic - no code
*/

/*
// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive')
}
*/

/*
// Switch statement
const day = 'wednesday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
*/


/*
// Statements and Expressions
*/

/*
// Conditional (Ternary) Operator
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// conditional operator becomes an expression
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

// to convert the above into if /else
let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

// ternary operator inside template literal
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)
*/

