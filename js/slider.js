const swiper = new Swiper('.swiper-container', {
  loop: true, // Бесконечная прокрутка
  effect: "fade", // Плавное переключение
  autoplay: { delay: 5000 },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  keyboard: true,
  // Адаптивность
  breakpoints: {
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1.5, spaceBetween: 40 }
  }
});