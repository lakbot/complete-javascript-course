'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // compute property names
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  // the above before ES6 was
  // openingHours: openingHours,

  // new way of writing methods according to ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructure inside a function
  // defaults can be set here as well
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// Destructuring Arrays
// without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// with destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

// below the second element will be skipped
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// switching varibles with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
// Immediately create 2 variables out of one function call
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// destructuring nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// set default values for the variables when we are extracting them. That is going to be very useful in the case where we do not know the length of the array.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/*
// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructure with your own variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// set default values
// without default, if property does not exist, it will output "undefined"
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// the below will give syntax error because if we start with paranthesis, JS expects a code block. So here we cannot assign anything to a code block
// {a,b} = obj;
// the below can fix it
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Pass arguments as an object inside method (function invocation) so that it can be destructured inside the function definition up above
restaurant.orderDelivery({
  time: '22:30',
  address: 'New Street',
  mainIndex: 2,
  starterIndex: 2,
});
*/

/*
// The Spread Operator
const arr = [7, 8, 9];
// Traditional way of adding new elements to the front of array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// Using spread operator for the above task
const newArr = [1, 2, ...arr];
console.log(newArr);
// when passing arguments to functions
console.log(...newArr);
// The above is same as
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// use case - create shallow copy of arrays. This is like Object.assign we learnt earlier
const mainMenuCopy = [...restaurant.mainMenu];
// use case - join 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// spread operator on a string
const str = 'Jonas';
const letters = [...str, ' ', 'S. '];
console.log(letters);
console.log(...str);
// the below does not work
// console.log(`${...str} Schmedtmann`);

// using spread operator in functions
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);
// old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// new way
restaurant.orderPasta(...ingredients);

// spread operator also works in objects since ES2018 although objects are not iterables
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// create shallow copy of objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
// Rest Pattern and Parameters
// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// Combine spread and rest
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// it also works in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 4, 5);
add(3, 6, 7, 8, 9, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
// Short Circuiting (&& and ||)
// || operator
console.log('----OR----');
// if first operand is truthy, it will return that value
// here short-circuit happens where if first operand is truthy, it will not look at second operand
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// if restaurant.numGuests = 0, the below 2 will not work becauseit a falsy value
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// the above can be done using short-circuiting and || operator
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// && operator
console.log('----AND----');
// if first operand is falsy, it will return that value
// here short-circuit happens where if first operand is falsy, it will not look at second operand
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.order('mushrooms', 'spinach');
}
// replace above with &&
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
// Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// this works with the concept of Nullish values: null and undefined. Does not include 0 or ''
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONMOUS>';
// rest2.owner = rest2.owner && '<ANONMOUS>';
// AND assignment operator
// Assign a value to a variable if it is truthy. here when rest1.owner is undefined, it will skip it. But above, it output as undefined.
rest1.owner &&= '<ANONMOUS>';
rest2.owner &&= '<ANONMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
// Looping Arrays: The for-of Loop
// loop over the entire array
// for-of loop allows for continue and break
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// get the current index as well
for (const item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// the above can be re-written using destructuring
for (const [i, el] of menu.entries()) {
  // console.log(item);
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

/*
// Enhanced Object Literals
// 1. Writing objects inside objects. It can be seen at the very top of this code
// 2. Writing methods. It can be seen at the very top of this code
// 3. Property names can be computed. It can be seen at the very top of this code
*/

/*
// Optional Chaining (?.)
// without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// console.log(restaurant.openingHours.mon.open);

// with optional chaining
// only if the property before the question mark exists (mon), then the open property will be read from there. If not, undefined will be returned immediately. Exists here means the nullish concept (not null, not undefined)
console.log(restaurant.openingHours.mon?.open);

// can have multiple optional chainings
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// loop over array and check whether restaurant is closed or open on each of the days
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// optional chaining on methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// optional chaining on arrays
// use to check whether an array is empty
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];
console.log(users[0]?.name ?? 'User array is empty');
*/

