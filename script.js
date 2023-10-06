const startBtn = document.querySelector(".startBtn");
const offBtn = document.querySelector(".offBtn");
const stopBtn = document.querySelector(".stopBtn");
const continueBtn = document.querySelector(".continueBtn");
const restartBtn = document.querySelector(".restartBtn");
let stopWatchDisplay = document.querySelector(".stopWatchDisplay");

let ms = 0,
  s = 0,
  m = 0,
  h = 0;
let t = 0;
let timer;

let startTimer = () => {
  startBtn.classList.add("d-none");
  offBtn.classList.remove("d-none");
  stopBtn.classList.remove("disabled");
  timer = setInterval(function () {
    ms += 1;
    if (ms === 99) {
      ms = 0;
      s += 1;

      if (s === 60) {
        s = 0;
        m += 1;

        if (m === 60) {
          m = 0;
          h += 1;
        }
      }
    }
    let mileSecond = ms < 10 ? 0 + ms.toString() : ms.toString();
    let second = s < 10 ? 0 + s.toString() : s.toString();
    let minute = m < 10 ? 0 + m.toString() : m.toString();
    let hour = h < 10 ? 0 + h.toString() : h.toString();
    let timeValue = `${hour}:${minute}:${second}:${mileSecond}`;
    stopWatchDisplay.textContent = timeValue;
  }, 10);
};

startBtn.addEventListener("click", startTimer);

offBtn.addEventListener("click", function () {
  clearInterval(timer);
  (ms = 0), (s = 0), (m = 0), (h = 0);
  stopWatchDisplay.textContent = "00:00:00:00";
  startBtn.classList.remove("d-none");
  offBtn.classList.add("d-none");
  stopBtn.classList.add("disabled");
  continueBtn.classList.add("d-none");
  stopBtn.classList.remove("d-none");
});

stopBtn.addEventListener("click", function () {
  stopBtn.classList.add("d-none");
  continueBtn.classList.remove("d-none");
  clearInterval(timer);
});

continueBtn.addEventListener("click", function () {
  stopBtn.classList.remove("d-none");
  continueBtn.classList.add("d-none");
  clearInterval(timer);
  startTimer();
});

restartBtn.addEventListener("click", function () {
  clearInterval(timer);
  (ms = 0), (s = 0), (m = 0), (h = 0);
  continueBtn.classList.add("d-none");
  stopBtn.classList.remove("d-none");
  startTimer();
});
