const kits = ["crash", "kick", "snare", "tom"];
const conconEl = document.querySelector(".sound-con");

kits.forEach((kit) => {
  const creationEl = document.createElement("button");
  creationEl.classList.add("btn");
  creationEl.innerHTML = `${kit}`;
  creationEl.style.backgroundImage = `url(images/${kit}.png)`;
  const audioEl = document.createElement("audio");
  audioEl.src = `/sounds/${kit}.wav`;
  creationEl.appendChild(audioEl);
  conconEl.appendChild(creationEl);

  creationEl.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === kit[0]) {
      audioEl.play();
      creationEl.style.transform = "scale(.9)";
      setTimeout(() => {
        creationEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
