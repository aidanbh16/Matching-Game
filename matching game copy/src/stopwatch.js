let startTime;
let running = false;
const but = document.querySelectorAll(".but");

function startStopwatch() {
  if (!running) {
    startTime = new Date().getTime();
    running = true;
    updateStopwatch();
  }
}

function updateStopwatch() {
  if (running) {
    for (let i = 0; i < but.length; i++){
      if (but[i].value !== "none"){
        let currentTime = new Date().getTime();
        let elapsedTime = new Date(currentTime - startTime);
        let minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
        let seconds = elapsedTime.getSeconds().toString().padStart(2, '0');
        let milliseconds = Math.floor(elapsedTime.getMilliseconds() / 10).toString().padStart(2, '0');
        document.querySelector('.stopwatch').innerText = minutes + ":" + seconds + ":" + milliseconds;
        setTimeout(updateStopwatch, 10);
      }
    }
  }
}