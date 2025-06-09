const startText = document.getElementById("start-text");
const startScreen = document.getElementById("start-screen");
const hypnoSession = document.getElementById("hypno-session");
const imageContainer = document.getElementById("image-container");
const audio = document.getElementById("voice");

const phrases = [
  "OBEY", "SUBMIT", "SURRENDER", "GOOD PET", "YOU ARE MINE", "LET GO"
];

const imageExtensions = ["png", "jpg", "jpeg", "webp"];

startText.addEventListener("click", () => {
  startScreen.style.display = "none";
  hypnoSession.style.display = "block";

  // Prova ad avviare l'audio
  audio.play().catch(() => {});

  startHypnoSession();
});

function startHypnoSession() {
  // Testo ipnotico al centro
  setInterval(() => {
    const text = document.createElement("div");
    text.className = "hypno-text";
    text.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    hypnoSession.appendChild(text);

    setTimeout(() => text.remove(), 1500);
  }, 1200);

  // Mostra immagini popup random da cartella
  setInterval(() => {
    const ext = imageExtensions[Math.floor(Math.random() * imageExtensions.length)];
    const randomNum = Math.floor(Math.random() * 9999);
    const img = document.createElement("img");
    img.src = `/static/images/${randomNum}.${ext}`;
    img.style.top = `${Math.random() * 80 + 10}%`;
    img.style.left = `${Math.random() * 80 + 10}%`;
    imageContainer.appendChild(img);

    setTimeout(() => img.remove(), 2000);
  }, 1000);
}
