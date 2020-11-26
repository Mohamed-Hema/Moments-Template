//Selectors
const header = document.querySelector('.header');
const menu = document.querySelector('.hamburger-menu');
const contact = document.querySelector('.contact-us');

menu.addEventListener('click', function() {
    header.classList.toggle('menu-open')
});

contact.addEventListener('click', function() {
    header.classList.toggle('menu-open')
});