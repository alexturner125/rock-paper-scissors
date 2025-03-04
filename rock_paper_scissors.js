let humanScore = 0;

let computerScore = 0;

let humanSelection = ""

function getHumanChoice(e) {
    let targetClass = e.target.className;
    console.log(targetClass);

    if (targetClass.includes("rock")) {
        humanSelection = "rock";
    } else if (targetClass.includes("paper")) {
        humanSelection = "paper";
    } else if (targetClass.includes("scissors")) {
        humanSelection = "scissors";
    }
}

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

optionsContent.addEventListener("click", getHumanChoice);

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

