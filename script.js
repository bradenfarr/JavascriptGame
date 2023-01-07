const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resultText = document.querySelector(".result");
const playerWinCounter = document.querySelector(".playerWins");
const computerWinCounter = document.querySelector(".computerWins");
const resetBtn = document.querySelector(".resetScore");

let cooldown = false;
const RECHARGE_TIME = 1500;
let playerScore = 0;
let computerScore = 0;

// computerPlay function returns the computers choice

function computerPlay () {
    let values = ["rock", "paper", "scissors"];
    let computerChoice = values[Math.floor(Math.random() * values.length)];
    return(computerChoice);
} 

// playRound function defines the logic of the game

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return tie()
    };
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return loss(playerSelection, computerSelection);
        } else {
            return win(playerSelection, computerSelection);
        }
    };
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return loss(playerSelection, computerSelection);
        } else {
            return win(playerSelection, computerSelection);
        }
    };
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return loss(playerSelection, computerSelection);
        } else {
            return win(playerSelection, computerSelection);
        }
    };
};

// Win Loss and Tie functions to alter resultText based on the results

function loss(playerChoice, computerChoice) {
    resultText.removeAttribute("id", "lossAnimation");
    void resultText.offsetWidth;
    let x = resultText;
    x.style.marginLeft = "300px";
    x.style.marginRight = "0px";
    x.style.transition = "1s";
    resultText.setAttribute("id", "lossAnimation");

    let result = `Sorry you lost, ${computerChoice} beats ${playerChoice}.`;
    resultText.textContent = result;

    computerScore += 1;
    computerWinCounter.textContent = computerScore;
}

function win(playerChoice, computerChoice) {
    resultText.removeAttribute("id", "winAnimation");
    void resultText.offsetWidth;
    let x = resultText;
    x.style.marginLeft = "0px";
    x.style.marginRight = "290px";
    x.style.transition = "1s";
    resultText.setAttribute("id", "winAnimation");

    let result = `You won, ${playerChoice} beats ${computerChoice}!`;
    resultText.textContent = result;

    playerScore += 1;
    playerWinCounter.textContent = playerScore
}

function tie() {
    resultText.removeAttribute("id", "tieAnimation");
    void resultText.offsetWidth;
    let x = resultText;
    x.style.marginLeft = "0px";
    x.style.marginRight = "0px";
    x.style.transition = "1s";

    resultText.setAttribute("id", "tieAnimation")
    resultText.textContent = "This round is a tie!";
}

// Event listeners for playing the game

rock.addEventListener('click', function(){
    if (!cooldown) {
        playerSelection = "rock";
        playRound(playerSelection,computerPlay());
        disable()
    }
});

paper.addEventListener('click', function(){
    if (!cooldown) {
        playerSelection = "paper";
        playRound(playerSelection,computerPlay());
        disable();
    }
});

scissors.addEventListener('click', function(){
    if (!cooldown) {
        playerSelection = "scissors";
        playRound(playerSelection,computerPlay());
        disable();
    }
});

// reset player and computer score on resetBtn click

resetBtn.addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    playerWinCounter.textContent = playerScore;
    computerWinCounter.textContent = computerScore;

    let x = resultText;
    x.style.marginLeft = "0px";
    x.style.marginRight = "0px";
    x.style.transition = "1s";
    resultText.textContent = "Click a picture to play";
    disable();
})

// disable function to prevent spam clicking

function disable(){
    cooldown = true;
    setTimeout (function(){ cooldown = false}, RECHARGE_TIME);
}