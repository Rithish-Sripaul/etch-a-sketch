"use strict";

const canvas = document.querySelector(".canvas");

function createCnavas(pixelCount, num) {
  // Removing the child elements of the old Canvas
  while (canvas.childElementCount > 0) {
    canvas.removeChild(canvas.firstElementChild);
  }
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
}

const button = document.querySelector("button");
const pixelCount = document.querySelector("input");
button.addEventListener("click", () => {
  createCnavas(parseInt(pixelCount.value), 620 / pixelCount.value);
});
