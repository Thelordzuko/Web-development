const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const redBtn = document.getElementById("redBtn");

function applyTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light"; 
  applyTheme(savedTheme);
};

lightBtn.addEventListener("click", () => applyTheme("light"));
darkBtn.addEventListener("click", () => applyTheme("dark"));
redBtn.addEventListener("click", () => applyTheme("red"));
