$(() => {
  $('.new-card').slice(0, 4).show();
  $('.load-more').click(function (e) {
    e.preventDefault();
    $('.new-card:hidden').slice(0, 4).slideDown();
  });
});

$(document).ready(function () {
  $('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
});

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

// AOS
AOS.init();
