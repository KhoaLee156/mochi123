
function setMochiEmotion(image) {
  const mochi = document.getElementById('mochi-img');
  mochi.src = image;
  mochi.style.transform = "scale(1.05)";
  setTimeout(() => {
    mochi.style.transform = "scale(1)";
  }, 300);
}

function feed() {
  setMochiEmotion("mochi-feed.png");
}

function play() {
  setMochiEmotion("mochi-play.png");
}

function sleep() {
  setMochiEmotion("mochi-sleep.png");
}
