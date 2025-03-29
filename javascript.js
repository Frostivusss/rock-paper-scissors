
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



function playGame(playRound) {
    let humanScore = 0;
    let computerScore = 0;
    
    for (i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function playRound(humanChoice, computerChoice) {

        //human uses rock. computer uses paper. human lose
        if (humanChoice === 1 && computerChoice === 2) {
            computerScore++;
            console.log("Computer Wins the round " + (+i + 1));
    
            // human uses paper. computer uses scissors. human lose
        } else if (humanChoice === 2 && computerChoice === 3) {
            computerScore++;
            console.log("Computer Wins the round " + (+i + 1));
    
            // human uses scissors. computer uses rock. human loose.
        } else if (humanChoice === 3 && computerChoice === 1) {
            computerScore++;
            console.log("Computer Wins the round " + (+i + 1));
    
            // human and computer uses the same weapon. tie
        } else if ((humanChoice === 1 && computerChoice === 1)  ||
                (humanChoice === 2 && computerChoice === 2) ||
                (humanChoice === 3 && computerChoice === 3)   
            ) {
                console.log("It's a tie! Restarting the round. Not counted.");
                i--;
            //human win
        } else {
            console.log("Human Wins the round " + (+i + 1));
            humanScore++;
        }
    }
        //print human wins the game if humanscore is 3
    if (humanScore >= 3) {
        console.log("Human is the game winner!");

        //print computer wins the game otherwise
    } else {
        console.log("Computer is the game winner!");
    }

}

playGame();