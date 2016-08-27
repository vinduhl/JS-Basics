//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

 function isTyler(name) {
 	if(name === "Tyler") {
 		return true;
 	}
 	return false;
 }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
	var name = prompt("What is your name?");
	return name;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
	var name = getName();
	alert("Welcome, " + name);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  /*
	Parameters are the variable names shown within the parentheses of a function
	definition. Those are the values the function are expecting.  Arguments are 
	the values (or variables) that are passed to the function during the 
	function call.
  */


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  /*
	1. false
	2. 0
	3. NaN
	4. null
	5. ""

	To check if something is falsy, you use an IF statement
	to test if the condition evaluates to false. You can also place the negation character
	("!" bang) in front of a condition to evaluate if the inverse of a condition 
	is false.
  */



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName() {
	return "Wendell Valdez";
}
  


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
	return function() {
		return "Wendell Valdez";
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
