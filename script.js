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
    if (outcome == 1) {
        userScore++;
    }
    if (outcome == 0) {
        computerScore++;
    }
    

    // const compDisplay = document.querySelector(".computer-score");
    // const userDisplay = document.querySelector(".user-score");
    compDisplay.textContent = computerScore;
    userDisplay.textContent = userScore;

    const results = document.querySelector(".results");
    results.textContent = "Computer: " + cpmChoice + " VS User :" + userChoice;
    if (outcome == -1) {
        results.textContent = "Tie! \n" + results.textContent;
     }

    // Update score panel divs with outcome

    // If either player or computer has more than 5 wins, end round and disable button functionality


}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => game(button.textContent)));



