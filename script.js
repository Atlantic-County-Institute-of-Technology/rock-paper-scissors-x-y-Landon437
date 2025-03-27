const choices = document.querySelectorAll(".choice");

const resultText = document.getElementById("result-text");

const userScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");      /* these are what all the indexs refrain to as inside of the java script */

const resetBtn = document.getElementById("reset-btn");

let userScore = 0;

let computerScore = 0;

choices.forEach(choice => {

    choice.addEventListener("click", () => {

        const userChoice = choice.id;

        playGame(userChoice);

    });

});

function playGame(userChoice) {
    const computerChoice =
    getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);             /* this allows you to play the game */
    updateUI(userChoice, computerChoice, winner);
}


function getComputerChoice() {

    const options = ["rock", "paper", "scissors", "pencil", "waterfountain"];

    const randomIndex = Math.floor(Math.random() * options.length);                 /* these are all the opitions that you get to pick from */

    return options[randomIndex];

}


function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {

        return "draw";

    }



    if (

        (userChoice === "rock" && computerChoice === "scissors") ||

        (userChoice === "paper" && computerChoice === "rock") ||

        (userChoice === "scissors" && computerChoice === "paper") ||

        (userChoice === "scissors" && computerChoice === "pencil") ||

        (userChoice === "rock" && computerChoice === "pencil") ||

        (userChoice === "pencil" && computerChoice === "paper") ||

        (userChoice === "rock" && computerChoice === "waterfountain") ||

        (userChoice === "pencil" && computerChoice === "waterfountain") ||

        (userChoice == "waterfountain" && computerChoice === "scissors") ||

        (userChoice == "waterfountain" && computerChoice == "paper")

/* this shows what beats what inside of the code */


    ) {
        userScore++;

        return "user";

    } else {
        computerScore++;

        return "computer";

    }
}

function updateUI(userChoice, computerChoice, winner) {

    if (winner === "draw") {

        resultText.textContent = `It's a draw! You both chose ${userChoice}.`;

    } else if (winner === "user") {

        resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;

        userScoreEl.textContent = userScore;

    } else {

        resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;

        computerScoreEl.textContent = computerScore;

    }

}

        /* this deteremines the winner and the loser or if its a draw */


resetBtn.addEventListener("click", () => {

    userScore = 0;

    computerScore = 0; 

    userScoreEl.textContent = "0";

    computerScoreEl.textContent = "0";

    resultText.textContent = "Choose your weapon!";

});

/* and these are all the functions that allow the game to work */
