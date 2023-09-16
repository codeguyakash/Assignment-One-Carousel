const slides = document.querySelectorAll(".slide");
let counter = 0;
console.log("default count", counter);
console.log("length",slides.length);

slides.forEach((slide, index) => {
  slide.style.right = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${counter * 100}%)`;
  });
};

const goPrev = () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = slides.length - 1; 
  }
  slideImage();
};

const goNext = () => {
  if (counter >= slides.length - 1) {
    counter = 1;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
};

const autoSlide = () => {
  goNext();
};

const autoSlideInterval = setInterval(autoSlide, 5000);

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
  });
});
