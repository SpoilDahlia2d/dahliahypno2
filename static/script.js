const startBtn = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const mainContent = document.getElementById("main-content");
const textContainer = document.getElementById("text-container");
const audio = document.getElementById("voice-audio");

const phrases = [
  "Empty your mind",
  "You love to obey",
  "Let go of control",
  "You're mine now",
  "Obsession feels good",
  "Sink deeper for Dahlia"
];

let currentPhrase = 0;

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  mainContent.style.display = "block";
  audio.play();
  showNextPhrase();
  setInterval(showNextPhrase, 5000);
  setInterval(showPopupImage, 3000);
});

function showNextPhrase() {
  textContainer.innerText = phrases[currentPhrase];
  currentPhrase = (currentPhrase + 1) % phrases.length;
}

function showPopupImage() {
  fetch("/images")
    .then(res => res.json())
    .then(images => {
      const filtered = images.filter(img => !img.includes("spirale"));
      const imgName = filtered[Math.floor(Math.random() * filtered.length)];
      const img = document.createElement("img");
      img.src = `/static/images/${imgName}`;
      img.classList.add("popup-img");
      img.style.top = `${Math.random() * 80 + 10}%`;
      img.style.left = `${Math.random() * 80 + 10}%`;
      document.body.appendChild(img);
      setTimeout(() => img.remove(), 3000);
    });
}
