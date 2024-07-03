Activating Strict Mode
- It is a special mode that you can activate in JS which makes it easier for us to write secure JS code
- strict mode forbids us to do certian things
- strict mode will show visible errors. without this mode, it will fail silently
- it can catch undefined variables
- it can catch keywords in JS that are reserved for future implementations

Functions
- functions allows us to create maintainable code
- DRY (dont repeat yourself) code

Function Declaration vs Expresions
- Function is not a type (ex:-String, Number) but it is a value in JS
- In Function declaration, function can be called before they are defined in the code. But it is not good practise
- You cannot do the above in Function expression
- The instructor here uses function expressions

Arrow Functions
- this was added in ES6
- this is also a function expression
- return can only be omitted if it a one liner function

Functions Calling Other Functions - no notes

Reviewing Functions - no notes

Introduction to Arrays
- Arrays are a data structure. The other important data structure in JS is objects
- Only primitive values are immutables. Arrays are not primitive values, so they can be mutated. This means even though arrays are declared using const, we can mutate the elements inside. However you cannot assign the same array again with different elements.
- Array can hold elements of different data types and each element can accept an expression. Also can accept a variable. Also can accept another array

Basic Array Operations (Methods)- no notes

Introduction to Objects
- Objects have key (property), value pairs
- arrays should be used for orderd data and objects should be used for unstructured data

Dot vs Bracket Notation
- Multiple dots are executed from left to right

Object Methods
- In every method, JS gives us access to a special variable called this
- Arrays can also be considered as objects because we can access methods in arrays such as arrayName.pop()

The for Loop
- Loops are a control structure
- when we loop over an array, it looks the same for all arrays

Looping arrays, breaking, continuing - no notes

The while loop
- While loop does not need a counter
- Normally we use this when you do not know how many interations the loop will have
