const swiper = new Swiper('.swiper-container', {  
  cssMode: true,
  spaceBetween: 30,
  centeredSlides: true,
  // Автоплэй
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Управление
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: true,
});