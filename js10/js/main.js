// Your First Interactive Game

/* if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLocaleLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        
            /*let  computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper": "scissors";
        }
    } else {
      alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}

console.log(computerChoice);
 */

let playGame = confirm("Shall we play rock, paper or scissors?");
if (playGame) {
  playerChoice = prompt("Please enter rock, paper or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      /* switch (computerChoice){
            case 1: let computer = "rock"
            break;
            case 2: let computer = "paper"
            break;
            default: let computer = "scissors" */
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
            ? "paper"
            : "scissors";

      /* if (playerOne === computer) {
        alert("Tie!");
      } else if (playerOne === "rock") {
        if (computer === "scissors") {
          alert("You Won!");
        } else {
          alert("You Lost!");
        }
      } else if (playerOne === "paper") {
        if (computer === "rock") {
          alert("You Won!");
        } else {
          alert("You Lost!");
        }
      } else {
        if (computer === "paper") {
          alert("You Won!");
        } else {
          alert("You Lost!");
        }
      } */

      /* let result =
        playerOne === computer
          ? "Tie game!"
          : (playerOne === "rock" && computer === "paper") ||
              (playerOne === "scissors " && computer == "rock") ||
              (playerOne === "paper" && computer == "scissors")
            ? "Computer Wins!"
            : "Player One wins!";

      if (result === "Player One wins!") {
        alert("You Win!");} else {
        alert("Computer Wins!");
      } */

      let result =
        playerOne === computer
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nIt's a tie!`
          : (playerOne === "rock" && computer === "paper") ||
              (playerOne === "paper" && computer === "scissors") ||
              (playerOne === "scissors" && computer === "rock")
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("OK, thanks for playing");
    } else {
      alert("You didn't enter rock, paper or scissors");
    }
  } else {
    alert("I guess you changed your mind");
  }
} else {
  alert("Ok, maybe next time.");
}
