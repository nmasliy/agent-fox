import SimpleBar from 'simplebar'
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

const caseItems = document.querySelectorAll('.projects__img-wrapper');

if (window.innerWidth > 1024) {
  caseItems.forEach(itemNode => {
    const scrollItem = new SimpleBar(itemNode);
  })
}

