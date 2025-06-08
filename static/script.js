const startText = document.getElementById("start-text");
const startScreen = document.getElementById("start-screen");
const hypnoSession = document.getElementById("hypno-session");
const imageContainer = document.getElementById("image-container");
const audio = document.getElementById("voice");

const phrases = [
  "OBEY", "SUBMIT", "RELAX", "YOU ARE MINE", "SURRENDER", "GOOD PET", "LET GO"
];

// Al click su "Click to Obey"
startText.addEventListener("click", () => {
  startScreen.style.display = "none";
  hypnoSession.style.display = "block";

  // Prova ad avviare l'audio
  audio.play().catch((e) => console.warn("Audio non avviato:", e));

  startHypnoSession();
});

function startHypnoSession() {
  // Frasi ipnotiche al centro
  setInterval(() => {
    const text = document.createElement("div");
    text.className = "hypno-text";
    text.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    hypnoSession.appendChild(text);

    setTimeout(() => {
      text.remove(); // rimuove dopo 1.5 secondi
    }, 1500);
  }, 1300);

  // Mostra immagini random popup da /static/images/
  setInterval(() => {
    const img = document.createElement("img");
    const randomId = Math.floor(Math.random() * 100000);
    const extensions = ["png", "jpg", "jpeg", "webp"];
    const ext = extensions[Math.floor(Math.random() * extensions.length)];
    img.src = `/static/images/${randomId}.${ext}`;
    img.style.top = `${Math.random() * 80 + 10}%`;
    img.style.left = `${Math.random() * 80 + 10}%`;
    imageContainer.appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 2000);
  }, 1000);
}
