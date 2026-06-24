let playGame = confirm("Shall we play a game of rock, paper, or scissors.");
if (playGame) {
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper or scissors.");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3 + 1);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];
        const result =
          computer === playerOne
            ? "Tie Game!"
            : (computer === "rock" && playerOne === "scissors") ||
                (computer === "paper" && playerOne === "rock") ||
                (computer === "scissors" && playerOne === "paper")
              ? `Computer : ${computer}\nPlayer One : ${playerOne}\nComputer Wins!`
              : `Computer : ${computer}\nPlayer One : ${playerOne}\nPlayer One Wins!`;

        alert(result);
        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing");
        continue;
      } else {
        alert("You didn't enter rock, paper or scissors");
        continue;
      }
    } else {
      alert("I guess you changed your mind, maybe next time");
      break;
    }
  }
} else {
  alert("Ok, maybe next time.");
}
