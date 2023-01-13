import Swiper, { Navigation, Pagination, Mousewheel } from 'swiper';

Swiper.use([Navigation, Pagination, Mousewheel]);

const swiper = new Swiper('.projects__slider', {
  speed: 500,
  navigation: {
    prevEl: '.projects__prev',
    nextEl: '.projects__next',
  },
  mousewheel: {
    invert: true,
    eventsTarget: '.projects',
    releaseOnEdges: true,
  },
});
