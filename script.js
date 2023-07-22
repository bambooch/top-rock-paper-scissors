
let playerScore;
let computerScore;

computerWinsMsg = ("Too Bad! Computer won this game!");
playerWinsMsg = ("Congratulations! You won this game!");

ROUND_WON = ("You are a winner!");
ROUND_LOST = ("You lost!");
TIE_GAME = ("It's a tie!");


function getComputerChoice () {
    const computerSelection = ["rock", "paper", "scissors"];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];

} 

// console.log(getComputerChoice());


function getPlayerSelection () {
    let playerSelectionPrompt = prompt("Choose your weapon: ROCK, PAPER or SCISSORS!").toLowerCase();
    return playerSelectionPrompt;
}

// console.log(getPlayerSelection());


function playRound (playerSelection, computerSelection) {

    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        return TIE_GAME;
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return (`${ROUND_WON} Rock beats scissors!`);
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return (`${ROUND_WON} Paper beats rock!`);
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return (`${ROUND_WON} Scissors beats paper!`);
    }
    else {
        return ROUND_LOST;
    }


}

// console.log(playRound());



function game() {
    
    for (let i = 0; i < 5; i++) {
        const playedRound = playRound();
        
        console.log(playedRound);
    }
}

console.log(game());


function declareWinner() {
    if (game() === ROUND_WON) {
        playerScore += 0;
    }
    if (game() === ROUND_LOST) {
        computerScore += 0;
        
    }
}

console.log(declareWinner());