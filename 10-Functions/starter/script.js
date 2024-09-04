'use strict';

const bookings = [];

/*
// Default parameters
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // for example, if numPassengers is not assigned above, it will be undefined, and short circuiting will happen below.
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    // below is same as flightNum: flightNum
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
// skip a parameter in the middle to keep as default
createBooking('LH123', undefined, 1000);
*/

// Passing Arguments: Value vs Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 234345345,
};

const checkIn = function (flightNum, passenger) {
  
};

checkIn(flight, jonas);
