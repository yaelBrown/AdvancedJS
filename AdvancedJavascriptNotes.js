console.log("hello");

// Allows you to place the program in a strict operating mode context. 
"use strict";
  // It is a sting
  // When the feature was first implemented it, new browsers did not support it.
  // 

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

  // When you are passing something by reference, you are passing in something that points to something instead of a copy of something else. 
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
  

=== is strict equality
  both


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

var dude = Person("yael", "brown"); // Will generate type error on L320
// because this keyword is set to the global property. You are trying to find the property first name on the global scope and it's not there. Undefined. 

var dude = new Person("yael", "brown"); // no errors
































