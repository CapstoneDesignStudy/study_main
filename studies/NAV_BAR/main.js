const btn = document.querySelector('.navbar_btn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});