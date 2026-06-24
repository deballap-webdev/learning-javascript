// Arrays
//const myArray = [];

// add elements to an array
//myArray[0] = "Debbie";
//myArray[1] = 1001;
//myArray[2] = false;

// refer to an array
//console.log(myArray);

// length property
//console.log(myArray.length);

// last element in an array
//console.log(myArray[myArray.length - 1]);

// refer to an element or item in an array
//console.log(myArray[2]);

// add element to end of an array
//const newLengthOne = myArray.push("school");
//console.log(myArray);
//console.log(newLengthOne);

// add element to begining of an array
//const newLength = myArray.unshift(42);
//console.log(myArray);
//console.log(newLength);

// remove last item from an array
//const lastItem = myArray.pop();
//console.log(lastItem);

// remove firt item from an array
//const firstItem = myArray.shift();
//console.log(myArray);
//console.log(firstItem);
//console.log(myArray.indexOf("Debbie"));
//console.log(myArray[3]);

// remove an item from the middle of the array

//not recommended
//delete myArray[1]; console.log(myArray); console.log(myArray[1]);

//recomended
//let splice = myArray.splice(3, 0, 42);
//console.log(myArray);
//console.log(splice);

//for (let i = 0; i < 5; i++) {const lastItem = myArray.pop();console.log(lastItem); }
//remove first item from an array

//const theArray = ["A", "B", "C", "D", "E", "F"];
//console.log(theArray);

//const newArray = theArray.slice(2, 5);
//console.log(newArray);

//the reverse method
//theArray.reverse();
//console.log(theArray);

//the join method
//const firstString = myArray.join();
//const secondString = theArray.join();

//console.log(firstString);
//console.log(secondString);

//the split method
//const firstSplit = firstString.split(",");
//const secondSplit = secondString.split(",");

//console.log(firstSplit);
//console.log(secondSplit);

// using the concat method
//const myArrayA = ["A", "B", "C"];
//const myArrayB = ["D", "E", "F"];

//const newArray = myArrayB.concat(myArrayA);

//console.log(newArray);

// using the spread operator
//const arrayA = [1, 2, 3];
//const arrayB = [4, 5, 6];

//const newArray = [...arrayA, ...arrayB];
//const newArray2 = [arrayA, arrayB];

//console.log(newArray2);
//console.log(newArray);

//nested arrays
// one dimensional array
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["baseketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

// two dimensional array
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

// three dimensional array
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
