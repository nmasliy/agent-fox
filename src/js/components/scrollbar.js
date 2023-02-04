import SimpleBar from 'simplebar'
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

const caseItems = document.querySelectorAll('.projects__img-wrapper');

if (window.innerWidth > 575) {
  caseItems.forEach(itemNode => {
    const scrollItem = new SimpleBar(itemNode);
  })
  document.querySelector(':root').style.setProperty('--projects-img-height', `${caseItems[0].offsetHeight}px`);

  window.addEventListener('resize', () => {
    document.querySelector(':root').style.setProperty('--projects-img-height', `${caseItems[0].offsetHeight}px`);
  })
}

