const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resultsDiv = document.querySelector("#results");
const score = document.createElement("h3");

// Scores
let playerScore = 0;
let computerScore = 0;

// Computer random choice
const getComputerChoice = () => {
    let choice = ["Rock", "Paper", "Scissors"]

    return choice[Math.floor(Math.random() * choice.length)].toLowerCase();
};


// Play a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        const results = document.createElement("p");
        results.textContent = "It's a tie! Play again";
        resultsDiv.appendChild(results);
    } else if ((player === "paper" && computerSelection === "rock") ||
   (player === "rock" && computerSelection === "scissors") ||
   (player === "scissors" && computerSelection === "paper")) {
        playerScore++;
        const results = document.createElement("p");
        results.textContent = "You won";
        resultsDiv.appendChild(results);
    } else {
        computerScore++;
        const results = document.createElement("p");
        results.textContent = "Computer won";
        resultsDiv.appendChild(results);
    }

    // Scores
    score.textContent = `Your score is: ${playerScore} and Computer score is: ${computerScore}`;
    resultsDiv.appendChild(score);

    if (playerScore === 5) {
        score.textContent = `You reached ${playerScore}, you win the game!`;
        resultsDiv.appendChild(score);
        return;
    } else if (computerScore === 5) {
        score.textContent = `Computer reached ${computerScore}, good luck next time!`;
        resultsDiv.appendChild(score);
        return;
    }
};


// Buttons events
if (playerScore <= 5 || computerScore <= 5) {
    rock.addEventListener("click", function () {
        let player = rock.textContent;
        let computer = getComputerChoice();
        playRound(player, computer);
    });

    paper.addEventListener("click", function () {
        let player = paper.textContent;
        let computer = getComputerChoice();
        playRound(player, computer);
    });


    scissors.addEventListener("click", function () {
        let player = scissors.textContent;
        let computer = getComputerChoice();
        playRound(player, computer);
    });
}

// Function game play a 5 round game that keeps score and
// reports a winner or loser at the end
// const game = () => {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Rock, Paper, or Scissors?");
//         const computerSelection = getComputerChoice();
//         console.log(`Player choice: ${playerSelection}`);
//         console.log(`Computer choice: ${computerSelection}`);

//         if (playRound(playerSelection, computerSelection) === "player") {
//             playerScore++;
//         } else if (playRound(playerSelection, computerSelection) === "computer") {
//             computerScore++;
//         } else {
//             console.log("Play again");
//         }
//     }


//     console.log(`Your score: ${playerScore}`);
//     console.log(`Computer score: ${computerScore}`);
//     if (playerScore > computerScore) {
//         console.log("Congratulations! You win the game!");
//     } else {
//         console.log("Sorry you lost :(");
//     }
// }

// game();
