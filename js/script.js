const productsContainer = document.querySelector('.products');
const scrollButtons = document.querySelectorAll('.scroll-btn');
const termsButton = document.querySelector('#terms-btn');
const termsText = document.querySelector('#terms-text');

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

let termShown = false;

termsButton.addEventListener('click', () => {
    termShown = !termShown;
    if (termShown) {
        termsButton.textContent = 'Hide';
        termsText.classList.add('show');
    } else {
        termsButton.textContent = 'Terms';
        termsText.classList.remove('show');
    }
});

