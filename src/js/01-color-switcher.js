const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop");
let changeColor;

stopBtn.setAttribute("disabled", "");

startBtn.addEventListener("click", () => {
    changeColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute("disabled", "");
    stopBtn.removeAttribute("disabled");
});

stopBtn.addEventListener("click", () => {
    clearInterval(changeColor);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", "");
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


