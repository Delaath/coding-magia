document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('yearInput');
    const resultText = document.getElementById('resultText');
    const searchBtn = document.getElementById('searchBtn');
  
    searchBtn.addEventListener('click', function () {
      const year = parseInt(input.value);
  
      if (isNaN(year)) {
        resultText.textContent = 'Будь ласка, введіть коректний рік.';
        resultText.style.color = 'red';
        return;
      }
  
      const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
      if (isLeap) {
        resultText.textContent = 'Ви народилися у високосний рік!';
        resultText.style.color = 'green';
      } else {
        resultText.textContent = 'Ви не народилися у високосний рік.';
        resultText.style.color = 'red';
      }
    });
  });