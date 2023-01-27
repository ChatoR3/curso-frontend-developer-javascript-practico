const menuEmail = document.querySelector('.navbar-email');
const menuHamburgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(){
    console.log('Click');
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
   }

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    console.log('Click');
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
   }

    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(){
    console.log('Click');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


    if (!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
     
    aside.classList.toggle('inactive');

}
