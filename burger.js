document.addEventListener("DOMContentLoaded", function () {
  let burgerBtnOpen = document.querySelector('.header__burger');
  let burgerBtnClose = document.querySelector('.burger-menu__button-closed');
  let burgerMenu = document.querySelector('.header__burger-menu');

  burgerBtnOpen.addEventListener('click', function () {
    burgerMenu.classList.remove('disabled');

    burgerBtnClose.addEventListener('click', function () {
      burgerMenu.classList.add('disabled');
      burgerBtnOpen.classList.remove('disabled');
    });
  });
});
