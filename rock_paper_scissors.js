let humanScore = 0;

let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber < 3 && randomNumber >= 2) {
        return "rock";
    } else if (randomNumber < 2 && randomNumber >= 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const humanOutput = document.querySelector(".human-choice");
    const computerOutput = document.querySelector(".computer-choice");
    const roundWinner = document.querySelector(".round-winner");
    humanOutput.textContent = `You chose: ${humanChoice}`;
    computerOutput.textContent = `Computer chose: ${computerChoice}`;
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        roundWinner.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        return humanScore++;
    } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
        roundWinner.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        return computerScore++;
    } else {
        roundWinner.textContent = "It's a tie!";
    }
}

function updateScore() {
    const humanTally = document.querySelector(".human-score");
    const computerTally = document.querySelector(".computer-score");
    humanTally.textContent = `You: ${humanScore}`;
    computerTally.textContent = `Computer: ${computerScore}`;
}

const optionsContent = document.querySelector(".options-content");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let humanSelection = "";

rock.addEventListener("click", () => {
    humanSelection = "rock";
});

paper.addEventListener("click", () => {
    humanSelection = "paper";
});

scissors.addEventListener("click", () => {
    humanSelection = "scissors";
}); 

optionsContent.addEventListener("click", () => {
    playRound(humanSelection, getComputerChoice());
    updateScore();

    if (humanScore === 5 && humanScore > computerScore) {
        alert("Victory!");
        window.location.reload();
    } else if (computerScore === 5 && computerScore > humanScore) {
        alert("Defeat.");
        window.location.reload();
    }
});

