High-Level Overview of JavaScript 

High-level:
  - In low level langauges such as C, developer has to manage resources manually (ex: ask computer for memory to create a new variable)
  - In high level languages such as JS, Python, developer does not have to manage resources, because these languages have abstractions that take all of that work away from us. Programs will never be as fast and optimized as C.
Garbage-collected
  - Taken memory management away from developers (JS has it). Cleaning the memory from time to time.
Interpreted or just-in-time compiled 
  - Change source code to machine code (compiling). This happens inside JS engine
Multi-paradigm
  - Pradigm: An approach and mindset of structuring code, which will direct your coding style and technique
  - Paradigms can be classified as imperative vs declarative
  - 3 popular paradigms
    - Procedurral programming - organizing in linear way
    - Object-oriented programming (OOP)
    - Functional programming (FP)
Prototype-based object-oriented
  - Almost everything in JS is an object except for primitive values
  - ex: Arrays are built from prototypes. Arrays inherrit methods from prototype
First-class functions
  - In a language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions.
Dynamic
  - Dynamically-typed language
    - No data type definitions. Types becomes known at runtime.
    - Data type of variable is automatically changed
    - Same is not true for like C, Java
    - Typescript is strongly-typed langauge
Single-threaded and non-blocking event loop concurrency model
  - Concurrency model: how the JS engine handles multiple tasks happening at the same time
    - JS runs in one single single thread, so it can only do one thing at a time
    - A thread is a set of instructions that is executed inside the CPU
    - Non-blocking behavior is achieved using an event loop, which takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.


The JS Engine and Runtime

- JS Engine is a computer program that executes JS code
- Every browser has its own JS engine
  - Most famous one is Google's V8 Engine powering Google Chrome and Node.js
- JS Engine has a CALL STACK and a HEAP
  - Call Stack is where our code is executed
  - Heap is where the objects are stored (essentially objects stored in memory)
- Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer. Execution can happen way after compilation.
- Interpretation: Interpreter runs throuh the source code and executes it line by line. Code converts to machine code right before execution.
- JS used to be purely interpreted. Problem is interpreted languages are much slower than compiled lnaguages. 
- Just-in-time (JIT) compilation: Modern JS use a mix between compilation and interpretation. Entire code is converted into machine code at once, then executed immediately.
- JIT compilation
  - code enters the engine
  - parse the code (reads the code) into a data structure called Abstract Syntax Tree (AST)
    - this works by first splitting up each line of code into pieces that are meaningful to the language (const, function keywords), then saving all these pieces into a tree in a structured way. This also checks for syntax errors. The resulting tree will later be used to generate machine code.
  - next step is compilation: takes the generated AST and compiles into machine code
  - then machine code gets executed right away. this happens in the call stack
  - modern JS engines create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible. Then in the background, this code is being optimized and recompiled during the already running program execution. This can be done multiple times and after each optimization, the unoptimized code is simply swapped for the new more optimized code without ever stopping execution.
  - All parsing, compilation, execution, optimization happens in special threads that we cannot access from code. So completely separate from main thread that is running in call stack executing our code.
- JS Runtime
  - JS runtime is a container including all the things that we need to use JS (in our case, in the browser)
    - contains JS engine 
    - contains WEB APIs
    - Callback queue
  - the heart of every JS runtime is an JS engine
  - without an engine there is no runtime and there is no JS
  - engine alone is not enough. we also need access to the web APIs.
  - web apis are functionalities provided to the engine (accessible on window object), but which are actually not part of JS language
  - Callback queue is a data structure that contains all the callback functions that are ready to be executed. for example: callback function from DOM event listener. when call stack is empty, callback function is passed on to the stack to be executed. Event loop takes callback functions from callback queue and puts them into call stack to be executed.

Execution Contexts and the Call Stack

