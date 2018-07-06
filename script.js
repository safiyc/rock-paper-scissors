let playRoundResult;
let playerScore = 0;
let cpuScore = 0;
let rounds = 0;

const inputChoices = document.querySelectorAll(".input-choices");

inputChoices.forEach(function (button) {
    button.addEventListener('click', function () {
        playerSelection = button.id;
    });
    button.addEventListener('click', game);

});

function game () {
    const computerSelection = computerPlay();
    
    playRound (playerSelection, computerSelection);
    roundScore();
    console.log("playerSelection: ", playerSelection, " computerSelection: ", computerSelection);
    console.log("function playRound: ", playRound(playerSelection, computerSelection));
    console.warn("playRoundResult: ", playRoundResult);
    console.log("playerScore: ", playerScore, "cpuScore: ", cpuScore);
    
    rounds += 1;
    console.log("rounds: ", rounds);

    if(rounds >= 5) {
        inputChoices.forEach(function (button) {
            button.setAttribute("disabled", "disabled");
        });
        if (playerScore > cpuScore) {
            console.warn("Winner: Player");
        } else if (cpuScore > playerScore) {
            console.warn("Winner: Computer");
        } else {
            console.warn("It's a draw.");
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
        return playRoundResult = "You win.";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return playRoundResult = "You lose.";
    } else {
        return playRoundResult = "It's a draw.";
    }
}
   
function roundScore() {
    if (playRoundResult === "You win.") {
        playerScore++;
    } else if (playRoundResult === "You lose.") {
        cpuScore++;
    } 
}