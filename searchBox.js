/* document.addEventListener("DOMContentLoaded", function () { */
let searchBox = document.querySelector('.header__search-box');
let searchBoxBtn = document.querySelector('.header__btn-search');
searchBoxBtn.addEventListener('click', function () {
  /* searchBoxBtn.classList.add('isClicked'); */
  searchBox.classList.remove('isClicked');
});

let closeSearchBox = document.querySelector('.search-box__closed-search');
closeSearchBox.addEventListener('click', function() {
  searchBox.classList.add('isClicked');
  searchBoxBtn.classList.remove('isClicked');
});
/* }); */
