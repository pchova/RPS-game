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
    let user = userChoice
    let computer = computerChoice

    if (user == 'rock') {
        if (computer == 'paper') {
            return 'Computer wins.';
        }else if (computer == 'scissors') {
        console.log('User wins.');
        }else {
            return 'Tie!';
        }
    }
    
    if (user == 'paper') {
        if (computer == 'rock') {
            return 'User wins.';
        }else if (computer == 'scissors') {
            return 'Computer wins.';
        }else {
            return 'Tie!';
        }
    }
    
    if (user == 'scissors') {
        if (computer == 'rock') {
            return 'Computer wins.';
        }else if (computer == 'paper') {
            return 'User wins.';
        }else {
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
}

console.log(playGame());