// script.js
// description:rock, paper, scissors project
// author: landon437
// created: 3.17.25
// last update: 4.07.25

// html elements 
const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result-text");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");    
const resetBtn = document.getElementById("reset-btn");
const clearbtn = document.getElementById("clear-btn");



// scorekeeping values 
let userScore = 0;
let computerScore = 0;

// lets the function of the buttons be pressed
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});

// allows for the game to be played 
function playGame(userChoice) {
    const computerChoice =
    getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);             
    updateUI(userChoice, computerChoice, winner);
}
// the function lets the game be played and determinens the winner 


// list of random functions the CPU may choose from
function getComputerChoice() {
    const options = ["rock", "paper", "scissors", "pencil", "waterfountain"];
    const randomIndex = Math.floor(Math.random() * options.length);                 
    return options[randomIndex];

}
// lets the CPU randomly pick the function of (rock, paper, scissors, waterfountain, pencil)

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    }


                //if the player picks the function than the computer picks the other than 
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
// rock beats scissors
        (userChoice === "paper" && computerChoice === "rock") ||
// paper beats rock
        (userChoice === "scissors" && computerChoice === "paper") ||
// scissors beats paper
        (userChoice === "scissors" && computerChoice === "pencil") ||
// scissors beats pencil
        (userChoice === "rock" && computerChoice === "pencil") ||
        // rock beats pencil
        (userChoice === "pencil" && computerChoice === "paper") ||
        // pencil beats paper
        (userChoice === "rock" && computerChoice === "waterfountain") ||
        // rock beats water fountain
        (userChoice === "pencil" && computerChoice === "waterfountain") ||
        // pencil beats waterfountain
        (userChoice == "waterfountain" && computerChoice === "scissors") ||
        // waterfountain beats scissors
        (userChoice == "waterfountain" && computerChoice == "paper")
// watefountain beats paper


// shows all the functions of the rock paper scissors



// updates the interface of the score while comparing the functions chosen
// adds a score and returns it towards the score board
    ) {
        userScore++;
        return "user";
    } else {
        computerScore++;
        return "computer";
    }
}

// compares the intergers of what the player chose and the CPU chooses 
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



// lets the functions of the gamecount be as a startering interger as 0
const gameCountEl = document.getElementById("game-count");
let gameCount = 0;


// once the game is played than the gamecount increases and updates the UI
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    gameCount++; 
    gameCountEl.textContent = gameCount;
    updateUI(userChoice, computerChoice, winner);
}

// once the functions are clicked than compares them and determines what the score is and the gamecount 
resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0; 
    userScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    resultText.textContent = "Choose your weapon!";
});


// functions for clear button and gamecount reset
clearbtn.addEventListener("click", () => {
    gameCount = 0;
});



// updates the UI of the corrpesonding opitions to choose from
function updateUI(userChoice, computerChoice, winner) {

    // showcasing the list of selections choosing (rock, paper, scissors, waterfountain, pencil)
    const choiceEmojis = {
        rock: "✊",
        paper: "✋",
        scissors: "✌️",
        pencil: "✏️",
        waterfountain: "🚰"
    };


// updates the index into choosing the chosen interger 
    document.getElementById("player-choice").textContent = choiceEmojis[userChoice];
    document.getElementById("computer-choice").textContent = choiceEmojis[computerChoice];


// determines if the game ends in a draw
    if (winner === "draw") {
        resultText.textContent = "It's a draw!";

        // determines if the game ends in a user win
    } else if (winner === "user") {
        resultText.textContent = "Player Wins!";
        userScoreEl.textContent = userScore; 


        // determines if the game ends in a CPU win  
    } else {
        resultText.textContent = "Computer Wins!";
        computerScoreEl.textContent = computerScore; 
    }

}





