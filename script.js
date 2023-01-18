let computerScore = 0;
let userScore = 0;

const compDisplay = document.querySelector(".computer-score");
const userDisplay = document.querySelector(".user-score");
compDisplay.textContent = computerScore;
userDisplay.textContent = userScore;


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3); // returns num 0, 1 or 2
    switch (num) {
        case (0):
            return "Rock";
            break;
        case (1):
            return "Paper";
            break;
        case (2):
            return "Scissors";
            break;
        default:
            return;
    }
}


// prerequisite: playerSelection is one of "rock", "paper" or "scissors" - case insensitive.
// returns result of rock paper scissors round, 1 = player wins, 0 = computer wins, -1 represents a tie
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return -1;
    }
    if ((playerSelection === "Rock" && computerSelection === "Paper")
        || (playerSelection === "Paper" && computerSelection === "Scissors")
        || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return 0;
    } else {
        return 1;
    }
}

function game(userChoice) {
    console.log("Game " + userScore)
    // plays a best of five rock paper scissors game agaisnt the computer. Ties are not counted in the five.

    //let userChoice = prompt("Rock, Paper, Scissors??");
    let cpmChoice = getComputerChoice();
    let outcome = playRound(userChoice, cpmChoice);
    const resultsHead = document.querySelector(".results > .header");
    const resultsInfo = document.querySelector(".results > .info");
    if (outcome == 1) {
        userScore++;
        resultsHead.textContent = "You Win! \n";
    } else if  (outcome == 0) {
        computerScore++;
        resultsHead.textContent = "Computer Wins! \n";
    } else if (outcome == -1){
        resultsHead.textContent = "Tie! \n";
    }
    
    

    // const compDisplay = document.querySelector(".computer-score");
    // const userDisplay = document.querySelector(".user-score");
    compDisplay.textContent = computerScore;
    userDisplay.textContent = userScore;

    resultsInfo.textContent ="MACHINE: " + cpmChoice + " VS MAN :" + userChoice;

    if (computerScore >= 5) {
        resultsHead.textContent = "Game Over. The computer has bested you!";
        endGame();
    } else if (userScore >= 5) {
        resultsHead.textContent = "Game Over. You have defeated the computer!";
        endGame();
    }

}

function endGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.disabled = true);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => game(button.textContent)));



