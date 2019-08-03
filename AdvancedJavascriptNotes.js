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

// Destructuring
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




// Allows you to place the program in a strict operating mode context.
"use strict";
  // It is a string
  // When the feature was first implemented it, new browsers did not support it.

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