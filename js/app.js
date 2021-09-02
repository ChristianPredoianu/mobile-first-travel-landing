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

window.addEventListener('resize', () => {
  autoCloseMobileMenu();
});

//Auto close mobile menu on screens larger then 900 so we can show the icons correctly
function autoCloseMobileMenu() {
  if (window.innerWidth >= 900) {
    navLinks.classList.remove('open');
    toggleMobileMenuIcons('none', 'none');
  } else if (navLinks.classList.contains('open')) {
    toggleMobileMenuIcons('none', 'block');
  } else {
    toggleMobileMenuIcons('block', 'none');
  }
}

/* 
--------------------------------AOS-------------------------------------------------
*/

AOS.init();

AOS.init({
  once: true,
});
