"use strict";

const canvas = document.querySelector(".canvas");

const pixelCount = 16;
const num = 620 / pixelCount;

for (let i = 0; i < pixelCount; i++) {
  const pixelRow = document.createElement("div");
  pixelRow.classList.add("pixel-row");
  for (let j = 0; j < pixelCount; j++) {
    const p = document.createElement("div");
    p.style.minWidth = num.toString() + "px";
    p.style.height = num.toString() + "px";
    p.classList.add("pixel");
    pixelRow.appendChild(p);
  }
  canvas.appendChild(pixelRow);
}

const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "#000";
  });
});
