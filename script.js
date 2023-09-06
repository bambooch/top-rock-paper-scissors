// Implement Array for const messages


let playerScore = 0;
let computerScore = 0;

const GAME_LOST = "Too Bad! Computer won this game!";
const GAME_WON = "Congratulations! You won this game!";


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

// game();
decideGameWinner();

  
// Creating elements

const buttons = ['rock', 'scissor', 'paper'];

const container = document.querySelector('#container');

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