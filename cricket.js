let scoreStr = localStorage.getItem("score");
let score = JSON.parse(scoreStr) || {
  win: 0,
  tie: 0,
  lost: 0,
};

function displayScore() {
  return `won:${score.win} lost:${score.lost} tie:${score.tie}`;
}
function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        tie: 0,
        lost: 0,
      };
}
function showResult(userChoice, computerChoice, resultMsg) {
  localStorage.setItem("score", JSON.stringify(score));
  alert(`You chose ${userChoice}\nComputer chose ${computerChoice}\n${resultMsg}
       ${displayScore()} `);
  console.log(score);
}
function playGame(userChoice) {
 
  const randomNumber = Math.random() * 3;
  let computerChoice; 

  if (randomNumber <= 1) {
    computerChoice = "Bat";
  } else if (randomNumber <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stumps";
  }


  let resultMsg;
  if (userChoice === computerChoice) {
    resultMsg = "It's a tie!";
    score.tie++;
  } else if (
    (userChoice === "Bat" && computerChoice === "Ball") ||
    (userChoice === "Ball" && computerChoice === "Stumps") ||
    (userChoice === "Stumps" && computerChoice === "Bat")
  ) {
    resultMsg = "You won!";
    score.win++;
  } else {
    resultMsg = "Computer won!";
    score.lost++;
  }
  showResult(userChoice, computerChoice, resultMsg);
}
