//welcome-modal
var modalMenu = document.getElementById("myModal-menu");
var btnMenu = document.getElementById("myBtn-menu");
var spanMenu = document.getElementsByClassName("close-menu")[0];

btnMenu.onclick = function () {
  modalMenu.style.display = "block";
  modalMenu.style.visibility = "visible";
};

spanMenu.onclick = function () {
  modalMenu.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalMenu) {
    modalMenu.style.display = "none";
  }
};

const nameModal = document.getElementById("myModal");
const saveNameBtn = document.getElementById("myBtn");
const closeNameModal = document.querySelector("#myModal .close");
const nameInput = document.getElementById("modal-input");
const welcomeOutput = document.getElementById("output");

saveNameBtn.onclick = function () {
  const name = nameInput.value.trim();

  if (name) {
    welcomeOutput.textContent = `Вітаю, ${name}!`;
  } else {
    welcomeOutput.textContent = "Вітаю, User!";
  }

  nameModal.style.display = "none";
};

closeNameModal.onclick = function () {
  nameModal.style.display = "none";
};

window.addEventListener("click", function (event) {
  if (event.target === nameModal) {
    nameModal.style.display = "none";
  }
});

//theme-switch
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  // Start in light mode
  body.classList.add("light-mode");

  const toggle = document.querySelector(".theme-toggle");

  toggle.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-mode");

    if (isDark) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      themeIcon.src = "./img/svg/sun.svg";
      themeIcon.alt = "Light Mode";
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      themeIcon.src = "./img/svg/moon.svg";
      themeIcon.alt = "Dark Mode";
    }
  });
});

//drop-down
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".dropdown-toggle");
  const menu = document.querySelector(".dropdown-menu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    toggle.querySelector(".arrow").style.transform =
      menu.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
  });

  window.addEventListener("click", () => {
    menu.style.display = "none";
    toggle.querySelector(".arrow").style.transform = "rotate(0deg)";
  });
});
