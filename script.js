
let choiceOptions =["rock", "paper", "scissors"];
let roundWinner = null;
let computerVictories = null;
let playerVictories = 0;
let computerSelection = 0;
let playerSelection = null;

//Prompt player to introduce options
function playerPlay() {
    playerSelection = prompt("Choose one: Rock, Paper or Scissors:");
}

//Generate option for the computer
function computerPlay() {
    computerSelection = Math.floor(Math.random() * choiceOptions.length);
    return computerSelection;
};

//Compare options and declare winner
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == 1) {
        document.body.innerHTML+= "You lose! Paper beats Rock.";
        document.body.innerHTML+="<br> *********************************** <br>";
        roundWinner = "computer";
        return computerVictories++;
    } else if
        (playerSelection.toLowerCase() == "rock" && computerSelection == 2) {
            document.body.innerHTML+="You won! Rock beats Scissors.";
            document.body.innerHTML+=("<br> *********************************** <br>");
            roundWinner = "player";
            return playerVictories++;
    } else if 
        (playerSelection.toLowerCase() == "paper" && computerSelection == 0) {
            document.body.innerHTML+="You won! Paper beats Rock.";
            document.body.innerHTML+=("<br> *********************************** <br>");
            roundWinner = "player";
            return playerVictories++;
    } else if 
        (playerSelection.toLowerCase() == "paper" && computerSelection == 2) {
            document.body.innerHTML+="You lose! Scissors beats Paper.";
            document.body.innerHTML+="<br> *********************************** <br>";
            roundWinner = "computer";
            return computerVictories++;
    } else if 
        (playerSelection.toLowerCase() == "scissors" && computerSelection == 0) {
            document.body.innerHTML+="You lose! Rock beats Scissors.";
            document.body.innerHTML+="<br> *********************************** <br>";
            roundWinner = "computer";
            return computerVictories++;
    } else if 
        (playerSelection.toLowerCase() == "scissors" && computerSelection == 1) {
            document.body.innerHTML+="You won! Scissors beats Paper.";
            document.body.innerHTML+="<br> *********************************** <br>";
            roundWinner = "player";
            return playerVictories++;
        }
    else {
            document.body.innerHTML+="Its a tie!";
            document.body.innerHTML+="<br> *********************************** <br>";
            roundWinner = "tie";
            return roundWinner;
        }
    };

//Display result of the round
function displayResult() {
    document.body.innerHTML+="You chose " + playerSelection + ".<br>";
    document.body.innerHTML+=("The computer chose " + choiceOptions[computerSelection] + ".<br>");
}

//Play a whole session
function playSession () {
    playerPlay();
    computerPlay();
    displayResult();
    playRound(playerSelection, computerSelection);
};

//Play 5 games
function game() {
    for (let i = 0; i < 5; i++)
    playSession(); 
    if (playerVictories > computerVictories) {
        document.body.innerHTML+=("Congratulations! You won the game.");
    } else if (playerSelection < computerVictories) {
        document.body.innerHTML+=("You've lost the game. Better luck next time!");
    } else {
            document.body.innerHTML+=("It was a tie.")
    };
}

function refreshPage(){
    window.location.reload();
} 

document.getElementById("clickMe").onclick = game;

