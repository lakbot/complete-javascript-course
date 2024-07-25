'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
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



// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
