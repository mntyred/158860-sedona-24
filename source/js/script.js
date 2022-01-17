const menu = document.querySelector('.site-list');
const button = document.querySelector('.page-header__toggle');
button.addEventListener('click', function () {
  menu.classList.toggle("site-list--active");
  button.classList.toggle("page-header__toggle--active");
});
