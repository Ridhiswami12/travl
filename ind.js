const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.nabar_menu');

menu.addEventListener('click', function()
{
    menu.classList.nav-toggle('is-active');
    menulinks.classList.nav-toggle('active');
})