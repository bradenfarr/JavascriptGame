function computerPlay () {
    let values = ["rock", "paper", "scissors"];
    let computerChoice = values[Math.floor(Math.random() * values.length)];
    return(computerChoice);
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            return "This round is a tie!";
    };
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "Sorry you lost, paper beats rock.";
        } else {
            return "You won! rock beats paper.";
        }
    };
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "Sorry you lost, scissors beats paper.";
        } else {
            return "You won! paper beats rock.";
        }
    };
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Sorry you lost, rock beats scissors.";
        } else {
            return "You won! scissors beats paper.";
        }
    };
};

function game() {
    for (let i = 0; i < 5; i++) {
    let playerChoice = window.prompt("Please type: rock, paper, or scissors");
    function playerPlay () {
        if (playerChoice === "rock" || playerChoice === 'paper' || playerChoice === 'scissors') {
            return playerChoice.toLowerCase();
        } else if (playerChoice === null){
            i=5;
            console.log("Game cancelled.");
        } else {
            console.log("Invalid player input")
        }
    };
    console.log(playRound(playerPlay(), computerPlay()))
    };
};

game();