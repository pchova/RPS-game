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

const userChoice = "ROCK";
const computerChoice = getComputerChoice();
console.log(playRound(userChoice, computerChoice));

const userChoice2 = "Paper";
const computerChoice2 = getComputerChoice();
console.log(playRound(userChoice2, computerChoice2));