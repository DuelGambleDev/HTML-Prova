document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateIndicators();
        updateOverlay();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function updateOverlay() {
        const color = slides[currentSlide].dataset.color;
        slides[currentSlide].querySelector('.slide-border').style.boxShadow = `inset 0 0 0 4px ${color}`;
        slides[currentSlide].querySelector('.slide-overlay').style.background = 
            `linear-gradient(to top, ${color} 0%, ${color}99 20%, transparent 50%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    setInterval(nextSlide, 3000);

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            console.log(`Slide ${index + 1} clicked`);
        });
    });

    updateSlider();
});