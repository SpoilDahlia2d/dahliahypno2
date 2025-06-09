const startText = document.getElementById("start-text");
const startScreen = document.getElementById("start-screen");
const hypnoSession = document.getElementById("hypno-session");
const imageContainer = document.getElementById("image-container");
const audio = document.getElementById("voice");

const phrases = [
  "OBEY", "SUBMIT", "SURRENDER", "GOOD PET", "YOU ARE MINE"
];

let imagePaths = [];
let activeTexts = [];

fetch('/images')
  .then(res => res.json())
  .then(data => {
    imagePaths = data;
  });

startText.addEventListener("click", () => {
  startScreen.style.display = "none";
  hypnoSession.style.display = "block";
  audio.play().catch(() => {});
  startHypnoSession();
});

function showPhrase() {
  if (activeTexts.length >= 2) {
    const old = activeTexts.shift();
    old.remove();
  }

  const text = document.createElement("div");
  text.className = "hypno-text";
  text.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  hypnoSession.appendChild(text);
  activeTexts.push(text);

  setTimeout(() => {
    text.remove();
    activeTexts = activeTexts.filter(t => t !== text);
  }, 1500);
}

function showRandomImage() {
  if (imagePaths.length === 0) return;
  const img = document.createElement("img");
  img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
  img.style.top = `${Math.random() * 80 + 10}%`;
  img.style.left = `${Math.random() * 80 + 10}%`;
  imageContainer.appendChild(img);
  setTimeout(() => img.remove(), 2000);
}

function startHypnoSession() {
  setInterval(showPhrase, 1200);
  setInterval(showRandomImage, 1000);
}
