// Implement Array for const messages


let playerScore = 0;
let computerScore = 0;

const GAME_LOST_MSSG= "Too Bad! Computer won this game!";
const GAME_WON_MSSG = "Congratulations! You won this game!";

const USER_ROUND_TIE = 'It\'s a tie';
const USER_ROUND_WON = 'You won this round';
const USER_ROUND_LOST = 'You lost this round';



function getComputerChoice() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

// console.log(getComputerChoice());

<<<<<<< HEAD
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

=======
// function getPlayerSelection() {
  //   let playerSelectionPrompt = prompt(
    //     "Choose your weapon: ROCK, PAPER or SCISSORS!"
    //   ).toLowerCase();
    //   return playerSelectionPrompt;
    // }
    
    function playRound(playerSelection) {
      let computerSelection = getComputerChoice();
      playerSelection = playerSelection.toLowerCase();
      
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
// console.log(getPlayerSelection());

>>>>>>> rps-ui
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
// decideGameWinner();

<<<<<<< HEAD
  
// Creating elements

const container = document.querySelector('#container');


let buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.textContent;
    console.log(playRound(playerSelection));    
  });
  // let roundScore = document.getElementsByClassName('.round-score').textContent(playRound(playerSelection));
});

// let roundScore = document.getElementsByClassName('.round-score');
// roundScore.textContent = 'twenty';














<<<<<<< HEAD
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
=======
>>>>>>> rps-ui
