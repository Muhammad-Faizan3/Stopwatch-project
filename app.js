let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

function start() {
  timer = setInterval(() => {
    milliseconds += 10;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    document.getElementById("time").innerText =
      `${String(minutes).padStart(2, '0')} : 
       ${String(seconds).padStart(2, '0')} : 
       ${String(milliseconds).padStart(3, '0')}`;
  }, 10);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("time").innerText = "00 : 00 : 000";
}

function toggleMode() {
  document.body.classList.toggle("dark");
}
