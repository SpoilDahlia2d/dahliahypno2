let audioStarted = false;
let hypnoTexts = [
  "Obey", "You belong to me", "No control", "Sink deeper",
  "Empty your mind", "Just feel", "Let go", "I'm all you need"
];
let imagePaths = [];
let currentTextIndex = 0;

// Carica immagini da /images
fetch('/images')
  .then(res => res.json())
  .then(data => {
    imagePaths = data;
    console.log("Immagini caricate:", imagePaths);
  });

function playAudioOnce() {
  if (!audioStarted) {
    const audio = new Audio("/static/audio/voice.mp3");
    audio.loop = true;
    audio.play().catch(err => {
      console.log("Autoplay bloccato, serve interazione.");
    });
    audioStarted = true;
  }
}

function showRandomImage() {
  if (imagePaths.length === 0) return;
  const img = document.createElement("img");
  img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
  img.style.top = Math.random() * 80 + "%";
  img.style.left = Math.random() * 80 + "%";
  document.getElementById("image-container").appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 2000);
}

function showNextHypnoText() {
  const existing = document.querySelector(".hypno-text");
  if (existing) existing.remove();

  const text = document.createElement("div");
  text.className = "hypno-text";
  text.innerText = hypnoTexts[currentTextIndex];
  document.body.appendChild(text);

  currentTextIndex = (currentTextIndex + 1) % hypnoTexts.length;

  setTimeout(() => text.remove(), 2000);
}

function startSession() {
  document.getElementById("start-text").style.display = "none";
  document.body.classList.add("flashing");

  const spiral = document.createElement("div");
  spiral.className = "spiral";
  document.body.appendChild(spiral);

  playAudioOnce();

  setInterval(showRandomImage, 800);
  setInterval(showNextHypnoText, 1800);
}

// Avvio con click
document.getElementById("start-text").addEventListener("click", startSession);
