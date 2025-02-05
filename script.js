let lastScroll = window.scrollY;
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    document.querySelector(".header").classList.toggle("hidden", currentScroll > lastScroll);
    lastScroll = currentScroll;
});

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
});

document.querySelector(".service").addEventListener("click", function() {
    this.classList.toggle("open");
});