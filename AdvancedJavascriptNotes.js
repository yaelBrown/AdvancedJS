/*
  File is written to not be ran.
  Only use this for notes.
*/

console.log("hello");

/*
  jsbin.com - online js editor
*/

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template Strings
console.log(`My name is ${name} and I am ${age}`);

// string properties https://devdocs.io/javascript-string/
str.length // gets lengtth
str.toUpperCase() // gets uppcase
str.substring(0,5) // starts at 0 ends at 5.
  // there are more, goto link. methods can be concatenated.

// array constructor https://devdocs.io/javascript-array/
const numbers = new Array(1,2,3,4,5);

const fruits = ['apples', 'oranges', 'pears'];

  // can have different datatypes in array


// Object literals are key value pairs (ES6) https://devdocs.io/javascript-object/
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

  // Just print out movies
person.hobbies[1];

// Destructuring. Array Destructuring you pull them out by position. For object destructuring you pull them out by their property name.

const { firstName, lastName } = person;   // creates variable firstName with value John... etc

const todos = [
  {
    id: 1,
    text: 'take out trash',
    isCompleted: true
  },
  {
    id: 1,
    text: 'take out trash',
    isCompleted: true
  },
  {
    id: 1,
    text: 'take out trash',
    isCompleted: true
  }
];

const todoJSON = JSON.stringify(todos); // prints out string version of the object (what API's require/do)

// Basic for loop
for (let i = 0; i < 10; i++) {    // 'let i = 0' assigment of iterator, 'i < ' is the conditition that has to be met. 'i++' is the increment
  console.log(i);
};

// Basic while loop
let i = 0; // set iterator variable outside of the loop.
while(i < 10) {
  console.log(i);
  i++; // have to increment i, or have never ending loop
}

// high order array methods: forEach, map, filter (functional programming, very powerful)
todos.forEach(function() {  // They take in functions
  console.log(todo.text);
});

// returns a array
const todoText = todos.map(function(todo) { // assigns to
  return todo.text;
});

console.log(todoText);

// filter
const todoText = todos.filter(function(todo) { // assigns to
  return todo.isCompleted === true;
});

console.log(todoText);

/*
  if you do number with or statement, computer only reads number first then prints it out.
  12 || true // 12
  12 && true // true

  With mixed datatype:
    || shows first value
    && shows second value
*/

// || is logical OR. [condition] || [condition], both either one of the conditions have to be true for statement to be true.

// && is logical AND. [condition] && [condition], both conditions have to be true for statement to be true

// '?' ternary operator (shorthand if statement), used often to assign variables based on a condition
const color = x > 10 ? 'red' : 'blue'; // if true color will be red, if false color will be blue.
  // condition ? true : false

// Set default value for parameters in functions
function addNums (num1 = 1, num2 = 1) {
  console.log(num1+num2);
}

addNums(); // should return 2

// var [variable name] = (parameters) => return ...;
// Don't need parenthesis if you have one argument.
//  var fn = a => a + 5;


// convert to arrow function (fat arrow)
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// Date Object https://devdocs.io/javascript-date/
let date = new Date();

// classes do the same thing as Constructor functions
function person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Same as above but written with class (easier to write, more organized. 'Syntactic sugar')
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

/* rest operator turns a parameter into an array */
// "...var"

function sumUp(...toAdd) {
  console.log(toAdd);    // [100, 10, "20"]
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp(100, 10, "20"));    // "11020"

// Spread is used to split up an array into a list of values. (where as rest is used to take a list of values and convert to array).

let numbers = [1,2,3,4,5];

console.log(Math.max(numbers));    // NaN

console.log(Math.max(...numbers)); // 5

// for-of loop, shorthand for printing out a array. Without having to do a long for loop.

let testResults = [1.23, 1.10, 4.1];

for (let testResult of testResults) {
  console.log(testResult); // prints: 1.23   1.1   4.1
}

// template litterals are used to dynamically output values. (Good for if the variable is multi-lined)
// can escape the variable using a backslash and it will display the code as a string.

let name = 'Yael';

let description = `
  Hello, I'm ${name}
`;

console.log(description);




/* ES6 has module support built in. Does not run natively in browser yet, needs a complier like Traceur. */
// modules dont have a shared, global scope. Instead each module has its own scope.

// Concept of modules is being able to use more than one js file. Export and Import functionality
// 1.js
export let keyValue = 1000;

// 2.js
import {keyValue} from './1.js'; // usually you just import from just the module name.

/* can export functions.... anything from file.
  you are not importing the value, you are importing the references to them.
*/

/* inheritance is about having a parent blueprint and creating specific blueprints from that */
// Purpose is to prevent writing same code mulitple times.

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
  }
}

class Max extends Person {
  constructor(age) {
    super('Max');
    this.age = age;
  }
}