- After compiling, it is ready to be executed.
  - Here a global execution context is created for top-level code. Top-level code is code which is not inside a function. 
  - Execution context is an environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed (contains local variables, arguments passed into a function, etc). 
  - JS code always run inside an execution context
  - Exactly one global execution context is there. Default context, created for code that is not inside any function (top-level)
  - after execution of top-level code inside global EC, execution of functions will be done along with waiting for callbacks
  - For each and every function call, a new execution context will be created. Same is for methods
  - All the execution context together makes up the call stack
  - What's inside execution context?
    - Variable Environment
      - let, const, var declarations
      - Functions 
      - arguments object
    - Scope chain: consists of reference to variables located outside of the current function. To keep track of scope chain, it is stored in each execution context.
    - Each context gets a special variable called this keyword
  - The above 3 are generated during creation phase, right before execution
  - Execution contexts belonging to arrow functions do not get their own arguments object and this keyword
    - Instead they can use arguments object and this keyword from their closest regular function parent
  - Technically, values only become known during execution
- Call stack is a "place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution

Scope and Scope Chain

- Scoping: How our program's variables are organized and accessed. "Where do variables live? or "Where can we access a certain variable, and where not?"
- Lexical scoping: Scoping is controlled by placement of functions and blocks in the code
- Scope: Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope and block scope
- Scope of a variable: Region of our code where a certain variable can be accessed 
- 3 Types of scope
  - Global scope 
    - Outside of any function or block
    - Variables declared in global scope are accessible everywhere
  - Function scope
    - Variables are accessible only inside function, Not outside
    - Also called local scope
    - var is function-scoped
  - Block scope (ES6)
    - For example: if, for loop, while loop, etc.
    - Variables are accessible only inside block (block scoped)
    - However, this only applies to let and const variables
    - Functions are also block scoped (only in strict mode)
- Scope Chain
  - Scope has access to variables from all outer scopes. This applies to function arguments as well.
  - scopes looking for variables in outer parent scopes are called as variable lookup in scope chain
  - Sibling scopes cannot have access to each other's variables. Such as in the slide the if purple scope and second() function scope
  - The scope chain has nothing to do with the order in which functions were called
 
Variable Environment: Hoisting and the TDZ

- Hoisting: Makes some types of variables accessible/ usable in the code before they are actually declared. "Variables lifted to the top of their scope".
- Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.
  - Function declarations are hoisted and the initial value is the actual function
  - var variables are hoisted and the initial value is undefined. This means eventhough a var varible is initialized down below the code, when we try to access above it, it throws undefined
  - let and const variables are not hoisted. This means when they are initialized down below the code, and when we try to access them above it, there value is uninitialzed. We say these values are placed in a TDZ (temporal dead zone). So we get an error
  - Function expressions and arrows depends on if using var or let/const. Therefore same rules apply as above.
- Temporal Dead Zone, Let and Const
  - if variable used before initialized, it will throw "ReferenceError: Cannot access '<variable_name>' before initialization"
  - if variable is not declared/ initialized. it will throw "ReferenceError: '<variable_name>' is not defined
  - Why TDZ?
    - Makes it easier to avoid and catch errors: accessing variables before declaration is bad practise and should be avoided
    - Makes const variables actually work
- Why hoisting?
  - Using functions before actual declaration 
  - var hoisting is just a byproduct

The this keyword
- this keyword/ variable: Special variable that is created for every execution context (every function). Takes th value of (point to) the "Owner" of the function in which the `this` keyword is used.
- `this` is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.
  - Method: this = <Object that is calling the method>
  - Simple function call: this = undefined. Only in strict mode. Otherwise, will be in the window object
  - Arrow functions: this = <this of surrounding function (lexical this)>. Arrow functions do not get their own this but rather the parent function (parent scope) of it.
  - Event Listener: this = <DOM element that the handler is attached to>
- `this` does not point to the function itself, and also not its variable environment

Regular functions vs Arrow functions
- variables declared with `var` creates a property on the global window object

Primitives vs objects
- Primitives are called primitive types
  - Number, String, Boolean, Undefined, Null, Symbol, BigInt
  - Primitives are stoed in execution context of CALL STACK
  - variables point to memory address which hold the value
    - value at a certain address is immutable
- Objects are called reference types
  - Object literal, Arrays, Functions
  - Objects are stored in the HEAP of JS Engine
  - variable point to memory address which hold a reference to memory address in HEAP
- Topics for later
  - Prototypal Inheritance: Object Oriented Programming (OOP) with JS
  - Event Loop: Asynchronous JS: Promises, Async/ Await and AJAX
  - How the DOM Really Works: Advanced DOM and Events

