const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu(){
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

console.log('JS funcionando');