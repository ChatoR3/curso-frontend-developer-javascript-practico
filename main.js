const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu(){
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    console.log('Click');
    mobileMenu.classList.toggle('inactive');
}

