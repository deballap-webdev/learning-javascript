// Numbers
// An integer is a whole Number
const myInteger = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.01;
const myFloatTwo = 42.0;

const myString = "42";
const myStringTwo = "42.0123abc"

console.log(myInteger);
console.log(myFloat);
console.log(myFloatTwo);
console.log(myString);
console.log(myFloat === myInteger);
console.log(myFloatTwo === myInteger);
console.log(myInteger === myString);
console.log(myString + 3);
console.log(Number(myString) + 3)
console.log(String(myInteger) === myString);
console.log(Number(myString) === myInteger);
console.log(Number("Debbie"));
console.log(Number(undefined));
console.log(Number(false));
console.log(Number(true));
console.log((myInteger === myString) === false);

// Number Methods 
//The Number.isInteger() method determines whether the passed value is an interger.

console.log(Number.isInteger(myInteger));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myFloatTwo));

//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat(myStringTwo));

//The toFixed() method formats a number according to how many decimal points you provide as a parameter

console.log(Number.parseFloat(myStringTwo).toFixed(2));
console.log(Number.parseFloat(389.3789).toFixed(3));

//The Number.parseInt() method parses an argument and returns an integer.

console.log(Number.parseInt(myStringTwo));

//The toString() method returns a string representing the number.

console.log(typeof myInteger.toString());
console.log(typeof Number.parseFloat(myString));

//Used chaining to get a number data with Number() function while using toFixed() method (which originally returns string data)
console.log(Number(Number.parseFloat("4.237abc").toFixed(2)));

//This is just an example of chaining in reality there is no need to put the toString() method after the toFixed() method because the toFixed() method already returns string data
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//Nan is an acronym for Not a Number

//The Number.isNaN() method determines whether the passed value is NaN AND its type is Number

//Hmm.. This is something to Think About
console.log(Number.isNaN("Debbie"));
console.log(Number.isNaN(Number("Debbie"))); 
console.log(Number.isNaN(23)); 

//The global isNaN() function determines whether a value is NaN or not

console.log(isNaN("Debbie"));
console.log(isNaN(43));
