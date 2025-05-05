document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('guessInput');
    const guessText = document.getElementById('guessText');
    const checkBtn = document.getElementById('checkBtn');
  
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    console.log('Загадане число:', secretNumber); 
  
    checkBtn.addEventListener('click', function () {
      const userGuess = parseInt(input.value);
  
      if (isNaN(userGuess)) {
        guessText.textContent = 'Будь ласка, введіть число.';
        guessText.style.color = 'red';
        return;
      }
  
      if (userGuess === secretNumber) {
        guessText.textContent = 'Вітаємо! Ви вгадали число!';
        guessText.style.color = 'green';
      } else {
        guessText.textContent = 'На жаль, ви не вгадали. Спробуйте ще раз!';
        guessText.style.color = 'red';
      }
    });
  });