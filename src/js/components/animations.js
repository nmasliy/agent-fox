import { gsap } from "gsap";
import { MOBILE_BREAKPOINT } from '../_vars';

const heroSection = document.querySelector('.hero');
const burger = document.querySelector('.burger');
const sections = document.querySelectorAll('.section');

if (heroSection) {
  initAnimations();
}

function initAnimations() {
  const navListItemNodes = document.querySelectorAll('.header__nav li');
  const navItemNodes = [...navListItemNodes, document.querySelector('.header__btn-wrapper')];

  let tl = gsap.timeline()

  if (window.innerWidth > MOBILE_BREAKPOINT) { // В моб. версии фон анимируется снизу, в ПК - справа
    tl.from(".hero__bg-img-wrapper", { x: 1000, filter:"blur(50px)", duration: 0.5, ease: "power2.out" });
  } else {
    tl.from(".hero__bg-img-mobile", { y: "100%", filter:"blur(50px)", duration: 0.5, ease: "power2.out" });
  }
  tl.from(".hero__bg-title--2", { y: "-200%",  duration: 0.5, ease: "power2.out" }, '-=0.2');
  tl.from(".hero__bg-title--1", { y: "-200%",  duration: 0.5, ease: "power2.out" }, '-=0.5');
  tl.from(".header__logo", { y: "-300",  filter:"blur(15px)",  duration: 0.4, ease: "power2.out" }, '-=0.3');
  if (window.innerWidth > MOBILE_BREAKPOINT) { // Анимируем навигацию только в ПК версии
    navItemNodes.forEach(itemNode => {
      tl.from(itemNode, {scale: 0, duration: 0.15, ease: "power2.out" }, '-=0.05');
    })
  }
  if (window.innerWidth > 768) { // Мотоцикл виден только только при > 768, поэтому анимируем только в этом случае
    tl.from(".hero__img", { x: "-100vw",  filter:"blur(4px)",  duration: 0.7, ease: "power2.out" });
  }
  tl.from(".hero__title", { x: "-100vw", filter:"blur(2px)",  duration: 0.4, ease: "power2.out" }, '-=0.25');
  tl.from(".hero__subtitle", { x: "-100vw", filter:"blur(2px)",  duration: 0.4, ease: "power2.out" }, '-=0.3');
  tl.from(".hero__text", { x: "-100vw", filter:"blur(2px)",  duration: 0.5, ease: "power2.out" }, '-=0.3');
  tl.from(".hero__btn-wrapper", { scale: 0,  duration: 0.3, ease: "power2.out" }, '-=0.3')
  .then(() => heroSection.dataset.animated = true);

  fullpage.onSlideChangeCustom = ({fromPosition, toPosition}) => { // Анимация появления и исчезания первого экрана
    if (fromPosition === 0 && toPosition === 1) {
      tl.to(".hero__img", { x: 1200, y: 500,  filter:"blur(2px)",  duration: 0.6, ease: "power2.in" });
      tl.to(".hero", { y: -300,  filter:"blur(1px)",  duration: 0.5, ease: "power2.in" }, "-=0.5");
    } else if (toPosition === 0) {
      tl.to(".hero", { y: 0,  filter:"blur(0)",  duration: 0.5, ease: "power2.out" });
      tl.to(".hero__img", { x: 0, y: 0,  filter:"blur(0)",  duration: 0.5, ease: "power2.out" }, "-=0.2");
    }
    if (toPosition === 0) gsap.to(".arrow-up", { opacity: 0 });
    else gsap.to(".arrow-up", { opacity: 1 });
    
    
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      burger.style.transitionDelay = '0.65s';
      setTimeout(() => burger.style.transitionDelay = '', 650)
    }

    if (toPosition !== 0 || window.innerWidth <= MOBILE_BREAKPOINT) {
      burger.classList.add('is-visible');
      if (sections[toPosition]?.dataset.burger === 'white') {
        burger.classList.add('is-white');
      } else {
        burger.classList.remove('is-white');
      }
    } else {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        burger.classList.remove('is-visible');
      }
    }

  }

  navListItemNodes.forEach(listItemNode => { // Анимация первого экране при навигации по секциям через меню
    listItemNode.addEventListener('click', () => {
      tl.to(".hero__img", { x: 1200, y: 500,  filter:"blur(2px)",  duration: 0.6, ease: "power2.in" });
      tl.to(".hero", { y: -300,  filter:"blur(1px)",  duration: 0.5, ease: "power2.in" }, "-=0.5");
    })
  })
}

if (+fullpage.defaults.currentPosition !== 0) {
  gsap.to(".arrow-up", { opacity: 1 });
  burger.classList.add('is-visible');
}

if (window.innerWidth <= MOBILE_BREAKPOINT) {
  burger.classList.add('is-visible');
}

