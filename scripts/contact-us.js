//On Scroll Animation
AOS.init({
    duration: 1200,
})
// Loading Screen
let loading = document.querySelector('.wrap-loader');
let body = document.getElementsByTagName('body')[0];
body.style.overflowY = "hidden";
window.addEventListener('load', function () {
  loading.style.display ='none';
  body.style.overflowY = "scroll";
});
//Selectors
const header = document.querySelector('.header');
const menu = document.querySelector('.hamburger-menu');
const contact = document.querySelector('.contact-us');


// Menu Open
menu.addEventListener('click', function() {
    header.classList.toggle('menu-open')
});

contact.addEventListener('click', function() {
    header.classList.toggle('menu-open')
});