var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let weapon = (Math.floor(Math.random() * 3) + 1);

    if (weapon === 1) {
        return  1;
    } else if (weapon === 2) {
         return  2;
    } else {
        return  3;
    }
}

function getHumanChoice() {
    let weapon = prompt("Choose your weapon! 1: Rock, 2: Paper, 3: Scissors");
    weapon = +weapon;

    if (weapon === 1) {
        return  1;
    } else if (weapon === 2) {
         return  2;
    } else {
        return  3;
    }
}

function playRound(humanChoice, computerChoice) {
    //human uses rock. computer uses paper. human lose
    if (humanChoice === 1 && computerChoice === 2) {
        computerScore++;
        console.log("Computer Wins!");
        // human uses paper. computer uses scissors. human lose
    } else if (humanChoice === 2 && computerChoice === 3) {
        computerScore++;
        console.log("Computer Wins!");
        // human uses scissors. computer uses rock. human loose.
    } else if (humanChoice === 3 && computerChoice === 1) {
        computerScore++;
        console.log("Computer Wins!");
        // humae and computer uses the same weapon. tie
    } else if ((humanChoice === 1 && computerChoice === 1)  ||
            (humanChoice === 2 && computerChoice === 2) ||
            (humanChoice === 3 && computerChoice === 3)   
        ) {
            console.log("It's a tie!");

    } else {
        console.log("Human Wins!");
        humanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);