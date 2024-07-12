'use strict';

/* // querySelector() is a method available on document object
console.log(document.querySelector('.message').textContent);
// change the content inside the element
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// set value into input
document.querySelector('.guess').value = 23;
// get value from input
console.log(document.querySelector('.guess').value); */

// addEventListener method attaches an event handler with a function () value. This function will not load when JS loads but rather only when the event happens
// 'click' is the name of the event we are listening for
document.querySelector('.check').addEventListener('click', function () {
  // convert string to number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // first scenario is to assume there is no input
  if (!guess){
    document.querySelector('.message').textContent = '⛔No number!'
  }
});
