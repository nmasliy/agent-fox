import Swiper, { Navigation, Pagination, Mousewheel } from 'swiper';

Swiper.use([Navigation, Pagination, Mousewheel]);

export const projectsSlider = new Swiper('.projects__slider', {
  spaceBetween: 50,
  speed: 500,
  navigation: {
    prevEl: '.projects__prev',
    nextEl: '.projects__next',
  },
  pagination: {
    el: '.projects__pagination',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },
  // mousewheel: {
  //   eventsTarget: '.projects',
  //   releaseOnEdges: true,
  // },
});

function addZero(num) {
  return num > 9 ? num : '0' + num;
}
