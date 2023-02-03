import Swiper, { Navigation, Pagination, Mousewheel } from 'swiper';

Swiper.use([Navigation, Pagination, Mousewheel]);

const paginationNode = document.querySelector(".projects__pagination");
const projectsSliderNode = document.querySelector('.projects__slider');
const projectsSlidesCount = projectsSliderNode.querySelectorAll('.swiper-slide').length;

paginationNode.textContent = `01 / ${addZero(projectsSlidesCount)}`;

const projectsSlider = new Swiper(projectsSliderNode, {
  spaceBetween: 26,
  speed: 800,
  // simulateTouch : false,
  navigation: {
    prevEl: '.projects__prev',
    nextEl: '.projects__next',
  },
  pagination: {
    el: '.projects__pagination-mobile',
    clickable: true
  },
  // mousewheel: {
  //   eventsTarget: '.projects',
  //   releaseOnEdges: true,
  // },
  on: {
    slideChange: () => {
      paginationNode.textContent = `${addZero(projectsSlider.realIndex + 1)} / ${addZero(projectsSlidesCount)}`;
    }
  }
});

function addZero(num) {
  return num > 9 ? num : '0' + num;
}

window.projectsSlider = projectsSlider;
