Destructuring Arrays
- Destructuring is an ES6 feature
- Break a complex data structure down into a smaller data structure (variables)
- Original array does not get affected by destructuring

Spread Operator
- It can be used to expand an array into all its elements
- Difference between destructuring and spread operator is that the spread operator takes all the elements from the array and it also does not create new variables. It can only be used in places where we would otherwise write values separated by commas.
- Spread operator works on all iterables
  - Iterables: arrays, strings, maps, sets, but not objects
- Spread operator can only be used when buildng an array or pass arguments to a function