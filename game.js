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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Enter your choise (Rock, Paper, or Scissor):");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        console.log("Round " + round + ": " + result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    alert("Final Score!")
    alert("Player: " + playerScore);
    alert("Computer: " + computerScore);

    if (playerScore > computerScore) {
        alert("Congratulations! You win! ");
    } else if (playerScore < computerScore) {
        alert("Sorry, you lose. :( ");
    } else {
        alert("It's a draw! Play again! ")
    }
}

game();