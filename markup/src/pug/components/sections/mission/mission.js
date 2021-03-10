import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

new Swiper('.missions', {
  spaceBetween: 24,
  wrapperClass: 'missions-wrap',
  slideClass: 'block',
  slidesPerView: 1,
  simulateTouch: false,
  pagination: {
    el: '.missions-pagination',
    type: 'bullets',
  },
  breakpoints: {
    640: {
      spaceBetween: 16,
      slidesPerView: 3,
    }
  }
});
