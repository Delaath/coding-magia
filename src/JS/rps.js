const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const translate = {
    rock: "Камінь",
    paper: "Папір",
    scissors: "Ножиці",
  };

  document.getElementById(
    "computer-choice"
  ).textContent = `Комп'ютер обрав: ${translate[computerChoice]}`;

  let result = "";
  if (playerChoice === computerChoice) {
    result = "Нічия!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Ти виграв(ла)!";
    playerScore++;
  } else {
    result = "Ти програв(ла)!";
    computerScore++;
  }

  document.getElementById("result").textContent = result;
  document.getElementById(
    "score"
  ).textContent = `Гравець: ${playerScore} | Комп'ютер: ${computerScore}`;
}

window.play = play;
