alert("Hello, World!")

/* Add javascript on a page

<script type="text/javascript">
	// js code
</script>

*/

/* Ternary Operator

var playerOne = 500
var playerTwo = 600

// Can be written like...

if (playerOne > playerTwo) {
	highScore = playerOne;
} else {
	highScore = playerTwo;
}

// Alternatively .... condition ? true : false

var highScore = (playerOne > playerTwo) ? playerOne : playerTwo ;

	// Allows you to get rid of if-statement. Allows you to have it all on one line. 
	
*/



/* Console commands

console.log('statement');
console.info
console.warn
console.error

*/



/* JS Functions (modules, sub-routines)

function createMessage(){
	console.log("We're in the function")
}

// Put code in a function it wont run unless you explicity call it

createMessage();

// Declare functions before you use them. Define them at the top. 

function createMessage(x,y,z){
	console.log("a")
}

// x,y,z are variables in the function. 

*/

function addCrossBrowserEventListener (elementName, eventName, functionName) {
	// does the addEventListener function exist?
	if (elementName.addEventListener) {
		// yes - use it
		elementName.addEventListener (eventName, functionName, false);
		return true;
	} else {
		// otherwise use attachEvent
		elementName.attachEvent ("on" + eventName, functionName);
		return true;
	}
}
// Can use JQuery for cross-browser code

/* Event listener onclick
document.onclick = function() {
	alert("You clicked somewhere in the document");
}

If you click anywhere in the document it will pop up a javascript alert. 
*/


// Creates a automatically changing image. Does not fade. 
// settimeout is in milliseconds
// setTimeout(simpleMessage,5000);

var myImage = docmuent.getElementById("myImage");
var imageArray = ["url/image.1jpg,", "url/image2.jpg", "url/image3.jpg"];
var imageIndex = 0

function changeImage() {
		myImage.setAttribute("src",imageArray[imageIndex]);
		imageIndex++;
		if (imageIndex >= imageArray.length) {
			imageIndex = 0;
		}
}

// setInterval is also in milliseconds
setInterval(changeImage,5000);

myImage.onclick = function() {
	clearInterval(intervalHandle);
}
// Stops the changing of image with a click. 



// Creating smart forms. 
// Popping up a error message
function prepareEventHandlers() {
	document.getElementByID("frmContact").onsubmit = function() {
		// Prevent a form from submitting if no email.
		if (document.getElementByID("email").value =="") {
			document.getElementByID("errorMessage").innerHTML = "Please provide at least an email address!";
			// to STOP the form from submitting
			return false;
		} else {
			// reset and allow the form to submit
			documnet.getElementById("errorMessage").innerHTML = "";
			return true;
		}	
	}
}

// when the ducment loads
window.onload = function() {
	prepareEventHandlers();
}



var foo = 5;
var bar = 5;
console.log(foo + bar); // console will display 10

var foo = "5";
var foo = "5";
console.log(foo + bar); // console with concatenate and display 55
// NaN is 'Not A Number'. What you get when you multiply 5 by apple. 

var phrase = "He said \"that's fine,\" and left.";
// Slash in front of the quotes help not close the string.

/*
HTML5 Main features
	Video Support
	Audio Support
	Canvas Element
	Offline Storage
	New form Elements
	Drag-and-Drop
	Geolocation
	Local Storage
*/

"use strict";

// RegExp are a tool for validation. Such as credit cards or phone numbers

// AJAX = Asynchronous Javascript or XML
/* 
	AJAX updates parts of the page so they whole page does not have to refresh
*/


// Prototypes are more formalized javascript version of OOP

function Player(n,s,r) {
	this.name = n;
	this.score = s;
	this.rank = r;
}

Player.prototype.logInfo = function() {
	console.log("I am:", this.name);
}

Player.prototype.promote = function() {
	this.rank=+;
	console.log("My new rank is: ", this.rank);
}

var fred = new Player("Fred",10000,5);
fred.logInfo();
fred.promote();

var bob = new Player("Bob",50,10);
bob.logInfo();
bob.promote();
