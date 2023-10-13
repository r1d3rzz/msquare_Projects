const musicTitles = document.querySelector(".musicTitles");
const musicPlayer = document.querySelector(".musicPlayer");
const musicLength = document.querySelector(".musicLength");
const currentProgress = document.getElementById("currentProgress");
const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const previousBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");

const tracks = [
  { id: 1, trackId: "music/track1.mp3", title: "December Nya - Lin Nat" },
  {
    id: 2,
    trackId: "music/track2.mp3",
    title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw",
  },
  {
    id: 3,
    trackId: "music/track3.mp3",
    title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein",
  },
  {
    id: 4,
    trackId: "music/track4.mp3",
    title: "Yee Zarr Sar - Sai Sai Kham Hlaing ",
  },
];

// Play Music Normal
let i = 0;
tracks.forEach((track) => {
  i += 1;
  const music = document.createElement("div");
  music.setAttribute("id", i);
  music.classList.add("mb-3", "musicNameBtn");
  music.addEventListener("click", () => {
    isPlaying = true;
    musicPlayer.src = track.trackId;
    musicPlayer.play();
    updatePauseAndPlayBtn();
    trackIndex = track.id - 1;
  });
  const musicName = `${i}. ${track.title}`;
  music.append(musicName);
  musicTitles.append(music);
});

// Adding Custom Music Length
let totalLength = "00:00";

let duration;
musicPlayer.addEventListener("loadeddata", () => {
  duration = musicPlayer.duration; //duration
  totalLength = createMinAndSecText(duration);
});

musicPlayer.addEventListener("timeupdate", () => {
  const currentTime = musicPlayer.currentTime; //currentTime
  const currentLength = createMinAndSecText(currentTime);
  const musicLenghtDisplayText = currentLength + " / " + totalLength;
  musicLength.textContent = musicLenghtDisplayText;
  updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
  let musicTimeLength = (500 / duration) * currentTime;
  currentProgress.style.width = musicTimeLength.toString() + "px";
};

const createMinAndSecText = (name) => {
  const min = Math.floor(name / 60);
  const sec = Math.floor(name % 60);
  const minute = min < 10 ? "0" + min.toString() : min.toString();
  const second = sec < 10 ? "0" + sec.toString() : sec.toString();
  return minute + ":" + second;
};

let trackIndex = 0;
let isPlaying = false;
playBtn.addEventListener("click", () => {
  const currentTime = musicPlayer.currentTime;
  if (currentTime === 0) {
    playSong();
  } else {
    isPlaying = true;
    musicPlayer.play();
    updatePauseAndPlayBtn();
  }
});

pauseBtn.addEventListener("click", () => {
  isPlaying = false;
  musicPlayer.pause();
  updatePauseAndPlayBtn();
});

previousBtn.addEventListener("click", () => {
  if (trackIndex === 0) return;
  trackIndex -= 1;
  playSong();
});

nextBtn.addEventListener("click", () => {
  if (trackIndex === tracks.length - 1) return;
  trackIndex += 1;
  playSong();
});

const playSong = () => {
  isPlaying = true;
  musicPlayer.src = tracks[trackIndex].trackId;
  musicPlayer.play();
  updatePauseAndPlayBtn();
};

const updatePauseAndPlayBtn = () => {
  if (isPlaying) {
    playBtn.classList.add("d-none");
    pauseBtn.classList.remove("d-none");
  } else {
    playBtn.classList.remove("d-none");
    pauseBtn.classList.add("d-none");
  }
};
