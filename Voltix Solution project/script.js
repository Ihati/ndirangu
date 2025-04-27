const wrapper = document.querySelector('.services-wrapper');
const dots = document.querySelectorAll('.dot');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * (300 + 32); // card width + margin
  wrapper.style.transform = `translateX(${offset}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

rightBtn.addEventListener('click', () => {
  if (currentIndex < dots.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentIndex = idx;
    updateSlider();
  });
});

