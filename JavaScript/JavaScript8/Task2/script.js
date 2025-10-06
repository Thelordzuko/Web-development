const textElement = document.getElementById("text");
const restartBtn = document.getElementById("restart");
const message = "Welcome to JavaScript Timers!";
let index = 0;

function typeEffect() {
    if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
    } else {
    blinkText();
    }
}

function blinkText() {
    setInterval(() => {
    textElement.style.visibility =
        textElement.style.visibility === "hidden" ? "visible" : "hidden";
    }, 500);
}

restartBtn.addEventListener("click", () => {
    textElement.textContent = "";
    index = 0;
    textElement.style.visibility = "visible";
    typeEffect();
});

typeEffect();