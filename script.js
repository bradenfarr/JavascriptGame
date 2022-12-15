const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resultText = document.querySelector(".result");

function computerPlay () {
    let values = ["rock", "paper", "scissors"];
    let computerChoice = values[Math.floor(Math.random() * values.length)];
    return(computerChoice);
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            let x = resultText
            x.style.marginRight = "0px"
            x.style.marginLeft = "0px"
            x.style.transition = "1s"
            return resultText.textContent = "This round is a tie!";
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

// loss(playerSelection, computerSelection);
// win(playerSelection, computerSelection);

function loss(playerChoice, computerChoice) {
    let result = `Sorry you lost, ${computerChoice} beats ${playerChoice}.`
    let x = resultText
    x.style.marginRight = "0px"
    x.style.marginLeft = "300px"
    x.style.transition = "1s"
    resultText.textContent = result
}

function win(playerChoice, computerChoice) {
    let x = resultText
    x.style.marginLeft= "0px"
    x.style.marginRight = "400px"
    x.style.transition = "1s"
    let result = `You won! ${playerChoice} beats ${computerChoice}.`
    resultText.textContent = result
}

rock.addEventListener('click', function(){
    playerSelection = "rock";
    playRound(playerSelection,computerPlay());
    disable()
});

paper.addEventListener('click', function(){
    playerSelection = "paper";
    playRound(playerSelection,computerPlay());
    disable();
});

scissors.addEventListener('click', function(){
    playerSelection = "scissors";
    playRound(playerSelection,computerPlay());
    disable();
});


function disable(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    setTimeout(function(){rock.disabled = false;},5000);
    setTimeout(function(){paper.disabled = false;},5000);
    setTimeout(function(){scissors.disabled = false;},5000);
}