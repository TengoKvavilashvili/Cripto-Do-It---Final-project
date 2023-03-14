let currentImageIndex = 0;
const images = document.querySelectorAll('.slider-container img');
const prevButton = document.querySelector('.slider-container .prev');
const nextButton = document.querySelector('.slider-container .next');

function showImage(index) {
   images[currentImageIndex].style.opacity = 0;
   images[index].style.opacity = 1;
   currentImageIndex = index;
}

prevButton.addEventListener('click', () => {
   const index = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
   showImage(index);
});

nextButton.addEventListener('click', () => {
   const index = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
   showImage(index);
});