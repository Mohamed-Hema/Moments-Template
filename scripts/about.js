//Selectors
const header = document.querySelector('.header');
const menu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', function() {
    header.classList.toggle('menu-open')
});
