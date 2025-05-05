document.querySelectorAll('.input-number').forEach(input => {
    input.addEventListener('input', findMax);
  });
  
  export function findMax() {
    let num1 = parseFloat(document.querySelector(".input-number-1").value);
    let num2 = parseFloat(document.querySelector(".input-number-2").value);
    let num3 = parseFloat(document.querySelector(".input-number-3").value);
    let resultElement = document.querySelector(".result");
  
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      let maxNumber = Math.max(num1, num2, num3);
      resultElement.innerText = "Найбільше число, яке ви ввели - " + maxNumber;
    } else {
      resultElement.innerText = "Будь ласка, введіть всі три числа коректно.";
    }
  }