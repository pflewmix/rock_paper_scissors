function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3);

    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice ===computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerSelection === "Scissors") ||
        (playerChoice === "paper" && computerSelection === "Rock") ||
        (playerChoice === "scissors" && computerSelection === "Paper")
    ) {
        return "You Win! " + playerChoice + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerChoice;
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));