let max = new Max(27);

// Extending lets you use all features classes that the parent class creates.
// Can call methods from the parent using super.[parameter].

/* add static to methods within classes, in order to use them without creating a new object. */

class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

Helper.logTwice("cool");

// using getters and setters in js

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {     // getter for name
    return this.)name.toUpperCase();    // can control the output of name with a getter (benefit)
  }

  set name(value) {    // setter for name
    if (value.length > 2) {
      this._name = value;
    }
    console.log('Rejected!');
  };
};

let person = new Person('Yael');

console.log(person.name);

person.name = 'browne';

console.log(person.name);

// Can extend classes with subclassing.
//   Array is subclassable
//   RegExp is subclassable
//   Function is subclassable
//   Promise is subclassable
//   Miscellaneous is subclassable




/*
Symbols are a new primitive type and they present a unit identifier.
Used for storing Meta data of an object.
Symbols are identifier for object properties. That's the datatypes only purpose.
Often referred to as "Symbol Value"
'Meta programming'
Well known symbols are on the MDN.
*/

let symbol = Symbol('debug');
console.log(Symbol);    // displays a object called symbol

let obj = {
  name: 'Yael',
  [symbol]: 27
}

console.log(obj);    // Will print out object with name, but not show symbol.
console.log(obj[symbol]);    // will explicitly show only the symbol.

// There are unique id's for symbols. Or reused id's.

let symbol1 = Symbol.for('age');    // shared symbols
let symbol2 = Symbol.for('age');

console.log(symbol1 == symbol2);    // true

let person = {
  name: 'Yael'
}

function makeAge(person) {
  let ageSymbol = Symbol.for('age');
  person[ageSymbol] = 27;
}

makeAge(person);

console.log(person[symbol1]);    // 27

// Symbol properties do not override object properties of the same name.




/*
Iterators and Generators
Iterators - know how to access values in a collection one at a time. (Ex: An array)
Generators - a function that does not run to the end when you execute it.
*/

let array = [1, 2, 3];

console.log(typeof array[Symbol.iterator]);     // "function"

let it = array[Symbol.iterator]();

// iterator steps through the array.

console.log(it);    // [object Array Iterator]
console.log(it.next());    // [object Object] { done: false, value: 1 }
console.log(it.next());    // [object Object] { done: false, value: 2 }
console.log(it.next());    // [object Object] { done: false, value: 3 }
console.log(it.next());    // [object Object] { done: true, value: undefined }

// generator

function *select() {     // add the star infront of its name, turns it into a generator
  yield 'house';
  yield 'garage';
}

let it = select();
console.log(it.next());     // returns a object.




/*
  Promises - Are useful helpers objects to help with asynchronous tasks
    The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
    Was not apart of ES5.
    Callback Hell
    Can chain promises
    Now officially built into ES6
*/

let promise = new Promise(function(resolve, reject) {    // reject is for when the promise fails
  setTimeout(function() {
    resolve('Done!');    // It's passed to parameter resolve
  }, 1500);    // Time is in miliseconds
});

prmoise.then();    // Run this when promise is done. Typically used to handle code that you recieved from promise.

// Promises can be chained.
function waitASecond(seconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      seconds++;
      resolve(seconds);
    }, 1000);
  })
}

waitASecond(0)
  .then(waitASecond)
  .then(function(seconds) {
    console.log(seconds);
  })

// Promise.all - Combines all promise into one promise. Wait for all promises finish. Only if all are finished, then all() with run.
// Promise.race - Waits for the first promise to finish then runs race().




/*
  Object Extensions - are the functions for built in objects. For example: Math.abs() .... abs is the extension.
*/

// You can combine parameters in a object to create new objects.

var obj1 = {
  a: 1
}

var obj2 = {
  b: 2
}

var obj = Object.assign(obj1, obj2);    // using assign() method can merge objects

console.log(obj);    // [object Object] { a: 1, b: 2 }

// it will use the prototype of the first object. First object would be the base.

Math.trunc() // removes the numbers after the decimal point.

// new iterator syntax

let it = array.entries();    // could just be any array

for (let element of it) {
  console.log(element);    // Iterates over array and prints each item to line.
}















// Allows you to place the program in a strict operating mode context.
"use strict";
  // It is a string
  // When the feature was first implemented it, new browsers did not support it.
  // modules are always in strict mode.

// Not strict mode..
function newCode() {
  "use strict";
  // Strict mode..
}

// In strict mode using a variable before it has been defined causes a error.

// Global object in npm = global, in browsers = window.

// Stops you from using words that are reserved for future versions of Javascript.

// Cannot delete functions, variables, function arguments, in "use strict" mode. (using delete keyword)

function moo(arg) {
  delete arg;
};

