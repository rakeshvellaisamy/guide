const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const themeToggle = document.querySelector(".theme-toggle");
const togglePasswordButtons = document.querySelectorAll(
  "[data-toggle-password]"
);

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const setTheme = (mode) => {
  const isDark = mode === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", isDark.toString());
  localStorage.setItem("theme", mode);
};

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark" || storedTheme === "light") {
  setTheme(storedTheme);
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setTheme(isDark ? "light" : "dark");
});

togglePasswordButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-toggle-password");
    const input = document.querySelector(target);

    if (!input) {
      return;
    }

    const shouldShow = input.type === "password";
    input.type = shouldShow ? "text" : "password";
    button.textContent = shouldShow ? "Hide" : "Show";
    button.setAttribute("aria-pressed", shouldShow.toString());
  });
});
