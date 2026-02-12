/* Envelope Opening */
const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const main = document.getElementById("main");

envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        intro.classList.add("hidden");
        main.classList.add("visible");
    }, 800);
});

/* Slideshow */
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;
let index = 0;
let interval;
const delay = 4500;

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function startAutoPlay() {
    interval = setInterval(nextSlide, delay);
}

function stopAutoPlay() {
    clearInterval(interval);
}

const slideshow = document.getElementById("slideshow");
slideshow.addEventListener("mouseenter", stopAutoPlay);
slideshow.addEventListener("mouseleave", startAutoPlay);

startAutoPlay();
