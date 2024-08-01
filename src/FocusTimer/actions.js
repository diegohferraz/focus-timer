import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

export function play() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function increase() {
  state.minutes = state.minutes + 5;
  timer.updateDisplay();
}

export function decrease() {
  if (state.minutes <= 0) return;

  state.minutes = state.minutes - 5;
  timer.updateDisplay();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function toggleForest() {
  state.isForestPlaying =
    document.documentElement.classList.toggle("forest-playing");

  if (state.isForestPlaying) {
    sounds.forest.play();
    return;
  }

  sounds.forest.pause();
}

export function toggleRain() {
  state.isRainPlaying =
    document.documentElement.classList.toggle("rain-playing");

  if (state.isRainPlaying) {
    sounds.rain.play();
    return;
  }

  sounds.rain.pause();
}

export function toggleCafeteria() {
  state.isCafeteriaPlaying =
    document.documentElement.classList.toggle("cafe-playing");

  if (state.isCafeteriaPlaying) {
    sounds.cafeteria.play();
    return;
  }

  sounds.cafeteria.pause();
}

export function toggleFire() {
  state.isFirePlaying =
    document.documentElement.classList.toggle("fire-playing");

  if (state.isFirePlaying) {
    sounds.fireplace.play();
    return;
  }

  sounds.fireplace.pause();
}
