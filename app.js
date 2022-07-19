const mobileNav = document.querySelector('.menuNav');
const navHeader = document.querySelector('.header');
const toggleNavbar = () => {
    navHeader.classList.toggle('active');
};

mobileNav.addEventListener('click', () => toggleNavbar());