//your JS code here. If required.
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slides = document.querySelectorAll('.slide');

let currentSlideIndex = 0;

upButton.addEventListener('click', () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    updateSlidePosition();
});

downButton.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        }
    });
}

// Initialize the position of the slides
updateSlidePosition();
