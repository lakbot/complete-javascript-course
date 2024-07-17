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

