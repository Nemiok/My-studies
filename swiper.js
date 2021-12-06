document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper', {
  speed: 800,
/*   autoHeight: true, */
  direction: "horizontal",
  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    type: 'bullets',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
},

});

});