// cannot use eval keyword. Eval allows use you execute arbitrary lines of code.
// What goes on in eval() stays in eval(). Does not leak out to other code.



// Passing primitive types are passed by value (vars, booleans, integers). Objects are passed by reference.

  // Pass by value is when if you changed a global variable within a local scope, the global will stay the same
var a = 1;
function foo(a) {
  a = 2; // passed in a copy of 'a'
}

foo(a);
console.log(a); // output will be 1.

  // When you are passing something by referencfe, you are passing in something that points to something instead of a copy of something else.
var b = {};
function boo(b) {
  b.loo = false; // can't chnange what b points too.
}
boo(b);
console.log(b);

// Get good grasp of pass-by-value and pass-by-reference



/* What are the different types in javascript?

Boolean
Number
String
Null
Undefined

Object

typeof() method, prints out the type of whatever the argument is.
  typeof(null) is incorrectly returns object. Suppose to be null.

  type of variables are determined dynamically at runtime
    easier to get up and running quickly
    you only uncover problems when you run them

  in java type of variable is detemined statically.
    when you compile the program it will show errors
    memory management can be statically controlled

undefined is used by js for unknown value or uninitialized.

null is used by programmers, js would never set a value to null.
  null is the concept of absence of a value
  in js null is the absence of a value

*/

undefined == null; // true



/*

== is equality
  js converts both values of same type
  will not match type

=== is strict equality
  both
  will match type.


Type coercion is the process of converting one type to another. asdfakdkjkvei[]

false == 'false' // false

boolean('false') // true (converts string of false into boolean)

null is type of object

*/

typeof(null) // object
typeof(undefined) // undefined

/*
To check if variable IS nan you have to do !==
  This is what interviewers are looking for

NaN equal to ANYTHING is always false, even when compared to itself
*/

typeof(NaN); // number
NaN == NaN;  // false
isNaN();     // Implicity coercion

var c = NaN;
c !== NaN;   // true
c = 1;
c !== c;     // false



/*
Declare things (variables) before using them.

let - is block scope defined variable.
const - are pointers that cannot be changed
  the pointer does not change, only the value.
  can change const if its a object.

Global scope variables, variables defined outside of a code block
  npm,            var global.val;
  browser,        var window.val;
  this .js file,  var val;

Function (or local) Scope or Global scope.

Variable hoisting is when js splits a variable (when use strict is used and a variable has not been defined yet).
  Declares the variable at the top of the document (hoists it to the top)
  then redefines it.
  Automatic hoisting of the variable declaration of the enclosing scope

  Ex:
    "use strict";
    console.log(d);
    var d = 1;

  Ex: Hoisted
    "use strict";
    var d;
    console.log(d);
    d = 1;

Scope chain is defined, lexically. In order in which it is defined on the page.
Looks inside it's inner scope, then outer scope, til it finds it's variable.
The scope is defined by how the code is physically written.
The variable is resolved in the order in which the code is written on the page.

IIFE - Imediately Invoked Function Expression. - When an anonymous function is wrapped and then immediately invoked.
Does not allow any pseudo global variable to leak out into global scope.
*/

(function() {
  var e = {'hello': 'main'};
  console.log("main: ", e);
})();     // The empty brackets immediate call the function.

/*

? Function closures are inner functions that have access to the outer (enclosing) functions variables-scope chain.
*/

// Interview question that tests function closures.
var foo = [];
for (var i = 0; i < 10; i++) {
  foo[i] = function() { return i };
}

console.log(foo[0]());    // 10
console.log(foo[1]());    // 10
console.log(foo[2]());    // 10

/*
To change previous function to print a different number everytime
  primitive types are passed by value not by reference.
*/

var foo = [];
for (var i = 0; i < 10; i++) {
  (function() {
    var y = i;
    foo[i] = function() { return y };
  })();     // IIFE
}

console.log(foo[0]());    // 0
console.log(foo[1]());    // 1
console.log(foo[2]());    // 2



/*
? Using 'this' outside of a function, refers to the global scope
This is determined the calling of the context. It was determined by the way the function is called.

It has different values depending on where it is used:

In a method, 'this' refers to the owner object.
Alone, this refers to the global object.
In a function, 'this' refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

*/

/*
'Call' 'bind' 'apply' are different ways in javascript of locking down and stabilizing what 'this' keyword means when executing different functions.
Functions are objects that have properties, that also have functions.

you would use func.call() over regular func() (they both execute the function) because it will stabilize the context of 'this'.

'this' will point to the argument > then to the function >.

?this keyword

When would you use call() and when would you use apply()?
  You would use call() if the function takes a variable number of parameter
*/

// arguments in functions are arrays.

