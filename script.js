const inputChoices = document.querySelectorAll(".input-choices");
const reset = document.getElementById("reset");
let roundDisplayed = document.getElementById("round-displayed");
let playerScore = document.getElementById("player-score");
let cpuScore = document.getElementById("computer-score");
let winnerDisplay = document.getElementById("winner-display");
let playerSelection;
let computerSelection;
let roundResult;
let rounds;


function onPageLoad () {
    rounds = 0;
    roundDisplayed = 1;
    playerScore = 0;
    cpuScore = 0;
    
    document.getElementById("round-displayed").innerHTML = roundDisplayed;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = cpuScore;
    
    inputChoices.forEach(function (button) {
        button.addEventListener('click', function () {
            playerSelection = button.id;
        });
        button.addEventListener('click', game);
    });
}

function game () {
    rounds++;
    winnerDisplay.classList.add("hidden");

    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    roundScore();
    roundCount();
    updateDisplays();
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

function roundCount () {
    if (roundDisplayed >= 5) {
        roundDisplayed = 5;
    } else {
        roundDisplayed++;
    }

    if(rounds === 5) {
        const playerWins = "You win the game. Reset to play again.";
        const cpuWins = "You lose the game. Answer some questions to reset the game.";
        const draw = "It's a draw. Play another round.";

        inputChoices.forEach(function (button) {
            button.setAttribute("disabled", "disabled");
        });
        
        winnerDisplay.classList.remove("hidden");

        if (playerScore === cpuScore) {
            document.getElementById("winner-display").innerHTML = draw;

            rounds = 4;

            inputChoices.forEach(function (button) {
                button.removeAttribute("disabled", "disabled");
            });
        }
        
        if (playerScore > cpuScore) {
            document.getElementById("winner-display").innerHTML = playerWins;
        } else if (playerScore < cpuScore) {
            document.getElementById("winner-display").innerHTML = cpuWins;
        } 
    }
}

function updateDisplays () {
    document.getElementById("round-result").innerHTML = roundResult;
    document.getElementById("player-move").innerHTML = playerSelection;
    document.getElementById("computer-move").innerHTML = computerSelection;
    document.getElementById("round-displayed").innerHTML = roundDisplayed;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = cpuScore;
}

function resetGame () {
    roundDisplayed = 1;
    rounds = 0;
    playerScore = 0;
    cpuScore = 0;
    roundResult = "";
    playerSelection = "";
    computerSelection = "";
    winnerDisplay.classList.add("hidden");

    inputChoices.forEach(function (button) {
        button.removeAttribute("disabled", "disabled");
    });

    updateDisplays();
}

reset.addEventListener('click', resetGame);