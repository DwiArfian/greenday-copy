const productsContainer = document.querySelector('.products');
const scrollButtons = document.querySelectorAll('.scroll-btn');

scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const scrollAmount = productsContainer.offsetWidth; // Scroll by one full view width
        if (button.classList.contains('left')) {
            productsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            productsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});