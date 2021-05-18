import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

new Swiper('.pics', {
  spaceBetween: 24,
  wrapperClass: 'pics-wrap',
  slideClass: 'pics-item',
  slidesPerView: 1,
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  navigation: {
    nextEl: '.instagram_list .arrow-right',
    prevEl: '.instagram_list .arrow-left',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.pics-pagination',
    type: 'bullets',
  },
  breakpoints: {
    375: {
      spaceBetween: 16,
    },
    640: {
      initialSlide: 1,
      spaceBetween: 16,
      slidesPerView: 4,
    },
  }
});
