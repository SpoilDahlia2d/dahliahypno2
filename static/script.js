document.body.addEventListener("click", () => {
  const intro = document.getElementById("intro-text");
  const spiral = document.getElementById("spiral");
  const text = document.getElementById("text-container");
  const audio = document.getElementById("audio");

  if (intro) intro.remove();
  spiral.hidden = false;
  text.hidden = false;

  audio.play();

  // Avvia loop immagine ipnotica
  setInterval(showRandomImage, 2000);

  // Frasi ipnotiche a rotazione
  const texts = ["Empty your mind", "You belong to me", "Don’t resist", "Obey", "Let go"];
  let index = 0;
  setInterval(() => {
    text.innerText = texts[index];
    index = (index + 1) % texts.length;
  }, 3000);
});

function showRandomImage() {
  fetch("/images")
    .then(res => res.json())
    .then(images => {
      if (images.length === 0) return;

      const img = document.createElement("img");
      img.src = "/static/images/" + images[Math.floor(Math.random() * images.length)];
      img.className = "popup-image";
      img.style.top = Math.random() * 80 + "%";
      img.style.left = Math.random() * 80 + "%";
      document.body.appendChild(img);

      setTimeout(() => img.remove(), 3000);
    });
}
