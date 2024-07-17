/* GAME VARIABLES */
let userCount = 0;
let compCount = 0;
let tieCount = 0;

let rounds = 5;

/* USER BUTTONS + ELEMENTS ON PAGE */
const title = document.createElement('h2');
title.textContent = "Click Rock, Paper, or Scissors to play!";
title.setAttribute("class", "titleStyle");

const rules = document.createElement('p');
rules.textContent = "Whoever wins " + rounds + " rounds first wins the game. Click new game above to play again.";
rules.setAttribute("class", "rulesStyle");

const rock = document.createElement('button');
rock.textContent = "ROCK";
rock.setAttribute("class", "buttonStyle");

const paper = document.createElement('button');
paper.textContent = "PAPER";
paper.setAttribute("class", "buttonStyle");

const scissors = document.createElement('button');
scissors.textContent = "SCISSORS";
scissors.setAttribute("class", "buttonStyle");

const buttonContainer = document.querySelector('.choices');
const titleContainer = document.querySelector('#title');
const rulesContainer = document.querySelector('#rules');
const bContainer = document.querySelector('#buttons');

titleContainer.appendChild(title);
rulesContainer.appendChild(rules);
bContainer.appendChild(rock);
bContainer.appendChild(paper);
bContainer.appendChild(scissors);

buttonContainer.appendChild(titleContainer);
buttonContainer.appendChild(rulesContainer);
buttonContainer.appendChild(bContainer);

newGamebtn = document.querySelector("#new-game");
newGamebtn.textContent = "NEW GAME";
newGamebtn.setAttribute("class", "buttonStyle");

const resultsContainer = document.querySelector('#results');
resultsContainer.setAttribute("class", "resultsText");

const winnerResults = document.createElement('div');
winnerResults.setAttribute("class", "resultsText");

const playRoundResults = document.createElement('div');
playRoundResults.setAttribute("class", "resultsText");

const endGameResults = document.createElement('div');
endGameResults.setAttribute("class", "endGameText");

/* RPS BUTTON EVENT LISTENERS */
newGamebtn.addEventListener("click", newGame);

rock.addEventListener("click", () => {
    if(userCount < rounds && compCount < rounds) {
        playRound(userChoice = "rock", getComputerChoice());
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
        playRound(userChoice = "paper", getComputerChoice());
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
        playRound(userChoice = "scissors", getComputerChoice());
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
    resultsContainer.textContent = "";

    let user = userChoice;
    let computer = computerChoice;

    if (user == 'rock') {
        if (computer == 'paper') {
            compCount++;
            winnerResults.textContent = 'Computer wins. ';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }else if (computer == 'scissors') {
            userCount++;
            winnerResults.textContent = 'User wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }else {
            tieCount++;
            winnerResults.textContent = 'Tie!';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }
    }
    
    if (user == 'paper') {
        if (computer == 'rock') {
            userCount++;
            winnerResults.textContent = 'User wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }else if (computer == 'scissors') {
            compCount++;
            winnerResults.textContent = 'Computer wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }else {
            tieCount++;
            winnerResults.textContent = 'Tie!';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }
    }
    
    if (user == 'scissors') {
        if (computer == 'rock') {
            compCount++;
            winnerResults.textContent = 'Computer wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }else if (computer == 'paper') {
            userCount++;
            winnerResults.textContent = 'User wins.';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }else {
            tieCount++;
            winnerResults.textContent = 'Tie!';
            playRoundResults.textContent = 'User Count: ' + userCount + ' Computer Count: ' +
            compCount + ' Tie: ' + tieCount;
        }
    }
    resultsContainer.appendChild(winnerResults);
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
