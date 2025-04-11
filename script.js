
function getTodayKey() {
  const now = new Date();
  return now.toISOString().slice(0, 10); // yyyy-mm-dd
}

function getTracker() {
  const stored = JSON.parse(localStorage.getItem("mochi-tracker") || "{}");
  const today = getTodayKey();
  if (stored.date !== today) {
    return { date: today, feed: 0, play: 0, sleep: 0 };
  }
  return stored;
}

function saveTracker(data) {
  localStorage.setItem("mochi-tracker", JSON.stringify(data));
}

function updateTrackerDisplay(data) {
  document.getElementById("feed-count").textContent = data.feed;
  document.getElementById("play-count").textContent = data.play;
  document.getElementById("sleep-count").textContent = data.sleep;
}

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
  const data = getTracker();
  data.feed++;
  saveTracker(data);
  updateTrackerDisplay(data);
}

function play() {
  setMochiEmotion("mochi-play.png");
  const data = getTracker();
  data.play++;
  saveTracker(data);
  updateTrackerDisplay(data);
}

function sleep() {
  setMochiEmotion("mochi-sleep.png");
  const data = getTracker();
  data.sleep++;
  saveTracker(data);
  updateTrackerDisplay(data);
}

document.addEventListener("DOMContentLoaded", () => {
  const data = getTracker();
  updateTrackerDisplay(data);
});
