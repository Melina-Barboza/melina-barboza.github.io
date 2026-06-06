// Seleccionamos el botón de cambio de tema
const toggle = document.getElementById("theme-toggle");

if (toggle) {
  // Revisamos si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (savedTheme === "light" || (!savedTheme && prefersLight)) {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    toggle.textContent = "🌙"; // icono para pasar a oscuro
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    toggle.textContent = "☀️"; // icono para pasar a claro
  }

  // Evento para alternar entre temas
  toggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme", !isLight);

    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggle.textContent = isLight ? "🌙" : "☀️";
  });
}
