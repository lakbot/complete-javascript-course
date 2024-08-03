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

Looping Arrays: The for-of Loop
- This was introduced in ES6

Enhanced Object Literals
- This was introduced in ES6

Optional Chaining (?.)
- This was introduced in ES2020
- If a certain property does not exist, undefined is returned immediately

Looping Objects: Object Keys, Values, Entries

Sets
- ES6 introduced this data structure
- Set is a collection of unique values
- Cannot have duplicates
- Set can hold mix data types
- Sets are Iterables
- order of elements in a set is irrelavant
- there are no indexes in sets
- If all values are unique and order doesnt matter, there is no need to retrieve values from a set. We just need to know whether a certain element is included in a set
- Main usecase of sets is remove duplicate values of arrays
- sets are not intended to replace arrays

Maps: Fundamentals
- It is a data structure which can be used to map values to keys
- Different with object is, in maps, the keys can have any type

Maps: Iteration - no notes

Summary: Which data structure to use?
- Collections of data is stored in data structures
- Creating an array of objects is common in JS

Working with Strings - Part 1
- Strings are primitives and they are not supposed to have methods like arrays (objects)
- When we call a method on a String, JS will auto-convert the String primitive to a String object with the same content. Then the methods are called on that object. This process is called boxing. When the operation is done, the object is converted back to a regular String primitive

