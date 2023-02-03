import SimpleBar from 'simplebar'
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

const caseItems = document.querySelectorAll('.projects__img-wrapper');

caseItems.forEach(itemNode => {
  const scrollItem = new SimpleBar(itemNode);

  scrollItem.getScrollElement().addEventListener('scroll', e => {
    // const element = e.target;
    // console.log(element)
    // const isBottomPosition = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1;
    // if (isBottomPosition || element.scrollTop === 0) {
    //   console.log('top or bottom');
    // }
  });
})

document.querySelector(':root').style.setProperty('--projects-img-height', `${caseItems[0].offsetHeight}px`);

window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--projects-img-height', `${caseItems[0].offsetHeight}px`);
})
