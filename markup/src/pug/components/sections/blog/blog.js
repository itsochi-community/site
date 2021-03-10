import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

new Swiper('.articles', {
  spaceBetween: 24,
  wrapperClass: 'articles-wrap',
  slideClass: 'article',
  slidesPerView: 1,
  touchEventsTarget: 'wrapper',
  navigation: {
    nextEl: '.blog .arrow-right',
    prevEl: '.blog .arrow-left',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.articles-pagination',
    type: 'bullets',
  },
  breakpoints: {
    640: {
      spaceBetween: 16,
      slidesPerView: 3,
    }
  }
});
