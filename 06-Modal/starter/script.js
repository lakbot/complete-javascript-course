'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelector will only select the first element of the same class. querySelectorAll will select all elements of the same class and store as an array
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  // console.log('Button clicked');
  // classlist will choose the classes defined adjescent to modal class
  // multiple classes can be removed 'hidden','abc','hij'
  // dot is not used here
  // this method is normally used to change appearance of websites where adding or removing of classes
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

// keyboard events are global events
// we listen on the whole document
// there are 3 types of events for keyboard - keydown, keypress, keyup
// keyup - fired when lift finger off the key
// keypress - fired continuosly as the key is pressed
// keydown - fired when pressed down on key
// when an event happens, we can have access to the info of that event (event object) in the event handler function
// e will be an event object as an argument to the function
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