/*
// Looping Objects: Object Keys, Values, Entries
// property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

console.log('---ENTRIES---');
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
// string with sets - since strings are Iterables
console.log(new Set('Jonas'));
// set can be empty
console.log(new Set());
// size of set
console.log(ordersSet.size);
// check if element is in the set
// similar to includes method in arrays
console.log(ordersSet.has('Pizza'));
// add element to set
ordersSet.add('Garlic Bread');
// delete element from set
ordersSet.delete('Risotto');
// delete all elements of the set
// ordersSet.clear();
// sets are Iterables and therefore we can loop over them
for (const order of ordersSet) {
  console.log(order);
}
// Example- remove duplicates of arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// convert from set to array 
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// oiutput number of letters in a string
console.log(new Set('jonasteacher').size);
*/

/*
// Maps: Fundamentals
const rest = new Map();
// rest.set will also return the updated map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
// rest can be chained because rest.set return the map
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');
// read data from map
console.log(rest.get('name'));
console.log(rest.get(true));
// example
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// check if map contains a certain key
console.log(rest.has('categories'));
// delete element from map
rest.delete(2);
// size of map
console.log(rest.size);
// example
rest.set([1, 2], 'Test');
// the below will not work because [1, 2] above and below are not the same object in the HEAP
console.log(rest.get([1, 2]));
// to fix the above, below is done
const arr = [3, 4];
rest.set(arr, 'Test');
console.log(rest.get(arr));
// here arr in both situations refer to the same place in memory

// maps in DOM elements
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
// remove all elements
// rest.clear();
*/

/*
// Maps: Iteration
// add elements using array of arrays
const question = new Map([
  ['question', 'What is the best programming langauge in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
// the below also output array of arrays
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
// Iteration is possible because maps are Iterables
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
// example
console.log(question.get(answer === question.get('correct')));
// convert map back to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
// Working with Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
// getting a character at a specific position
console.log(plane[1]);
console.log('B737'[0]);
// getting length of string
console.log(airline.length);
console.log('B737'.length);
// methods in strings
// methods will not change the original string because strings are immutable
// below is case-sensitive
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
// extract part of string
// pass in begin parameter for extraction
// result is called a substring
console.log(airline.slice(4));
// 7 is excluding
// length of exteracted string = end - beginning = 7-4
console.log(airline.slice(4, 7));
// extract strings without knowing the lengths
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// start extracting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
// exercise
// receives an airplane seat and logs whether it is middle seat or not. Here we consider B and E as middle seats in a 6 seats in a row airplane
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E'){
    console.log("You got the middle seat 😬");
  }
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// below is boxing
console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/

/*
// Working with Strings - Part 2
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = 'hello@jonas.io';
// \n is an enter character
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
// below will delete all whitespaces and the enter character
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// do all of the above in one line
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replace parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// replace only the first occurance
console.log(announcement.replace('door', 'gate'));
// using regular expressions to target all occurances
// g means global
console.log(announcement.replace(/door/g, 'gate'));

// methods that return booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));
console.log(plane2.startsWith('A3'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// practice exeercise
// if baggage is to be allowed on the plane
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed onboard');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
// Working with Strings - Part 3
// split method - split string into multiple parts based on a divider string
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schemdtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schemdtmann'.split(' ');
// make last name uppercase and add Mr
const newName = ['Mr.', firstName, lastName.toUpperCase()].join('-');
console.log(newName);
// capitalize names
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('lakshantha dissanayake');
// padding a string
const message = 'Go to gate 23!';
// 25, 30 are the max length after the padding
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));
// note: padEnd(20) andpadEnd(20, ' ') has same result


// example - masking credit card numbers
const maskCredit = function (number) {
  const str = number + ''; // same as String(number)
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCredit(43353453453453535));
console.log(maskCredit('8923080943482058924'));

// repeat method
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));
// planes waiting for takeoff
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
*/

/*
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '✈️' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
  */
