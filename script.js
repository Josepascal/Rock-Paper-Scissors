const getComputerChoice = () => {
    let choice = ["Rock", "Paper", "Scissors"]

    return choice[Math.floor(Math.random() * choice.length)].toLowerCase();
}

// Play a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        return "Tie";
    } else if ((player === "paper" && computerSelection === "rock") ||
   (player === "rock" && computerSelection === "scissors") ||
   (player === "scissors" && computerSelection === "paper")) {
        return "player";
   } else {
        return "computer";
   }
}


// Function game play a 5 round game that keeps score and
// reports a winner or loser at the end
const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(`Player choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`);

        if (playRound(playerSelection, computerSelection) === "player") {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "computer") {
            computerScore++;
        } else {
            console.log("Play again");
        }
    }


    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else {
        console.log("Sorry you lost :(");
    }
}

game();
