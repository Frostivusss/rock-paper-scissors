let humanScore = 0;
let computerScore = 0;

const btn1 = document.querySelector("#rock");
const btn2 = document.querySelector("#paper");
const btn3 = document.querySelector("#scissor");
const list = document.querySelector("ol");

btn1.addEventListener("click", function (e) {
    const humanChoice = 1;
    playRound(humanChoice, getComputerChoice());
});

btn2.addEventListener("click", function (e) {
    const humanChoice = 2;
    playRound(humanChoice, getComputerChoice());
});

btn3.addEventListener("click", function (e) {
    const humanChoice = 3;
    playRound(humanChoice, getComputerChoice());
});

function checkWinner(){
    //print human wins the game if humanscore is 3 and reset the game
    if (humanScore >= 3) {
        alert("Human is the game winner!");
        list.innerHTML = "";
        humanScore=0;
        computerScore=0;

        //print computer wins the game otherwise and reset the game
    } else if (computerScore > 2) {
        alert("Computer is the game winner!");
        list.innerHTML = "";
        humanScore=0;
        computerScore=0;
    }
}

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

    function playRound(humanChoice, computerChoice) {

        const newlist = document.createElement("li");
        const newText = document.createElement("span");
        newlist.appendChild(newText);
        list.appendChild(newlist);

        //human uses rock. computer uses paper. human lose
        if (humanChoice === 1 && computerChoice === 2) {
            computerScore++;
            newText.textContent = ("H=" + humanScore + " vs C=" + computerScore + " || Computer Wins the round ");
    
            // human uses paper. computer uses scissors. human lose
        } else if (humanChoice === 2 && computerChoice === 3) {
            computerScore++;
            newText.textContent = ("H=" + humanScore + " vs C=" + computerScore + " || Computer Wins the round ");
    
            // human uses scissors. computer uses rock. human loose.
        } else if (humanChoice === 3 && computerChoice === 1) {
            computerScore++;
            newText.textContent = ("H=" + humanScore + " vs C=" + computerScore + " || Computer Wins the round ");
    
            // human and computer uses the same weapon. tie
        } else if ((humanChoice === 1 && computerChoice === 1)  ||
                (humanChoice === 2 && computerChoice === 2) ||
                (humanChoice === 3 && computerChoice === 3)   
            ) {
                newText.textContent = ("H=" + humanScore + " vs C=" + computerScore + " || It's a tie! Restarting the round. Not counted.");
            //human win
        } else {
            humanScore++;
            newText.textContent = ("H=" + humanScore + " vs C=" + computerScore + " || Human Wins the round ");
        }

        checkWinner();
    }