import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

new Swiper('.allInvite-eventList', {
  spaceBetween: 24,
  wrapperClass: 'allInvite-wrap',
  slideClass: 'event',
  slidesPerView: 1,
  touchEventsTarget: 'wrapper',
  navigation: {
    nextEl: '.allInvite .arrow-right',
    prevEl: '.allInvite .arrow-left',
    disabledClass: 'disabled',
  },
  pagination: {
    el: '.allInvite-pagination',
    type: 'bullets',
  },
  breakpoints: {
    640: {
      spaceBetween: 16,
      slidesPerView: 3,
    }
  }
});
