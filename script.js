const startText = document.getElementById("start-text");
const startScreen = document.getElementById("start-screen");
const hypnoSession = document.getElementById("hypno-session");
const textLoop = document.getElementById("text-loop");
const finalMessage = document.getElementById("final-message");
const imageContainer = document.getElementById("image-container");

const hypnoTexts = ["OBEY", "RELAX", "WATCH", "SURRENDER", "GOOD TOY"];
let imagePaths = [];

fetch("static/images.json")
  .then(response => response.json())
  .then(data => {
    imagePaths = data;
  });

startText.addEventListener("click", () => {
  startScreen.style.display = "none";
  hypnoSession.style.display = "block";
  startHypnoSession();
});

function startHypnoSession() {
  let count = 0;
  const interval = setInterval(() => {
    textLoop.textContent = hypnoTexts[count % hypnoTexts.length];
    spawnImage();
    count++;
    if (count > 45) {
      clearInterval(interval);
      textLoop.textContent = "";
      finalMessage.style.display = "block";
    }
  }, 2000);
}

function spawnImage() {
  if (imagePaths.length === 0) return;
  const img = document.createElement("img");
  img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
  img.style.top = `${Math.random() * 80}%`;
  img.style.left = `${Math.random() * 90}%`;
  imageContainer.appendChild(img);
  setTimeout(() => img.remove(), 7000);
}
