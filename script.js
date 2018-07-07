const inputChoices = document.querySelectorAll(".input-choices");
const reset = document.getElementById("reset");
// const roundResultDisplay = document.getElementById("round-result");


let roundResult;
let playerScore = 0;
let cpuScore = 0;
let rounds = 1;

// roundResultDisplay.textContent = "this is a test";

inputChoices.forEach(function (button) {
    button.addEventListener('click', function () {
        playerSelection = button.id;
    });
    button.addEventListener('click', game);
});

reset.addEventListener('click', resetGame);

function game () {
    rounds++;

    const computerSelection = computerPlay();
    
    playRound (playerSelection, computerSelection);
    roundScore();
    
    document.getElementById("round-result").innerHTML = roundResult;
    document.getElementById("player-move").innerHTML = playerSelection;
    document.getElementById("computer-move").innerHTML = computerSelection;
    document.getElementById("round").innerHTML = rounds;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = cpuScore;
    
    if(rounds >= 5) {
        const playerWins = "You win the game. Reset to play again.";
        const cpuWins = "You lose the game. Answer some questions as a punishment.";
        
        inputChoices.forEach(function (button) {
            button.setAttribute("disabled", "disabled");
        });
        if (playerScore > cpuScore) {
            document.getElementById("message-winner").innerHTML = playerWins;
        } else if (cpuScore > playerScore) {
            document.getElementById("message-winner").innerHTML = cpuWins;
        } else {
            console.warn("It's a draw.");
            rounds--;  // need to get this to work
            document.getElementById("round").innerHTML = rounds;
        }   
    }

}

function computerPlay () {
    let cpuMove = Math.floor(Math.random() * 3) + 1;
    
    if (cpuMove === 1) {
        return "rock";
    } else if (cpuMove === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return roundResult = "You Win";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return roundResult = "You Lose";
    } else {
        return roundResult = "Draw";
    }
}
   
function roundScore() {
    if (roundResult === "You Win") {
        playerScore++;
    } else if (roundResult === "You Lose") {
        cpuScore++;
    } 
}

function resetGame () {
    rounds = 1;
    playerScore = 0;
    cpuScore = 0;

    inputChoices.forEach(function (button) {
        button.removeAttribute("disabled", "disabled");
    });

    roundResult = "";
    playerSelection = "";
    computerSelection = "";
    
    document.getElementById("round-result").innerHTML = roundResult;
    document.getElementById("player-move").innerHTML = playerSelection;
    document.getElementById("computer-move").innerHTML = computerSelection;
    document.getElementById("round").innerHTML = rounds;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = cpuScore;

    let removeMessage = document.getElementById("message-winner");
    removeMessage.classList.add("hidden");
}
