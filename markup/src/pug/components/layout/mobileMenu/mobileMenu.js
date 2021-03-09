const mobileMenu = document.querySelector('.mobileMenu');
const body = document.querySelector('body')

document.querySelector(".toogleMenu_open").addEventListener('click', () => {
  mobileMenu.classList.add('mobileMenu_open');
  body.classList.add('hidden');
});
document.querySelector(".toogleMenu_close").addEventListener('click', () => {
  mobileMenu.classList.remove('mobileMenu_open');
  body.classList.remove('hidden');
});

document.querySelectorAll('.mobileMenu .menu-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    mobileMenu.classList.remove('mobileMenu_open');
    body.classList.remove('hidden');
  });
});
