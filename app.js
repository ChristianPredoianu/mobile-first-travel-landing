const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeHamburger = document.getElementById('close-hamburger');

hamburger.addEventListener('click', () => {
  navLinks.classList.add('open');
  toggleMobileMenuIcons('none', 'block');
});

closeHamburger.addEventListener('click', () => {
  navLinks.classList.remove('open');
  toggleMobileMenuIcons('block', 'none');
});

function toggleMobileMenuIcons(hamburgerDisplay, closeDisplay) {
  hamburger.style.display = hamburgerDisplay;
  closeHamburger.style.display = closeDisplay;
}
