let playerScore = 0;
let computerScore = 0;

const GAME_LOST = "Too Bad! Computer won this game!";
const GAME_WON = "Congratulations! You won this game!";

const USER_ROUND_WON = "You are a winner!";
const USER_ROUND_LOST = "You lost!";
const USER_ROUND_TIE = "It's a tie!";


function getComputerChoice() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

// console.log(getComputerChoice());

function getPlayerSelection() {
  let playerSelectionPrompt = prompt(
    "Choose your weapon: ROCK, PAPER or SCISSORS!"
  ).toLowerCase();
  return playerSelectionPrompt;
}

// console.log(getPlayerSelection());

function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return USER_ROUND_TIE;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return USER_ROUND_WON;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return USER_ROUND_WON;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return USER_ROUND_WON;
  }
  return USER_ROUND_LOST;
}

// console.log(playRound());

function game() {
  for (let i = 0; i < 5; i++) {
    const roundResult = playRound();

    console.log(roundResult);
  }
}

console.log(game());

function decideRoundWinner(roundResult) {
  if(roundResult === USER_ROUND_WON) {
    playerScore += 1;
  }
}

function decideGameWinner() {

}
