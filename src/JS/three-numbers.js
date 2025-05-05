
document.getElementById('calcBtn').addEventListener('click', () => {
    const vals = [
      document.getElementById('num1').value.trim(),
      document.getElementById('num2').value.trim(),
      document.getElementById('num3').value.trim()
    ];
    const nums = vals.map(v => {
      const n = Number(v);
      return (v === '' || Number.isNaN(n)) ? null : n;
    });

    const resultText = document.querySelector('.tree-num .result-text');
    const resultValue = document.getElementById('resultValue');

    if (nums.includes(null)) {
      resultText.classList.remove('success');
      resultText.classList.add('error');
      resultValue.textContent = 'некоректний ввід';
      return;
    }

    const max = Math.max(...nums);
    resultText.classList.remove('error');
    resultText.classList.add('success');
    resultValue.textContent = max;
  });
