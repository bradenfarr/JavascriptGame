const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resultText = document.querySelector(".result");

let cooldown = false;
const RECHARGE_TIME = 2000;

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
}

function win(playerChoice, computerChoice) {
    resultText.removeAttribute("id", "winAnimation");
    void resultText.offsetWidth;
    let x = resultText;
    x.style.marginLeft = "0px";
    x.style.marginRight = "400px";
    x.style.transition = "1s";
    resultText.setAttribute("id", "winAnimation");
    let result = `You won, ${playerChoice} beats ${computerChoice}!`;
    resultText.textContent = result;
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

// disable function to prevent spam clicking

function disable(){
    cooldown = true;
    setTimeout (function(){ cooldown = false}, RECHARGE_TIME);
}