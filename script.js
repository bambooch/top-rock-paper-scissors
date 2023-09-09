// Implement Array for const messages


let playerScore = 0;
let computerScore = 0;

const GAME_LOST = "Too Bad! Computer won this game!";
const GAME_WON = "Congratulations! You won this game!";

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
// decideGameWinner();

  
// Creating elements

const container = document.querySelector('#container');


let buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.textContent;
    console.log(playRound(playerSelection));    
    document.getElementById('round-score').textContent = playRound(playerSelection);
  }) ;
});

// let roundScore = document.getElementsByClassName('.round-score');
// roundScore.textContent = 'twenty';














