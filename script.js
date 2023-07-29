let playerScore = 0;
let computerScore = 0;

const GAME_LOST_MSSG= "Too Bad! Computer won this game!";
const GAME_WON_MSSG = "Congratulations! You won this game!";

const USER_ROUND_WON_MSSG = "You won this round!";
const USER_ROUND_LOST_MSSG = "You lost this round!";
const USER_ROUND_TIE_MSSG = "It's a tie!";


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
    decideRoundWinner(roundResult);
}
}

function decideRoundWinner(roundResult) {
  if(roundResult === USER_ROUND_WON) {
     playerScore += 1;
  }
  if (roundResult === USER_ROUND_LOST) {
     computerScore += 1;
  }
}


function decideGameWinner() {
    if (playerScore > computerScore) {
        alert(GAME_WON);
    }
    if (playerScore < computerScore) {
        alert(GAME_LOST);
    }
    // alert('IT\'S A DRAW');
}

game();
decideGameWinner();

playerScore = 0;
computerScore = 0;
