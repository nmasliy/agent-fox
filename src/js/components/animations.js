import { gsap } from "gsap";
import { MOBILE_BREAKPOINT } from '../_vars';

const heroSection = document.querySelector('.hero');
const burger = document.querySelector('.burger');
const sections = document.querySelectorAll('.section');

let isBlur = true;
const isSafari =  navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                  navigator.userAgent &&
                  navigator.userAgent.indexOf('CriOS') == -1 &&
                  navigator.userAgent.indexOf('FxiOS') == -1;

if (heroSection && window.innerWidth > 575) {
  if (isSafari) {
    const motogirlParts = document.querySelectorAll('.motogirl__img');

    motogirlParts.forEach(item => {
      item.style.animation = 'none';
    })

    isBlur = false;

    // window.fullpage.defaults.onSlideChangeCustom = ({fromPosition, toPosition}) => { // Анимация появления и исчезания первого экрана при скролле
    //   if (toPosition === 0) gsap.to(".arrow-up", { opacity: 0 });
    //   else gsap.to(".arrow-up", { opacity: 1 });

    //   burger.style.transitionDelay = '0.65s';

    //   setTimeout(() => {
    //   burger.style.transitionDelay = '';
    //   }, 650)

    //   if (window.innerWidth > MOBILE_BREAKPOINT) {
    //     setTimeout(() => burger.style.transitionDelay = '', 650)
    //   }

    //   if (toPosition !== 0 || window.innerWidth <= MOBILE_BREAKPOINT) {
    //     burger.classList.add('is-visible');
    //     if (sections[toPosition]?.dataset.burger === 'white') {
    //       burger.classList.add('is-white');
    //     } else {
    //       burger.classList.remove('is-white');
    //     }
    //   } else {
    //     if (window.innerWidth > MOBILE_BREAKPOINT) {
    //       burger.classList.remove('is-visible');
    //     }
    //   }

    // }
  }
  // else {}
  initAnimations();

  // setTimeout(() => {
  //   heroSection.dataset.animated = true
  // }, 1500)
}

function initAnimations() {
  const navListItemNodes = document.querySelectorAll('.header__nav li');
  const navItemNodes = [...navListItemNodes, document.querySelector('.header__btn-wrapper')];

  const tl = gsap.timeline();
  const tl2 = gsap.timeline({paused: true});
  const motoTl = gsap.timeline({paused: true});
  const scrollTl = gsap.timeline({paused: true});

  function initAnimationsOnLoad() {
    scrollTl.to(".motogirl", { x: "100vw",  filter: isBlur ? "blur(2px)" : "none", opacity: 0.4,  duration: 0.7, ease: "power4.in" });
    scrollTl.to(".hero", { y: -200,  filter: isBlur ? "blur(1px)" : "none",  duration: 0.5, ease: "power2.in" }, "-=0.4");

    if (+fullpage?.defaults.currentPosition !== 0) {
      scrollTl.play();
    } else {
      motoTl.from(".motogirl", { x: "-120vw",  filter: isBlur ? "blur(4px)" : "none",  duration: 0.7, ease: "power2.out" });
    }

    motoTl.from(".motogirl__back-wheel img", { rotate: -360,  duration: 0.3, ease: "linear", repeat: -1}, "-=0.7")
          .from(".motogirl__front-wheel img", { rotate: -360,  duration: 0.3, ease: "linear", repeat: -1},"-=1");

    if (window.innerWidth > MOBILE_BREAKPOINT) { // В моб. версии фон анимируется снизу, в ПК - справа
      tl.from(".hero__bg-img-wrapper", { x: 1000, filter: isBlur ? "blur(50px)" : "none", duration: 0.5, ease: "power2.out" });
    } else {
      tl.from(".hero__bg-img-mobile", { y: "100%", filter: isBlur ? "blur(50px)" : "none", duration: 0.5, ease: "power2.out" });
    }
    tl.from(".hero__bg-title--2", { y: "-200%",  duration: 0.5, ease: "power2.out" }, '-=0.2')
      .from(".hero__bg-title--1", { y: "-200%",  duration: 0.5, ease: "power2.out" }, '-=0.5')
      .from(".header__logo", { y: "-300",  filter: isBlur ? "blur(15px)" : "none",  duration: 0.4, ease: "power2.out" }, '-=0.3')
      .then(() => {
        tl2.play();
        motoTl.play();
        setTimeout(() => {
          motoTl.timeScale(0.5);
        }, 600)
        setTimeout(() => {
          motoTl.timeScale(0.2);
        }, 700)
        setTimeout(() => {
          motoTl.timeScale(0.05);
          motoTl.killTweensOf(".motogirl");
        }, 800)
      });


    if (window.innerWidth > MOBILE_BREAKPOINT) { // Анимируем навигацию только в ПК версии
      navItemNodes.forEach(itemNode => {
        tl.from(itemNode, {scale: 0, duration: 0.15, ease: "power2.out" }, '-=0.05');
      })
    }

    tl2.from(".hero__title", { x: "-100vw", filter: isBlur ? "blur(2px)" : "none", delay: 0.5,  duration: 0.4, ease: "power2.out" }, '-=0.25')
      .from(".hero__subtitle", { x: "-100vw", filter: isBlur ? "blur(2px)" : "none",  duration: 0.4, ease: "power2.out" }, '-=0.3')
      .from(".hero__text", { x: "-100vw", filter: isBlur ? "blur(2px)" : "none",  duration: 0.5, ease: "power2.out" }, '-=0.3')
      .from(".hero__btn-wrapper", { scale: 0,  duration: 0.3, ease: "power2.out" }, '-=0.3')
      .then(() => {
        allowPageScroll();
        heroSection.dataset.animated = true;
      });
  }

  function allowPageScroll() {
    window.fullpage.defaults.onSlideChangeCustom = ({fromPosition, toPosition}) => { // Анимация появления и исчезания первого экрана при скролле
      if (window.innerWidth > 768) {
        if (fromPosition === 0) {
          motoTl.timeScale(1);
          scrollTl.play();
        } else if (toPosition === 0) {
          motoTl.timeScale(0.05);
          scrollTl.reverse();
        }
      }
      if (toPosition === 0) gsap.to(".arrow-up", { opacity: 0 });
      else gsap.to(".arrow-up", { opacity: 1 });

      burger.style.transitionDelay = '0.65s';

      setTimeout(() => {
        burger.style.transitionDelay = '';
      }, 650)


      if (window.innerWidth > MOBILE_BREAKPOINT) {
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
  }

  initAnimationsOnLoad();

  if (+fullpage?.defaults.currentPosition !== 0) {
    if (sections[+fullpage.defaults.currentPosition]?.dataset.burger === 'white') {
      burger.classList.add('is-white');
    }
    gsap.to(".arrow-up", { opacity: 1 });
    burger.classList.add('is-visible');
  }

  const ntl = gsap.timeline();

  navListItemNodes.forEach(listItemNode => { // Анимация первого экране при навигации по секциям через меню
    listItemNode.addEventListener('click', () => {
      motoTl.timeScale(1);
      ntl.to(".motogirl", { x: "100vw", filter: isBlur ? "blur(2px)" : "none", opacity: 0.4, duration: 0.6, ease: "power2.in" });
      ntl.to(".hero", { y: -300,  filter: isBlur ? "blur(1px)" : "none",  duration: 0.5, ease: "power2.in" }, "-=0.5");
    })
  })
}

if (window.innerWidth <= MOBILE_BREAKPOINT) {
  burger.classList.add('is-visible');
}
