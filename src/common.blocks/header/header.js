// Мобильное меню ↓↓↓

const navToggle = document.getElementById('nav_toggle');
const headerMenu = document.getElementById('header__menu');
const allHeaderMenuLinks = document.querySelectorAll('.header__menu a');

function navToggleFn(event) {
  event.preventDefault();
  navToggle.classList.toggle('active');
  headerMenu.classList.toggle('visible');
}

function closeNavByClickingLinks() {
  navToggle.classList.remove('active');
  headerMenu.classList.toggle('visible');
}

navToggle.addEventListener('click', navToggleFn);

allHeaderMenuLinks.forEach((el) => {
  if (!el.classList.contains('has-dropdown')) {
    el.addEventListener('click', closeNavByClickingLinks);
  }
});
