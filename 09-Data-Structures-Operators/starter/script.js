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
