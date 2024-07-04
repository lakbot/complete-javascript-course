/*
// Activating Strict Mode
// this should be the topmost line in the file to work
'use strict';

let hasDriversLicense = false;
const passTest = true;

// strict will say hasDriverLicense is undefined
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');

// keywords in JS that are reserved for future implementations
// const interface = 'Audio';
// const private = 534;
*/

/*
// Functions
function logger() {
  console.log("My name is Jonas");
}

// calling/ running/ invoking the function
logger();
logger();

// parameters inside function
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// arguments inside function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

/*
// Function Declaration vs Expresions
// Function Declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(1995);
console.log(age1);

// Function Expression
// function without a name is an anonymous function
const calcAge2 = function (birthYear){
  return 2024 - birthYear;
}

const age2 = calcAge2(1995);
console.log(age2);
*/

/*
// Arrow Functions
// () are not needed. these were added by prettier
// with one parameter and one line of code
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

// with one parameter and more than one line of code
const yearsUntilRetirement1 = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement1(1995));

// mulitple parameters
const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement2(1995, "John"));
*/

/*
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
// Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    // return will immediately exit the function
    return retirement;
    // it will not reach the below code
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    // -1 is a standard number in programming to signify an error or an invalid state
    return -1;
  }
};

console.log(yearsUntilRetirement2(1995, "John"));
*/

/*
// Introduction to Arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
// access array element
console.log(friends[0]);
// length of array
console.log(friends.length);
// last element of array
console.log(friends[friends.length - 1]);
// Replace element of array
friends[2] = "Jay";
console.log(friends);
// below is illegal
// friend = ['bob', 'Alice];

const firstName = "Jonas";
const jonas = [firstName, "William", 2037 - 1991, "teacher", friends];
console.log(jonas);

// exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years2 = [1990, 1967, 2002, 2010, 2018];
// below will not work because inside return, 2037 - birthYear cannot handle number- array computation
console.log(calcAge(years2));

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
console.log(age1, age2);

// if we start with an array, it is a good idea to end with a new array
const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[2])];
console.log(ages);
*/

/*
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];
// add element to the end of the array
// here push is a method/ function
friends.push("Jay");
console.log(friends);
// .push will return the length of the new array
const newLength = friends.push("Jason");
console.log(friends);
console.log(newLength);
// add element to the beginning of the array
// unshift also returns length of array just like push
friends.unshift("John");
console.log(friends);
// remove last element of array
friends.pop();
console.log(friends);
// pop will return the removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);
// remove first element of array
// it will return the element that was removed
friends.shift();
console.log(friends);
// return the index of the first occurance element
console.log(friends.indexOf("Steven"));
// will return -1 if the element is not there in the array
console.log(friends.indexOf("Bob"));
// will return true/ false based on element availability
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
// here it uses strict equality. it does not do type coercion
friends.push(23);
console.log(friends);
console.log(friends.includes("23"));
//can use includes inside conditionals
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

/*
// Introduction to Objects
// This is called object literal syntax
const jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
*/

/*
// Dot vs Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// dot notation
console.log(jonas.lastName);
// bracket notation
console.log(jonas["firstName"]);
// Can put any expression inside bracket notation
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? CHoose between firstName, lastName, age, job, and friends"
);
// output of below will be undefined
// we get undefined if we try to access a property on an object that does not exist
// console.log(jonas.interestedIn);

// so we use bracket notation
// console.log(jonas[interestedIn]);
// to handle situations where property does not exist
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("The property does not exist");
}

// add new properties to the object
jonas.location = "Portugal";
jonas["twitter"] = "@jonas";
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

/*
// Object Methods
// adding functions to objects as values
// Any function that is attached to an object is called a method
// calcAge property has a function value
const jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  birthYear: 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // },

  //'this' keyword is equal to the object calling the method
  // calcAge: function () {
  //   console.log(this);
  //   // here you cannot do jonas.birthyear because if the object name jonas changes, it will not work
  //   return 2025 - this.birthYear;
  // },

  // creating a new property using 'this' keyword
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
};

// console.log(jonas.calcAge(1995));
// console.log(jonas["calcAge"](1995));

// the above 'this' inside jonas object will work because jonas is the object calling the method calcAge. SO the below jonas.calcAge() is important for the 'this' keyword to work
console.log(jonas.calcAge());
// result of creating a property using this.age inside jonas object
console.log(jonas.age);
*/

/*
// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
const jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  birthYear: 1995,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.getSummary());
*/

/*
// The for Loop
// let rep=1 is the counter
// rep <= 10 will be evaluated before each iteration of the loop
// first rep++ will happen after every iteration and then go for the evaluation check
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep}`);
}
*/

/*
// Looping arrays, breaking, continuing
const jonas = [
  "Jonas",
  "Smith",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

//empty array
const types = [];

for (let i = 0; i < jonas.length; i++) {
  // reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // method 1 of filling types array
  // types[i] = typeof jonas[i];
  // method 2 of filling types array
  // here push should be used, not
  types.push(typeof jonas[i]);
}

console.log(types);

// example
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
// continue will exit the current iteration of the loop and continue to the next one
console.log("--ONLY STRINGS--");
for (let i = 0; i < jonas.length; i++) {
  // print only the strings
  if (typeof jonas[i] !== "string") {
    continue;
  }
  console.log(jonas[i], typeof jonas[i]);
}

// break will completely terminate the whole loop
console.log("--BREAK WITH NUMBER--");
for (let i = 0; i < jonas.length; i++) {
  // break at the number
  if (typeof jonas[i] === "number") {
    break;
  }
  console.log(jonas[i], typeof jonas[i]);
}
*/

/*
//Looping Backwards and Loops in Loops
// Looping backwards
const jonas = [
  "Jonas",
  "Smith",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋️`);
  }
}
*/

/*
// The while loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights repitition ${rep}`);
  rep++;
}

// Math.trunc will remove the decimal
// Math.random will generate a random number between 0 and 1
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
*/