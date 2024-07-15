/* VARIABLES */
let userCount = 0;
let compCount = 0;
let tieCount = 0;

let computerChoice = getComputerChoice();
let userChoice;

/*USER BUTTONS ON PAGE */
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

const resultsContainer = document.querySelector('#results');

rock.addEventListener("click", () => {
    playRound(userChoice = "rock", computerChoice);
});

paper.addEventListener("click", () => {
    playRound(userChoice = "paper", computerChoice);
});

scissors.addEventListener("click", () => {
    playRound(userChoice = "scissors", computerChoice);
}); 


/*METHODS TO PLAY */

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * options.length);

    return options[choice];
}

function playRound(userChoice, computerChoice) {

    let user = userChoice;
    let computer = computerChoice;
    let i = 0;

    const playRoundResults = document.createElement('div');

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



//new direction of how to program this:
//delete playGame() and create newGame() function
//keep score in event listener and end once someone hits 5 points
//new game restarts score to 0


function playGame() {
    
    for(let i = 0; i < 5; i++) {
        //console.log("User Choice: " + userChoice);
        //console.log("Computer Choice: " + computerChoice);
        //console.log(playRound(userChoice, computerChoice));

        console.log("Round " + parseInt(i + 1));

        if (userCount > compCount) {
            console.log("The user wins!!");
        } else if ( userCount < compCount) {
            console.log("The computer wins!!");
        }else if (userCount == compCount) {
            console.log("It\s a tie!");
        }else {
            console.log("Nobody wins.");
        }

    }

}

//playGame();

