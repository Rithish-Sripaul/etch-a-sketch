"use strict";

const canvas = document.querySelector(".canvas");
let pixelColor = "#000";

function clearCanvas() {
  while (canvas.childElementCount > 0) {
    canvas.removeChild(canvas.firstElementChild);
  }
}

function createCanvas(pixelCount, num) {
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
      pixel.style.backgroundColor = pixelColor;
    });
  });
}

createCanvas(16, 620 / 16);

const btnCreateCanvas = document.querySelector(".create");
const btnClearCanvas = document.querySelector(".clear");
const colorPicker = document.querySelector(".color--picker");
const pixelCount = document.querySelector(".pixel--input");

btnCreateCanvas.addEventListener("click", () => {
  createCanvas(parseInt(pixelCount.value), 620 / pixelCount.value);
});

btnClearCanvas.addEventListener("click", () => {
  clearCanvas();

  if (pixelCount.value == 0) {
    createCanvas(16, 620 / 16);
  } else {
    createCanvas(parseInt(pixelCount.value), 620 / pixelCount.value);
  }
});

colorPicker.addEventListener("input", () => {
  colorPicker.style.backgroundColor = colorPicker.value;
  pixelColor = colorPicker.value;
});
