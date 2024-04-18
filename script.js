function playSound(event) {
  const pressedKey = document.getElementById(event.key);
  pressedKey.classList.add("active");

  const audio = document.querySelector(`audio#${event.key}`);
  audio.currentTime = 0;
  audio.play();
}

function toggleClassOff(event) {
  const depressedKey = document.getElementById(event.key);
  depressedKey.classList.remove("active");
}

document.addEventListener("keydown", playSound);
document.addEventListener("keyup", toggleClassOff);
