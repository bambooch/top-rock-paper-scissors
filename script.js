// Implement Array for const messages


let playerScore = 0;
let computerScore = 0;

const GAME_LOST_MSSG= "Too Bad! Computer won this game!";
const GAME_WON_MSSG = "Congratulations! You won this game!";

<<<<<<< HEAD
=======
const USER_ROUND_WON_MSSG = "You won this round!";
const USER_ROUND_LOST_MSSG = "You lost this round!";
const USER_ROUND_TIE_MSSG = "It's a tie!";

>>>>>>> bf2b26b4cb4006e8d43e2225a44c2a9a5635c12d

function getComputerChoice() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

// console.log(getComputerChoice());

function getPlayerSelection() {
  let playerSelectionPrompt = prompt(
    "Make your choice: ROCK, PAPER or SCISSORS!"
  ).toLowerCase();
  return playerSelectionPrompt;
}

// console.log(getPlayerSelection());

function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return USER_ROUND_TIE_MSSG;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return USER_ROUND_WON_MSSG;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return USER_ROUND_WON_MSSG;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return USER_ROUND_WON_MSSG;
  }
  return USER_ROUND_LOST_MSSG;
}

// console.log(playRound());


function decideRoundWinner(roundResult) {
  if(roundResult === USER_ROUND_WON_MSSG) {
     playerScore += 1;
  }
  if (roundResult === USER_ROUND_LOST_MSSG) {
     computerScore += 1;
  }
}


function decideGameWinner() {
    if (playerScore > computerScore) {
        alert(GAME_WON_MSSG);
    }
    if (playerScore < computerScore) {
        alert(GAME_LOST_MSSG);
    }
    // alert('IT\'S A DRAW');
}

// game();
decideGameWinner();

<<<<<<< HEAD
  
// Creating elements

const container = document.querySelector('#container');
const resultDisplay = document.createElement('div');
const buttons = ['rock', 'scissor', 'paper'];

buttons.forEach((btnText) => {
  const newButton = document.createElement('button');
  newButton.textContent = btnText;
  newButton.classList.add(`${btnText}-btn`);
  container.append(newButton);
});

// const rockButton = document.createElement('button');
// rockButton.classList.add('rock-bttn');
// rockButton.textContent = 'ROCK';
// const paperButton = document.createElement('button');
// paperButton.classList.add('paper-bttn');
// paperButton.textContent = 'PAPER';
// const scissorsButton = document.createElement('button');
// scissorsButton.textContent = 'SCISSORS';
// // scissorsButton.classList.add()
// container.append(rockButton, paperButton, scissorsButton);
// container.append(rockButton);
=======
playerScore = 0;
computerScore = 0;
>>>>>>> bf2b26b4cb4006e8d43e2225a44c2a9a5635c12d
