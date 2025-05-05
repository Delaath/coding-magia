function calculateTime() {
  const input = document.getElementById("time-calculator-input").value;
  const result = document.getElementById("time-calculator-result");

  if (input) {
    const totalSeconds = parseInt(input, 10);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    result.textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
    result.style.display = "inline";
  } else {
    result.textContent = "...";
    result.style.display = "none";
  }
}
