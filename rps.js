function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * options.length);

    return options[choice];
}

//console.log(getComputerChoice());

    
function playRound(userChoice, computerChoice) {
    let user = userChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    console.log("User\'s Choice: " + user);
    console.log("Computer\'s Choice: " + computer + "\n");
    if (user == 'rock') {
        if (computer == 'paper') {
        console.log('Computer wins.');
        }else if (computer == 'scissors') {
        console.log('User wins.');
        }else {
        console.log('Tie!');
        }
    }
    
    if (user == 'paper') {
        if (computer == 'rock') {
        console.log('User wins.');
        }else if (computer == 'scissors') {
        console.log('Computer wins.');
        }else {
        console.log('Tie!');
        }
    }
    
    if (user == 'scissors') {
        if (computer == 'rock') {
        console.log('Computer wins.');
        }else if (computer == 'paper') {
        console.log('User wins.');
        }else {
        console.log('Tie!');
        }
    }
}

const userChoice = "ROCK";
const computerChoice = getComputerChoice();
console.log(playRound(userChoice, computerChoice));

const userChoice2 = "Paper";
const computerChoice2 = getComputerChoice();
console.log(playRound(userChoice2, computerChoice2));