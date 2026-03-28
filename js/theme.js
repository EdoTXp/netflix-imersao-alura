function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("theme-toggle");
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    btn.innerHTML = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    btn.innerHTML = "☀️";
  }
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const btn = document.getElementById("theme-toggle");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    btn.innerHTML = "🌙";
  } else {
    btn.innerHTML = "☀️";
  }
};
