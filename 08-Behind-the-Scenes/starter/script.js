'use strict';

/*
// Scoping in practice
function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      // variable loopup in the scope chain will not happen for firstName. Therefore it will not try to access the global variable. Also firstName in this scope and global scope are 2 different variables with the same name
      // this follows the same argument that multiple functions can have the same parameter names since each parameter is defined only in the scope of each function
      const firstName = 'Steven';
      // reassign variable that is accessed from outer scope
      output = 'NEW OUTPUT!';
      const str = `Oh, and you are millenial, ${firstName}`;
      console.log(str);
      // brand new variable with same name as parent class and will not affect the variable from outer scope
      // const output = 'NEW OUTPUT!';
      function add(a, b) {
        return a + b;
      }

    }
    // below will not work because const is block-scoped
    // console.log(str);

    // below will work because var is function scoped
    console.log(millenial);

    // below will not work because functions are block-scoped. This is only true for strict mode
    // add(2, 3);

    // redefine variable accessed from parent scope
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1991);
// dont have access to the below 2
// console.log(age);
// printAge();
*/

/*
// Hoisting in Practice
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// here error message for const and var are different. Var will say "addArrow is not a function" and that is because addArrow will be undefined and it tries to call undefined(2,3)
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// pitfall of hoisting
// here numProducts is undefined and becomes falsy instead of us expecting 0 to be falsy
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

//variables declared with var appears as a property inside the global window object
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// The this Keyword in Practice
// this keyword in global scope is the window object
console.log(this);

const calcAge = function (birthyear) {
  console.log(20 - birthyear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthyear => {
  console.log(20 - birthyear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

// copy calcAge method from jonas to Matilda - method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
console.log(f);

// here f is a regular function and it is not attached to any object
// and this will be undefined just like we saw before
f();
*/

/*
// Regular functions vs arrow functions
// variables declared with `var` creates a property on the global window object
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // // solution 1
    // // this using self is a pre-ES6 solution
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   // the below this will point to undefined because it acts as a regular function call
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    // this works because arrow function uses this keyword from parent scope
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // this will point to global window object
  // if we try to access a property of an object where that property does not exist, it will output undefined
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// argument keywords are only available in regular functions
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
// all the below 4 arguments will be included in the arguments array
addExpr(2, 5, 8, 12);

// argument keywords are not available in arrow functions
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
// arguments keywords are not used in modern JS. We will talk later about this
*/

/*
// Primitives vs objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
// the below will change for both friend and me object
friend.age = 27;
console.log('Friend', friend.age);
console.log('Me', me.age);

// the below does not work. Because it will try to point to a new memory address in stack which is not allowed for const
// friend = {};

// Copying objects
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// the below will copy all properties of jessica into the empty object
// This will only work on first level properties (shallow copy). Which means it will not work if there is another object inside the object
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica);
console.log(jessicaCopy);
*/