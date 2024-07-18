'use strict';

// Scoping in practice

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      // variable loopup in the scope chain will not happen for firstName. Therefore it will not try to access the global variable. Also firstName in this scope and global scope are 2 different variables with the same name
      const str = `Oh, and you are millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // redefine variable that is accessed from parent scope
      output = 'NEW OUTPUT!';
      // brand new variable with same name as parent class

    }
    // below will not work because const is block-scoped
    // console.log(str);

    // below will work because var is function scoped
    console.log(millenial);

    // below will not work because functions are block-scoped. This is only true for strict mode
    // add(2, 3);

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
