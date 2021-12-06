document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.slide-number_btn').forEach(function (slideBtn) {
    slideBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll(".slide-number_btn").forEach(function (btn) {
        btn.classList.remove('slide-number_btn-active');
      });
      e.currentTarget.classList.add("slide-number_btn-active");
      document.querySelectorAll('.section-how-we-do__description-wrapper').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('section-how-we-do__description-wrapper_active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add("section-how-we-do__description-wrapper_active");
    });
  });
});
