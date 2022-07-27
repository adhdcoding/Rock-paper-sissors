let previousChoices = [];
let computerScore = 0;
let userScore = 0;
const winValues = ["0-2", "1-0", "2-1"];

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
}
function playRound(userChoice, compChoice) {
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
  console.log(userScore)
  whoWins()
}

function computerChooses() {
  result = Math.floor(Math.random() * 3);
  console.log("computer:", result)
  return result
}

function playRounds() {
  for (i = 0; i < 5; i++) {
    console.log(computerChooses());
  }
}

function whoWins() {
  if (userScore == 5) {
    console.log("Congratulations you won the game");
  } else if (computerScore == 5) {
    console.log("OH NO! it looks like you lost the game, Try again?");
  }
}

playRound(1,computerChooses())
playRound(0,2)
playRound(2,2)
playRound(1,computerChooses())
playRound(0,2)
playRound(2,2)
playRound(1,computerChooses())
playRound(0,2)
playRound(2,2)
