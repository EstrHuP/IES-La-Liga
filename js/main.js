// ========================================
// Carousel animation
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = document.querySelector('#newsCarousel');

    if (carouselElement) {
        const carousel = new bootstrap.carousel(carouselElement, {
            interval: 5000,
            ride: 'carousel',
            pause: 'hover',
            wrap: true
        })
    }
});