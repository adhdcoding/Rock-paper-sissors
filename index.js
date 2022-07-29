let rockElement = document.getElementById("rock-btn");
let paperElement = document.getElementById("paper-btn");
let scissorsElement = document.getElementById("scissors-btn");
const winValues = ["0-2", "1-0", "2-1"];
const roundsOutput = document.getElementById("round-output");
const gameOutput = document.getElementById("game-output");

let previousChoices = [''];
let computerScore = 0;
let userScore = 0;
let userChoice = 0;

paperElement.addEventListener("click", () => {
  let choice = 0
  choiceToString(choice)})

rockElement.addEventListener("click", playRound);
scissorsElement.addEventListener("click", playRound);

function choiceToString(n) {
  let result = "";
  if (n == 0) {
    result = "Rock";
  } else if (n == 1) {
    result = "Paper";
  } else if (n == 2) {
    result = "Scissors";
  }
  previousChoices.push(result);
  roundsOutput.innerText = `Previous rounds: ${previousChoices} score: ${userScore}`
}
// 
function playRound(userChoice, compChoice) {
  roundsOutput.innerHTML = `Previous rounds: ${previousChoices}`;
  let roundResult = `${userChoice}-${compChoice}`;
  if (userChoice == compChoice) {
    result = "tie";
    choiceToString(userChoice);
  } else if (winValues.includes(roundResult)) {
    ++userScore;
    result = "you win";
    choiceToString(userChoice);
  } else {
    ++computerScore;
    result = "you lose";
    choiceToString(userChoice);
  }
  
  console.log(previousChoices);
  if (whoWins()) {
    gameOutput.innerHTML = whoWins();
  }
}
// 
function computerChooses() {
  result = Math.floor(Math.random() * 3);
  console.log("computer:", result);
  return result;
}
// 
function whoWins() {
  if (userScore == 5) {
    return "Congratulations you won the game";
  } else if (computerScore == 5) {
    return "OH NO! it looks like you lost the game, Try again?";
  }
}