function sum() {
  var total = 0;
  for (var i =0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

var things = [1,2,3,4,5,6,7,8,9,10];

// cannot add array as argument, function will generate error
sum(null, things);

// have to use apply method to add things from variable.
var x = sum.apply(null, things);

console.log(x);

/*
You can lock down what you want 'this' to be by using the bind() expression.
*/

var a = func() {
  console.log(this);
};

a(); //undefined with use stict.

var a = func() {
  console.log(this);
}.bind(1); // binds 'this' to 1.

a(); // 1

// .bind() only works with function expressions, does not work when you are declaring a function.

var yael = {
  func: a
};

yael.func(); // 1



/*
What is the prototype chain?
  Every object js has prototype, when looking for a property, on the object itself. If it can't find it it will search on it's prototype.

  should not use _proto_ in production code

objects link to other objects in whats called a prototype chain
traverses the chain when looking for a property
returns undefined when it cannot find chain

can assign parameters using create() method.
*/

var animal = {
  kind: 'human'
};

console.log(animal);

var yael = {};

yael._proto_ = animal;

console.log(yael.kind);

// lookups are dynamic.



/*
What is the difference between classical and prototypical inheritance.

Classical inheritance - You build a object based on parameters in __proto__
Prototypal inheritance - You build a object based on a existing object

People call this:  Pseudo Classical Inheritance or Classical Inheritance (incorrect) or Constructor pattern

class describes behavior of functions.
  can mimic one with a function constructor.

*/

// Constructor class
function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

// Return toString of Person Constructor class
Person.prototype.full_name = function() {
  return this.fName + ' ' + this.lName;
}

var dude = Person("yael", "brown"); // Will generate type error on L320
// because this keyword is set to the global property. You are trying to find the property first name on the global scope and it's not there. Undefined.

var dude = new Person("yael", "brown"); // no errors

/*
To inherit parameters from parent function...
*/

// Constructor class
function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

// Child constructor (inheriting from parent constructor)
function Professional(honorific, fName, lName) {
  Person.call(this, fName, lName);      // using call() method and then calling the this keyword is the same as super(); in other languages.
  this.honorific = honorific;
}

// Returning toString method using information in Professional child constructor.
Professional.prototype.professional_name = function() {
  return this.honorific + ' ' + this.fName + ' ' + this.lName;
}

// implementing child constructor.
var prof = new Professional("Mr.", "Yael", "Brown");

console.log(prof.professional_name());  // Mr. Yael Brown
console.log(prof.full_name());          // typeError

/*
prof.full_name() is not apart of the prototype of Person, or the Person.prototype.
  Will have to use code to add it.
*/

// Add inheritance into pseudo-classical javascript class.
Professional.prototype = Object.create(Person.prototype);   // Creates a object in Profession that has contents of person.prototype.

// We would be able to use prof.full_name() function now.
console.log(prof.full_name());            // Yael Brown



/*
Prototypal inheritance is a alternative oo solution.
  more natural oo solution for js
  it's just the prototype chain

? factory();

When would you use the prototype pattern or constructor pattern?
  const. pattern is used everywhere and is most common.
    java c++ will feel more natural.
    allows constuct of private variables
  proto pattern is very easy to understand
    feels more natural to js

Constructor pattern consists of "new" keyword. Similar to Java and C++

It depends on what the team prefers.
*/



/*
CORS - Cross Origin Resource Sharing.
  The response gets blocked in CORS.
    Access-Control-Allow-Origin

  Pre-flight request.
    Access-Control-Request-Method
    Browser sends OPTIONS request to see if it can send a POST request later on
    Access-Control-Rquest-Method: POST, PUT, GET, DELETE will need those specific values for acceptable response to allow POST request.

test-cors.org
  Lets you test requests, acts like client and server
*/



/*
JSONP - Pre-dates the cors standard. Solves same problem as cors but with limitations
  Only works with GET requests
  if the server supports JSONP then "why the hell not?"
*/



/*
Difference between event bubbling and capturing in JS.
  When you click on something, theres 2 phases that event travels on.
    event capturing window > button
    event bubbling button > window
  Can add addeventlisteners that listen to those two phases.

  Event capturing phase, phase 1
    Events traverse down the stack, from window to document to body then to following divs.
  event bubbling phase, phase 2
    Then carries back up the stack back to the root.

  You can add event listeners that listens to either phase 1 or phase 2.
    If you don't specify then it automatically uses phase 2.

  .addEventListener(arg, arg, boolean)
    boolean = false, is the bubbling phase
    boolean = true, is the capturing phase
*/



/*
Difference between stop propagation and preventDefault?
  stopPropagation() - stops the event from bubbling or capturing phase.
    Stop event from moving to the next callback.
    propagation is not asynchronous.
  preventDefault() - does not stop the event from propagates
    stops the default behavior on whatever element you performed the event on
      on checkbox it would stop the tick from being applied on a checkbox.
*/