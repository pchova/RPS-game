/* GAME VARIABLES */
let userCount = 0;
let compCount = 0;
let tieCount = 0;

let computerChoice = getComputerChoice();
let userChoice;

let rounds = 10;

/* USER BUTTONS + ELEMENTS ON PAGE */
const title = document.createElement('h2');
title.textContent = "Click Rock, Paper, or Scissors to play!";
title.style.cssText = "color: hotpink; font-size: 30px;";

const rock = document.createElement('button');
rock.textContent = "ROCK";
rock.setAttribute("style", "padding: 10px; margin: 10px; background-color: pink; border: 3px solid hotpink; border-radius: 10px");

const paper = document.createElement('button');
paper.textContent = "PAPER";
paper.setAttribute("style", "padding: 10px; margin: 10px; background-color: pink; border: 3px solid hotpink; border-radius: 10px");

const scissors = document.createElement('button');
scissors.textContent = "SCISSORS";
scissors.setAttribute("style", "padding: 10px; margin: 10px; background-color: pink; border: 3px solid hotpink; border-radius: 10px");

const buttonContainer = document.querySelector('#choices');
buttonContainer.appendChild(title);
buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);

newGamebtn = document.querySelector("#new-game");
newGamebtn.textContent = "NEW GAME";
newGamebtn.setAttribute("style", "padding: 10px; margin: 10px; background-color: pink; border: 3px solid hotpink; border-radius: 10px");

const resultsContainer = document.querySelector('#results');
const playRoundResults = document.createElement('div');
const endGameResults = document.createElement('div');


/* RPS BUTTON EVENT LISTENERS */
newGamebtn.addEventListener("click", newGame);

rock.addEventListener("click", () => {
    if(userCount < rounds && compCount < rounds) {
        playRound(userChoice = "rock", computerChoice);
    }
    if (userCount == rounds || compCount == rounds) {
        if (userCount > compCount) {
            endGameResults.textContent = "The user wins!!";
        } else if ( userCount < compCount) {
            endGameResults.textContent = "The computer wins!!";
        }else if (userCount == compCount) {
            endGameResults.textContent = "It\'s a tie!";
        }else {
            endGameResults.textContent = "Nobody wins.";
        }
    }
    resultsContainer.appendChild(endGameResults);
});

paper.addEventListener("click", () => {
    if(userCount < rounds && compCount < rounds) {
        playRound(userChoice = "paper", computerChoice);
    }
    if (userCount == rounds || compCount == rounds) {
        if (userCount > compCount) {
            endGameResults.textContent = "The user wins!!";
        } else if ( userCount < compCount) {
            endGameResults.textContent = "The computer wins!!";
        }else if (userCount == compCount) {
            endGameResults.textContent = "It\'s a tie!";
        }else {
            endGameResults.textContent = "Nobody wins.";
        }
    }
    resultsContainer.appendChild(endGameResults);
});

scissors.addEventListener("click", () => {
    if(userCount < rounds && compCount < rounds) {
        playRound(userChoice = "scissors", computerChoice);
    }
    if (userCount == rounds || compCount == rounds) {
        if (userCount > compCount) {
            endGameResults.textContent = "The user wins!!";
        } else if ( userCount < compCount) {
            endGameResults.textContent = "The computer wins!!";
        }else if (userCount == compCount) {
            endGameResults.textContent = "It\'s a tie!";
        }else {
            endGameResults.textContent = "Nobody wins.";
        }
    }
    resultsContainer.appendChild(endGameResults);
}); 


/* FUNCTIONS TO PLAY */
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];

    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function playRound(userChoice, computerChoice) {

    let user = userChoice;
    let computer = computerChoice;

    if (user == 'rock') {
        if (computer == 'paper') {
            compCount++;
            resultsContainer.textContent = 'Computer wins. ';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }else if (computer == 'scissors') {
            userCount++;
            resultsContainer.textContent = 'User wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }else {
            tieCount++;
            resultsContainer.textContent = 'Tie!';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }
    }
    
    if (user == 'paper') {
        if (computer == 'rock') {
            userCount++;
            resultsContainer.textContent = 'User wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }else if (computer == 'scissors') {
            compCount++;
            resultsContainer.textContent = 'Computer wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }else {
            tieCount++;
            resultsContainer.textContent = 'Tie!';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }
    }
    
    if (user == 'scissors') {
        if (computer == 'rock') {
            compCount++;
            resultsContainer.textContent = 'Computer wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }else if (computer == 'paper') {
            userCount++;
            resultsContainer.textContent = 'User wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }else {
            tieCount++;
            resultsContainer.textContent = 'Tie!';
            playRoundResults.textContent = 'User Count: ' + userCount + ', Computer Count: ' +
            compCount + ', Tie: ' + tieCount;
        }
    }

    resultsContainer.appendChild(playRoundResults);
}

function newGame() {
    userCount = 0;
    compCount = 0;
    tieCount = 0;

    resultsContainer.removeChild(playRoundResults);
    resultsContainer.removeChild(endGameResults);
    resultsContainer.textContent = "Click to start new game.";
    endGameResults.textContent = "";
} 
