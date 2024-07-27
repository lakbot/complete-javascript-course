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

Rest Pattern and Parameters
- Collect multiple elements and condense them into an array
- Spread operator unpacks elements from Array whereas Rest operator packs elements into an Array
- it collects elements that are unused in the destructuring assignment. does not include skipped elements. Only include the last elements. Therefore Rest pattern should always be the last in the destructuring assignment
- There can only be one rest in the destructuring assignment
- spread operator is used where we would otherwise write values separated by a comma. rest pattern is used where we would otherwise write variable names separated by commas.

Short Circuiting (&& and ||)
- Logical operators use any data type, return any data type, can do short-circuit evaluation 
- && works exact opposite wa of || in short-circuiting

Nullish Coalescing Operator
- This was introduced in ES2020

Logical Assignment Operators
- This was introduced in ES2021