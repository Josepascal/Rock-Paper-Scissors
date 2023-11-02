const getComputerChoice = () => {
    let choice = ["Rock", "Paper", "Scissors"]

    return choice[Math.floor(Math.random() * choice.length)].toLowerCase();
}

// Play a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase();
    console.log(`Player choice: ${player}`);
    console.log(`Computer choice: ${computerSelection}`)

   if (player === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (player === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (player === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper";
    } else if (player === computerSelection) {
        return "It's a tie!";
    } else {
        return "You win!";
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
