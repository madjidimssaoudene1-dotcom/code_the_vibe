// Theme Toggle
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

// Fade-in Animation
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
cards.forEach((card, index) => {
    setTimeout(() => {
    card.classList.add("show");
    }, index * 200);
});
});