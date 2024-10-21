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
