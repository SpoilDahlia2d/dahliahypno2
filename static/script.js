const startText = document.getElementById("start-text");
const startScreen = document.getElementById("start-screen");
const hypnoSession = document.getElementById("hypno-session");
const textLoop = document.getElementById("text-loop");
const finalMessage = document.getElementById("final-message");
const imageContainer = document.getElementById("image-container");

const hypnoTexts = ["OBEY", "RELAX", "WATCH", "SURRENDER", "GOOD TOY"];
let imagePaths = [];

fetch("/images")
  .then(response => response.json())
  .then(data => {
    imagePaths = data;
  });

startText.addEventListener("click", () => {
  startScreen.style.display = "none";
  hypnoSession.style.display = "block";

  const audio = document.getElementById("voice");
  audio.play().catch((e) => console.log("Audio play blocked:", e));

  startHypnoSession();
});

function startHypnoSession() {
  const phrases = [
  "OBEY", "SUBMIT", "YOU ARE MINE", "RELAX", "SURRENDER", "LET GO", "GOOD PET"
];

setInterval(() => {
  const text = document.createElement("div");
  text.className = "hypno-text";
  text.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  hypnoSession.appendChild(text);

  setTimeout(() => {
    hypnoSession.removeChild(text);
  }, 1500);
}, 1300);

function spawnImage() {
  if (imagePaths.length === 0) return;
  const img = document.createElement("img");
  img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
  img.style.top = `${Math.random() * 80}%`;
  img.style.left = `${Math.random() * 90}%`;
  imageContainer.appendChild(img);
  setTimeout(() => img.remove(), 7000);
}
