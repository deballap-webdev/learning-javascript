// Conditionals: Ternary Operator

//syntax
//condition ? ifTrue : ifFalse;

//Examples

/* let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup" : "Sorry, no soup today";

console.log(response); */

/* let soup = "Chicken Noodle Soup";
let response = soup ? `Yes, we have ${soup}` : "Sorry, no soup today";

console.log(response); */
/* 
let soup = "Chicken Noodle Soup";
let isCustomerBanned = false; 
let soupAcess;*/

/* 
if (isCustomerBanned === true) {
  soupAcess = "Sorry, no soup for you";
} else if (soup) {
  soupAcess = `Yes, we have ${soup}`;
} else {
  soupAcess = "Sorry, no soup today";
}
console.log(soupAcess);
 */

/* 
switch (isCustomerBanned) {
  case true:
    console.log("Sorry, no soup for you");
    break;

  case false:
    if (soup) {
      console.log(`Yes, we have ${soup}`);
    } else {
      console.log("Sorry, no soup today");
    }
}
 */

let soup = "Chicken Noodle Soup";
let isCustomerBanned = true;
let soupAcess = isCustomerBanned
  ? "Sorry, no soup for you"
  : soup
    ? `Yes, we have ${soup}`
    : "Sorry no soup today";

console.log(soupAcess);

let testScore = 92;
let myGrade =
  testScore > 89
    ? "A"
    : testScore >= 79
      ? "B"
      : testScore >= 69
        ? "C"
        : testScore >= 59
          ? "D"
          : "F";

console.log(`My test grade is a ${myGrade}`);

let playerOne = "paper";
let computer = "scissors";
let result =
  playerOne === computer
    ? "Tie game!"
    : (playerOne === "rock" && computer === "paper") ||
        (playerOne === "scissors " && computer == "rock") ||
        (playerOne === "paper" && computer == "scissors")
      ? "Computer Wins!"
      : "Player One wins";

console.log(result);
