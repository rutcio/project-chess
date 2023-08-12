const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar__list');

let lastScrollTop = 0;
const defaultOffset = 100;
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => navMenu.classList.contains('hide');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar__link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScrollTop && !containHide()) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
    lastScrollTop = scrollPosition();
});
