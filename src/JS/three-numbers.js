document.querySelectorAll(".input-number").forEach((input) => {
  input.addEventListener("input", findMax);
});

export function findMax() {
  const num1 = parseFloat(document.querySelector(".input-number-1").value);
  const num2 = parseFloat(document.querySelector(".input-number-2").value);
  const num3 = parseFloat(document.querySelector(".input-number-3").value);
  const resultSpan = document.getElementById("numbers-result");

  resultSpan.classList.remove("result-animate");
  void resultSpan.offsetWidth;

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    const maxNumber = Math.max(num1, num2, num3);
    resultSpan.textContent = maxNumber;
  } else {
    resultSpan.textContent = "—";
  }

  resultSpan.classList.add("result-animate");
}
