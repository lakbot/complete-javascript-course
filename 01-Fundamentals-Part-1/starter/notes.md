- Javascript is a high-level, object-oriented, multi-paradigm programming language
- High level meaning we dont have to worry about complex stuff like memory management
- Multi-paradigm - we can use different styles of programming

Values and Variables
- semicolon in JS is not a must, but it is better to use
- variable names can only contain letters, numbers, underscore, dollar sign
- reserved keywords cannot be used for variable names (function)
- name variable properly

Data Types
Primitive Data Types:
// Number
let age = 23;
// String
let lastName = "Smith";
// Boolean
let fullAge = true;
// Undefined - when we declare an empty variable, the value and type of value will be undefined
let children;
// Null - null is similar to undefined . Both value and type of value will be undefined. console.log(typeof null) will output "object" which is regarded as a bug. This was never corrected for legacy reasons.
// Symbol - introduced in ES2015 and not useful now
// BigInt - introduced in ES2020 - larger integers which can hold more than Number type
- JS has dynamic typing. We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

let, const, var
- let, const were introduced in ES6
- var is old way of declaring variables and it allows you to declare a variable with the same name twice, which is an issue
- reassign variables also known as mutate variables. let is mutable. const is immutable.
- cannot declare empty const
- it is best practise to use const all the time. Use let only when you know the variable is going to change. it is good practise to have as little variable mutations as possible. 
- var should be avoided. It can only be seen in old code. Prior to ES6

Basic operators - not notes here

Operator Precendence
- Javascript has a well defined order of operator precedence
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

Strings and Template Literals
- Template Literals is an ES6 feature

If /else
- Add emoji inside the string with (windows + period)
- This is called an if/else control structure because this structure allows us to have more control rather than linear flow of code
- else is optional. When "if" is false, it will just skip the code block

Type Conversion and Coercion
- Type Conversion - manually convert from one type to another
- Type coercion - automatically convert from one type to another behind the scenes
- We can only convert to a number, string, boolean
- Type coercion can result into unexepected bugs in the code

Truthy and Falsy Values
- There are 5 falsy values: 0, '', undefined, null, NaN.
- All of the above will be converted to false when we attempt to convert them to a boolean
- Everything else will be Truthy (any number that is not zero and any string that is not empty)

Equality Operators
- === - strict equality operator (doesnt do type coercion)
- == - loose equality operator (does type coercion)
- '18' == 18 is true
- '18' === 18 is false
- Better to use strict equality operator always

Boolean Logic
- AND : true when ALL are true, no matter how many variables
- OR : true when ONE is true
- NOT : inverts true/ false
- NOT will have high precedence than AND, OR

Logical Operators - no notes

Switch statement
- If break is not used, the next case statement will automatically execute
- it does strict comparison

Statements and Expressions
- anything that produce a value is an expression
ex:-
3 + 4
1991
true && false
'hello world'
- statement does not produce a value on itself. perform some action (whenever it finishes with a semicolon)
ex:-
declaration
if/ else
switch
- template literals only allow expressions. for example inside ${} should have something that produces a value

Conditional (Ternary) Operator
- Only one if and else inside. therefore ternary operator cannot replace if /else
- Operator always produces a value
- therefore this is an expression
- this operator can be used to conditionally declare variables
- since it is an expression, ternary operator can be used inisde a template literal

Javascript releases: ES5, ES6+ and ESNext
- all ES versions are backwards compatible. They are not forward compatible (New JS will not run in old browser)
- Use the latest Google Chrome during development
- Use Babel to transpile and polyfill your code during production (convert back to ES5 to ensure browser compatibility for all users)