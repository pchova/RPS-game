/* VARIABLES */
let userCount = 0;
let compCount = 0;
let tieCount = 0;

/*USER BUTTONS ON PAGE */
const title = document.createElement('h2');
title.textContent = "To play, click rock, paper, or scissors!";
const rock = document.createElement('button');
rock.textContent = "rock";
const paper = document.createElement('button');
paper.textContent = "paper";
const scissors = document.createElement('button');
scissors.textContent = "scissors";

const buttonContainer = document.querySelector('#choices');
buttonContainer.appendChild(title);
buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);


/*METHODS TO PLAY */
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * options.length);

    return options[choice];
}

function getUserChoice() {
    /* ---- getUserChoice() function before creating the UI with JS -----

    let choice = alert("To play, click rock, paper, or scissors.");
    return choice.toLowerCase();
    */
}

function playRound(e) {
    let user = e.target.textContent;

    let computer = getComputerChoice();

    if (user == 'rock') {
        if (computer == 'paper') {
            compCount++;
            console.log('Computer wins.');
        }else if (computer == 'scissors') {
            userCount++;
            console.log('User wins.');
        }else {
            tieCount++;
            console.log('Tie!');
        }
    }
    
    if (user == 'paper') {
        if (computer == 'rock') {
            userCount++;
            console.log('User wins.');
        }else if (computer == 'scissors') {
            compCount++;
            console.log('Computer wins.');
        }else {
            tieCount++;
            console.log('Tie!');
        }
    }
    
    if (user == 'scissors') {
        if (computer == 'rock') {
            compCount++;
            console.log('Computer wins.');
        }else if (computer == 'paper') {
            userCount++;
            console.log('User wins.');
        }else {
            tieCount++;
            console.log('Tie!');
        }
    }

    console.log("\n");
    console.log("---------------Results---------------");
    console.log("User Count: " + userCount + ", Computer Count: " + compCount + ", Tie: " + tieCount);
    console.log("\n");
}












/* 
function playGame() {
    for(let i = 0; i < 5; i++) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();

        console.log("Round " + parseInt(i + 1));
        console.log("User Choice: " + userChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log(playRound(userChoice, computerChoice));
    }


    console.log("\n");
    console.log("---------------Results---------------");
    console.log("User Count: " + userCount + ", Computer Count: " + compCount + ", Tie: " + tieCount);

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

playGame(); 
 */

