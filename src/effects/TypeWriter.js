"use strict";
const $ = document;
const typeWriter = $.querySelector("#KIUI-typewriter");

let createCharTimer = null;
let deleteCharTimer = null;

function initKIUITypeWriter(textArray = [], time = 100, pause = 1000) {
  let textIndex = 0;
  let charIndex = 0;

  function typeText() {
    const currentText = textArray[textIndex];

    createCharTimer = setInterval(() => {
      typeWriter.textContent += currentText[charIndex];
      charIndex++;

      if (charIndex >= currentText.length) {
        clearInterval(createCharTimer);
        setTimeout(() => deleteText(), pause); // Start deleting after pause
      }
    }, time);
  }

  function deleteText() {
    const currentText = textArray[textIndex];

    deleteCharTimer = setInterval(() => {
      charIndex--;
      typeWriter.textContent = currentText.slice(0, charIndex);

      if (charIndex <= 0) {
        clearInterval(deleteCharTimer);
        textIndex = (textIndex + 1) % textArray.length; // Loop back to start
        setTimeout(() => typeText(), pause);
      }
    }, time);
  }

  typeText(); // Start the cycle
}
window.initKIUITypeWriter = initKIUITypeWriter;
