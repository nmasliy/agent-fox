import { gsap } from "gsap";

const navItemNodes = [...document.querySelectorAll('.header__nav li'), document.querySelector('.header__btn-wrapper')];

let tl = gsap.timeline()

tl.from(".hero__bg-img-wrapper", { x: 1000, filter:"blur(50px)", duration: 0.7, ease: "power2.out" });
tl.from(".hero__bg-title--2", { y: "-200%",  duration: 1, ease: "power2.out" }, '-=0.3');
tl.from(".hero__bg-title--1", { y: "-200%",  duration: 1, ease: "power2.out" }, '-=0.7');
tl.from(".header__logo", { y: "-300",  filter:"blur(15px)",  duration: 0.5, ease: "power2.out" }, '-=1');
navItemNodes.forEach(itemNode => {
  tl.from(itemNode, {scale: 0, duration: 0.15, ease: "power2.out" }, '-=0.05');
})
tl.from(".hero__img", { x: "-100vw",  filter:"blur(4px)",  duration: 1, ease: "power2.out" });
tl.from(".hero__title", { x: "-100vw",  duration: 0.4, ease: "power2.out" }, '-=0.6');
tl.from(".hero__subtitle", { x: "-100vw",  duration: 0.4, ease: "power2.out" }, '-=0.3');
tl.from(".hero__text", { x: "-100vw",  duration: 0.5, ease: "power2.out" }, '-=0.3');
tl.from(".hero__btn-wrapper", { scale: 0,  duration: 0.3, ease: "power2.out" }, '-=0.3');

fullpage.onSlideChangeCustom = (({fromPosition, toPosition}) => {
  if (fromPosition === 0 && toPosition === 1) {
    tl.to(".hero__img", { x: 800, y: 500,  filter:"blur(2px)",  duration: 0.5, ease: "power2.in" })
    tl.to(".hero", { y: -300,  filter:"blur(1px)",  duration: 0.5, ease: "power2.in" }, "-=0.5")
  } else if (toPosition === 0) {
    tl.to(".hero", { y: 0,  filter:"blur(0)",  duration: 0.5, ease: "power2.out" })
    tl.to(".hero__img", { x: 0, y: 0,  filter:"blur(0)",  duration: 0.5, ease: "power2.out" }, "-=0.2")
  }
})
