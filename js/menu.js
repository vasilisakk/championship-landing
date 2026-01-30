const page = document.querySelector('.page');
const button = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');

function openMenu() {
  page.classList.add('menu-open');
  button.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  page.classList.remove('menu-open');
  button.setAttribute('aria-expanded', 'false');
}

button.addEventListener('click', () => {
  page.classList.contains('menu-open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && page.classList.contains('menu-open')) {
    closeMenu();
  }
});

const menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;

  // закрываем меню
  page.classList.remove('menu-open');
  button.setAttribute('aria-expanded', 'false');
});

