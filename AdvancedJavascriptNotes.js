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
  Ex: 
    "use strict";
    console.log(d);
    var d = 1;

  Ex: Hoisted
    "use strict";
    var d;
    console.log(d);
    d = 1;





*/


