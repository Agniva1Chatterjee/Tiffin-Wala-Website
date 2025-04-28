let index = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.display = i === n ? "block" : "none";
    dots[i].classList.toggle("active", i === n);
  });
  index = n;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

setInterval(nextSlide, 2500); // Auto-slide every 3 seconds

showSlide(index);