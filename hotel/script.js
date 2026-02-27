const swiper = new Swiper('.swiper-hero', {
  speed: 1200,   // halus pudar
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
});

const showcaseSwiper = new Swiper('.swiper-showcase', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 50,
  loop: true,
  loopedSlides: 4,
  speed: 800,
  
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1.1,
    slideShadows: false
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  allowTouchMove: false, // nonaktifkan interaksi
  grabCursor: false
});

new Swiper(".swiper-movie", {
  slidesPerView: "auto",
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  allowTouchMove: false, // nonaktifkan interaksi
  grabCursor: false
});

new Swiper(".swiper-strip", {
  slidesPerView: "auto",
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  allowTouchMove: false, // nonaktifkan interaksi
  grabCursor: false
});