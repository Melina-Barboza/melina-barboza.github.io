const toggle = document.getElementById("theme-toggle");

if (toggle) {
  const userPref = localStorage.getItem("theme");
  const systemPref = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (userPref === "light" || (!userPref && systemPref)) {
    document.body.classList.add("light");
    toggle.textContent = "🌙";
  } else {
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggle.textContent = isLight ? "🌙" : "☀️";
  });
}
