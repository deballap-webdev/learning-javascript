// Conditionals: If Statements

//syntax

/*
if (condition){
    //run some code
}else{
    //run some different code
}*/

//Example
let customerIsBanned = false;
let soup = "Chicken noodle soup";
let reply;
let crackers = true;

if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = "Sorry, we're out of soup.";
}
console.log(reply);

let testScore = 59;
let collegeStudent = false;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}

console.log(grade);

// Decision tree! (Rock, Paper, Scissors Game)
let playerOne = "rock";
let computer = "scissors";
let winner;

if (playerOne === computer) {
  winner = "Tie!";
} else if ((playerOne = "rock")) {
  if ((computer = "paper")) {
    winner = "Computer Wins!";
  } else {
    winner = "Player One Wins!";
  }
} else if ((playerOne = "paper")) {
  if ((computer = "scissors")) {
    winner = "Computer Wins!";
  } else {
    winner = "Player One Wins!";
  }
} else {
  if ((computer = "rock")) {
    winner = "Computer Wins!";
  } else {
    winner = "Player One Wins!";
  }
}
console.log(winner);
