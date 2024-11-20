const password = "khushi2025";
const countdownDate = new Date("Jan 5, 2025 00:00:00").getTime();

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === password) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    startCountdown();
  } else {
    document.getElementById("error-message").textContent = "Incorrect password. Try again!";
  }
}

function startCountdown() {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").style.display = "none";
      document.getElementById("celebration").style.display = "block";
      document.getElementById("activities").style.display = "block";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000)) / 1000);

      document.getElementById("countdown-timer").textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

function blowCandle() {
  const flame = document.querySelector(".flame");
  flame.style.display = "none";
  document.getElementById("message").textContent = "Make a wish, Khushi!";
}
