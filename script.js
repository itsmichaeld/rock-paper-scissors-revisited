const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const resultsText = document.querySelector(".results-text");
const scoreBoard = document.querySelector(".score-board");
const resetBtn = document.querySelector(".reset-btn");

const choices = ["rock", "paper", "scissors"];
let playerCounter = 0;
let computerCounter = 0;
const winningScore = 5;

//Function to update score text
function updateScore() {
  scoreBoard.textContent = `Player: ${playerCounter} : Computer: ${computerCounter}`;
}

//function to disable game buttons after either payer wins, requires game reset to enable buttons
function disableGameBtns() {
  if (playerCounter == winningScore || computerCounter == winningScore) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
  }
}

function playRound(choice) {
  // Create random computer choice
  let compChoice = choices[Math.floor(Math.random() * choices.length)];

  // If/else logic to decide winner and return the result in the console

  //Logic for draw
  if (choice === compChoice) {
    updateScore();
    resultsText.textContent = `You chose ${choice}. The computer chose ${compChoice}. It's a draw.`;
    //Logic for computer winning scenario
  } else if (
    (choice == "rock" && compChoice == "paper") ||
    (choice == "paper" && compChoice == "scissors") ||
    (choice == "scissors" && compChoice == "rock")
  ) {
    computerCounter++;
    updateScore();
    if (computerCounter === winningScore) {
      resultsText.textContent = `The computer wins this game by ${computerCounter} to ${playerCounter}`;
      disableGameBtns();
    } else {
      resultsText.textContent = `The computer wins this time.`;
    }
    //Player winning scenario
  } else {
    playerCounter++;
    updateScore();
    if (playerCounter === winningScore) {
      resultsText.textContent = `You win ${playerCounter} to ${computerCounter}`;
      disableGameBtns();
    } else {
      resultsText.textContent = `You win this time.`;
    }
  }
}

//Function to reset game, enable buttons, reset scores and text
function resetGame() {
  playerCounter = 0;
  computerCounter = 0;
  scoreBoard.textContent = `Player: ${playerCounter} : Computer: ${computerCounter}`;
  resultsText.textContent = ``;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
resetBtn.addEventListener("click", () => resetGame());
