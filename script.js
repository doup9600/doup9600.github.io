const BALANCE_KEY = "bal";
let balance = 0;
const balanceEl = document.getElementById("balance");
const resetBtn = document.getElementById("resetBtn");

function loadBalance() {
  const saved = localStorage.getItem(BALANCE_KEY);
  if (saved) {
    balance = parseInt(saved);
  } else {
    balance = 1000;
    localStorage.setItem(BALANCE_KEY, balance);
  }
  updateDisplay();
}

function saveBalance() {
  localStorage.setItem(BALANCE_KEY, balance);
}

function updateDisplay() {
  balanceEl.textContent = balance;
}

function goToGame(gameName) {
  window.location.href = `${gameName}/index.html`;
}

resetBtn.addEventListener("click", () => {
  balance = 1000;
  saveBalance();
  updateDisplay();
});

loadBalance();
