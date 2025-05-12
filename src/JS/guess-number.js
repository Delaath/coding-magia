document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('guessInput');
  const guessText = document.getElementById('guessText');
  const checkBtn = document.getElementById('checkBtn');

  const secretNumber = Math.floor(Math.random() * 10) + 1;
  console.log('Загадане число:', secretNumber);

  checkBtn.addEventListener('click', function () {
    const userGuess = parseInt(input.value);

    guessText.classList.remove('error', 'success', 'info');
    void guessText.offsetWidth;

    if (isNaN(userGuess)) {
      guessText.textContent = 'Будь ласка, введіть число.';
      guessText.classList.add('error');
      return;
    }

    if (userGuess === secretNumber) {
      guessText.textContent = 'Вітаємо! Ви вгадали число!';
      guessText.classList.add('success');
    } else {
      guessText.textContent = 'Промах! Ще одна спроба?';
      guessText.classList.add('info');
    }
  });
});
