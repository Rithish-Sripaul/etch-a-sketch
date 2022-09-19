"use strict";

const canvas = document.querySelector(".canvas");

function clearCanvas() {
  while (canvas.childElementCount > 0) {
    canvas.removeChild(canvas.firstElementChild);
  }
}

function createCnavas(pixelCount, num) {
  // Removing the child elements of the old Canvas
  clearCanvas();
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

createCnavas(16, 620 / 16);

const btnCraeteCanvas = document.querySelector(".create");
const btnClearCanvas = document.querySelector(".clear");
const pixelCount = document.querySelector("input");

btnCraeteCanvas.addEventListener("click", () => {
  createCnavas(parseInt(pixelCount.value), 620 / pixelCount.value);
});

btnClearCanvas.addEventListener("click", () => {
  clearCanvas();
  if (pixelCount.value == 0) {
    createCnavas(16, 620 / 16);
  } else {
    createCnavas(parseInt(pixelCount.value), 620 / pixelCount.value);
  }
});
