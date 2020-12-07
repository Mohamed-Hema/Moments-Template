// // Loading Screen
let loading = document.querySelector('.wrap-loader');
let body = document.getElementsByTagName('body')[0];
body.style.overflowY = "hidden";
window.addEventListener('load', function () {
  loading.style.display ='none';
  body.style.overflowY = "scroll";
});
//On Scroll Animation
AOS.init({
    duration: 1200,
})

//Selectors
const header = document.querySelector('.header');
const menu = document.querySelector('.hamburger-menu');



// Open Menu
menu.addEventListener('click', function() {
    header.classList.toggle('menu-open')
});

