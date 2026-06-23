// Loops

let myNumber = 300;
while (myNumber < 50) {
  myNumber += 3;
  console.log(myNumber);
}
//don't create an endless loop

do {
  myNumber += 4;
  console.log(myNumber);
} while (myNumber < 20);

/* let name = "Deborah";
for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}

let counter = -1;
while (counter < name.length) {
  counter++;
  console.log(name.charAt(counter));
} */

let name = "Debbie";
let counter = 0;
let myLetter;
while (counter <= 5) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "i") break;
  counter++;
}

console.log(counter);
