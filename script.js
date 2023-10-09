const musicTitles = document.querySelector(".musicTitles");
const musicPlayer = document.querySelector(".musicPlayer");

const tracks = [
  { trackId: "music/track1.mp3", title: "December Nya - Lin Nat" },
  { trackId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw" },
  {
    trackId: "music/track3.mp3",
    title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein",
  },
  { trackId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing " },
];

let i = 0;
tracks.forEach((track) => {
  i += 1;
  const music = document.createElement("div");
  music.setAttribute("id", i);
  music.classList.add("mb-3", "musicNameBtn");
  music.addEventListener("click", () => {
    musicPlayer.src = track.trackId;
    musicPlayer.play();
  });
  const musicName = `${i}. ${track.title}`;
  music.append(musicName);
  musicTitles.append(music);
});
