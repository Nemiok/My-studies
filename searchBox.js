document.addEventListener("DOMContentLoaded", function () {
let searchBox = document.querySelector('.header__search-box');
let searchBoxBtn = document.querySelector('.header__btn-search');
let closeSearchBox = document.querySelector('.search-box__closed-search');
searchBoxBtn.addEventListener('click', function () {
  searchBox.classList.remove('isClicked');
});

closeSearchBox.addEventListener('click', function () {
  searchBox.classList.add('isClicked');
  searchBoxBtn.classList.remove('isClicked');
});
});
