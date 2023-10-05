const btn = document.querySelector("#btn");
const bodyElement = document.getElementsByTagName("body")[0];
const img = document.getElementById("img");

const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
];

let i = 1;

btn.addEventListener("click", function () {
  if (i == images.length) i = 0;

  img.src = images[i];
  i += 1;
  console.log("counter number is " + i);
});
