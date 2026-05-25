const themeToggle = document.getElementById("themeToggle");

window.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        if (themeToggle) themeToggle.textContent = "🌞";
    } else {
        if (themeToggle) themeToggle.textContent = "🌙";
    }
});

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌞";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";
        }
    });
}