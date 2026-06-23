// Arrays
const myArray = [];

// add elements to an array
myArray[0] = "Debbie";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

// refer to an element or item in an array
console.log(myArray[2]);

// add element to end of an array
const newLengthOne = myArray.push("school");
console.log(myArray);
console.log(newLengthOne);
// add element to begining of an array
const newLength = myArray.unshift(42);
console.log(myArray);
console.log(newLength);

// remove last item from an array
const lastItem = myArray.pop();
console.log(lastItem);

// remove firt item from an array
const firstItem = myArray.shift();
console.log(myArray);
console.log(firstItem);
console.log(myArray.indexOf("Debbie"));
console.log(myArray[3]);

// remove an item from the middle of the array

//not recommended
//delete myArray[1]; console.log(myArray); console.log(myArray[1]);

//recomended
let splice = myArray.splice(3, 0, 42);
console.log(myArray);
console.log(splice);

//for (let i = 0; i < 5; i++) {const lastItem = myArray.pop();console.log(lastItem); }
// remove first item from an array

const theArray = ["A", "B", "C", "D", "E", "F"];

const newArray = theArray.slice(2, 5);
console.log(newArray);`/`
