const slides = document.querySelector(".slides");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const totalSlides = document.querySelectorAll(".slide").length;
const visibleSlides = 4.5;
let currentIndex = 0;

function updateCarousel() {
  const maxIndex = totalSlides - Math.ceil(visibleSlides);
  nextButton.style.display = currentIndex < maxIndex ? "block" : "none";
  prevButton.style.display = currentIndex > 0 ? "block" : "none";
  slides.style.transform = `translateX(-${currentIndex * (224 + 15)}px)`;
}

nextButton.addEventListener("click", () => {
  const maxIndex = totalSlides - Math.ceil(visibleSlides);
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Initial update to set up the carousel
updateCarousel();

const btns = document.querySelectorAll(".question-btn");
const questionTitles = document.querySelectorAll(".question-title");

questionTitles.forEach(function (title) {
  title.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement;
    question.classList.toggle("show-text");
  });
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});

// if clicked outside of window, it closes
window.addEventListener("click", function (e) {
  const question = document.querySelector(".question");
  if (!question.contains(e.target)) {
    question.classList.remove("show-text");
  }
});
