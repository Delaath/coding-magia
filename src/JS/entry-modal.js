// Get the modals
var modal = document.getElementById("myModal");
var thankYouModal = document.getElementById("thankyou-modal");

// Get the button that saves the name and opens the thank you modal
var btn = document.getElementById("myBtn");

// Get all close buttons
var closeButtons = document.querySelectorAll(".close");

// Get input and output elements
var inputField = document.getElementById("guess-game-input");
var output = document.getElementById("output");

// Show the name input modal when the page loads
window.onload = function () {
    modal.style.display = "block";
};

// Close modals when clicking on any close button
closeButtons.forEach(button => {
    button.addEventListener("click", function () {
        modal.style.display = "none";
        thankYouModal.style.display = "none";
    });
});

// Close modals when clicking outside of them
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === thankYouModal) {
        thankYouModal.style.display = "none";
    }
});

// Save name, display it, and open the thank you modal
btn.addEventListener("click", function () {
    var name = inputField.value.trim();
    if (name) {
        output.innerText = "Привіт, " + name + "!"; // Display entered name
        modal.style.display = "none"; // Close the first modal
        setTimeout(() => {
            thankYouModal.style.display = "block"; // Open the thank you modal
        }, 300); // Small delay to avoid flickering
    } else {
        alert("Будь ласка, введіть своє ім’я!"); // Alert if name is empty
    }
});
