let userCount = 0;
let compCount = 0;
let tieCount = 0;

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * options.length);

    return options[choice];
}
//console.log(getComputerChoice());

function getUserChoice() {
    let choice = prompt("To play, type rock, paper, or scissors: ");
    return choice.toLowerCase();
}
    
function playRound(userChoice, computerChoice) {
    let user = userChoice;
    let computer = computerChoice;

    if (user == 'rock') {
        if (computer == 'paper') {
            compCount++;
            return 'Computer wins.';
        }else if (computer == 'scissors') {
            userCount++;
            return 'User wins.';
        }else {
            tieCount++;
            return 'Tie!';
        }
    }
    
    if (user == 'paper') {
        if (computer == 'rock') {
            userCount++;
            return 'User wins.';
        }else if (computer == 'scissors') {
            compCount++;
            return 'Computer wins.';
        }else {
            tieCount++;
            return 'Tie!';
        }
    }
    
    if (user == 'scissors') {
        if (computer == 'rock') {
            compCount++;
            return 'Computer wins.';
        }else if (computer == 'paper') {
            userCount++;
            return 'User wins.';
        }else {
            tieCount++;
            return 'Tie!';
        }
    }
}

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