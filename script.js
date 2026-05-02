const toggle = document.getElementById("theme-toggle");

// Default dark mode
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.textContent = "🌙";
} else {
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
  }
});
