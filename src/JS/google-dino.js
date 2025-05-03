const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const restartButton = document.getElementById("restartButton");
const dinoImage = document.getElementById("dinoImage");
const cactusImage = document.getElementById("cactusImage");

let dino, obstacles, frame, score, gameOver;

function resetGame() {
  dino = {
    x: 50,
    y: 150,
    width: 40,
    height: 40,
    dy: 0,
    gravity: 0.6,
    jumpPower: -12,
    grounded: false,
  };
  obstacles = [];
  frame = 0;
  score = 0;
  gameOver = false;
  restartButton.style.display = "none";
  restartButton.classList.remove("restart-btn");
  update();
}

function drawGround() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 190, canvas.width, 2);
}

function drawDino() {
  ctx.drawImage(dinoImage, dino.x, dino.y, dino.width, dino.height);
}

function drawObstacles() {
  obstacles.forEach((obs) =>
    ctx.drawImage(cactusImage, obs.x, obs.y, obs.width, obs.height)
  );
}

function drawScore() {
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 30);
}

function update() {
  if (gameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGround();

  dino.dy += dino.gravity;
  dino.y += dino.dy;
  if (dino.y >= 150) {
    dino.y = 150;
    dino.dy = 0;
    dino.grounded = true;
  }

  if (frame % 90 === 0) {
    obstacles.push({ x: 800, y: 160, width: 20, height: 40 });
  }

  obstacles.forEach((obs) => {
    obs.x -= 5;
    if (obs.x + obs.width < 0) {
      obstacles.shift();
      score++;
    }

    if (
      dino.x < obs.x + obs.width &&
      dino.x + dino.width > obs.x &&
      dino.y + dino.height > obs.y
    ) {
      gameOver = true;
      restartButton.style.display = "block";
      restartButton.classList.add("restart-btn");
    }
  });

  drawDino();
  drawObstacles();
  drawScore();
  frame++;
  requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyW" && dino.grounded) {
    dino.dy = dino.jumpPower;
    dino.grounded = false;
  }
});

restartButton.addEventListener("click", resetGame);

resetGame();


