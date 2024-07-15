// Button to srtat the game
const startBtn = document.querySelector(".start-game");

// Array of choices
const choices = ["rock", "paper", "scissors"];
let playerCounter = 0;
let computerCounter = 0;
const winningScore = 2;

startBtn.addEventListener("click", function () {
  //Ask for player choice
  let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
  console.log(playerSelection);

  // Create random computer choice
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerSelection);

  // If/else logic to decide winner and return the result in the console
  if (playerSelection === computerSelection) {
    console.log(
      `It's a draw. Try again. The current score is Player: ${playerCounter} to Computer ${computerCounter}.`
    );
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerCounter++;
    if (computerCounter === winningScore) {
      console.log(
        `The computer wins this game by ${computerCounter} to ${playerCounter}`
      );
      playerCounter = 0;
      computerCounter = 0;
    } else {
      console.log(
        `The computer wins this time. The score is ${playerCounter} to the player and ${computerCounter} to the computer.`
      );
    }
  } else {
    playerCounter++;
    if (playerCounter === winningScore) {
      console.log(`You win ${playerCounter} to ${computerCounter}`);
      playerCounter = 0;
      computerCounter = 0;
    } else {
      console.log(
        `You win this time. The score is ${playerCounter} to the player and ${computerCounter} to the computer.`
      );
    }
  }
});

// Didn't fully read the instructions before i dived in so it is a bit different to how it is supposed to be. I'm really happy with it though. It works well.
