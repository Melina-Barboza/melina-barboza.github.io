const toggle = document.getElementById("theme-toggle");

if (toggle) {
  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (savedTheme === "light" || (!savedTheme && prefersLight)) {
    document.body.classList.add("light");
    toggle.textContent = "🌙";
  } else {
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggle.textContent = isLight ? "🌙" : "☀️";
  });
}
