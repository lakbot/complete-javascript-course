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

// ----- Game Code ------- //

// Define the secret number
// Here random is a method of the Math object
// number between 0 and 20 after removing the decimal
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// start with 20 as the initial score
let score = 20;
let highScore = 0;

// addEventListener method attaches an event handler with a function () value. This function will not load when JS loads but rather only when the event happens
// 'click' is the name of the event we are listening for
document.querySelector('.check').addEventListener('click', function () {
  // value of an input is always a string
  // convert string to number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // first scenario is to assume there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number!';
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    // In JS, background-color will be backgroundColor
    // Same applies to all other properties with multiple words
    // When manipulating a style, always need to specify a string. this will be inline style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // set high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥you lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

///////////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😊
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
