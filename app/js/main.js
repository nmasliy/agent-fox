/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll */ "./src/js/components/scroll.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modals */ "./src/js/components/modals.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sliders */ "./src/js/components/sliders.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_sliders__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {

// Vendor local files

/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/accordion */ "./src/js/functions/accordion.js");
/* harmony import */ var _functions_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_accordion__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/menu */ "./src/js/functions/menu.js");
/* harmony import */ var _functions_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);


const scroll = new (smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default())('a[href*="#"]');

/***/ }),

/***/ "./src/js/components/modals.js":
/*!*************************************!*\
  !*** ./src/js/components/modals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/modals */ "./src/js/functions/modals.js");

const options = {
  onOpen: modal => {},
  onClose: modal => {},
  disableScroll: true,
  transition: 250,
  nested: false,
  overlayCloseAll: true
};
const modals = new _functions_modals__WEBPACK_IMPORTED_MODULE_0__["default"]();
modals.init(options);

/***/ }),

/***/ "./src/js/components/scroll.js":
/*!*************************************!*\
  !*** ./src/js/components/scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);

const scroll = new (smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default())('a[href*="#"]', {
  speedAsDuration: true,
  duration: 500
});

/***/ }),

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/***/ (() => {

// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/tabs */ "./src/js/functions/tabs.js");
/* harmony import */ var _functions_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_tabs__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/functions/accordion.js":
/*!***************************************!*\
  !*** ./src/js/functions/accordion.js ***!
  \***************************************/
/***/ (() => {

(function () {
  const $triggers = document.querySelectorAll('[accordion-trigger]');

  if ($triggers.length > 0) {
    $triggers.forEach($trigger => {
      $trigger.addEventListener('click', function () {
        const $item = $trigger.closest('[accordion-item]');
        $item.classList.toggle('is-active');
      });
    });
  }
})();

/***/ }),

/***/ "./src/js/functions/menu.js":
/*!**********************************!*\
  !*** ./src/js/functions/menu.js ***!
  \**********************************/
/***/ (() => {

(function () {
  var _document, _document2, _document3, _document4, _document5;

  const $html = document.querySelector('html');
  const $menu = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-menu]');
  const $burger = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-burger]');
  const $close = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector('[data-menu-close]');
  const $overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
  const $menuItems = (_document5 = document) === null || _document5 === void 0 ? void 0 : _document5.querySelectorAll('[data-menu-item]');
  const TRANSITION_DELAY = 400;
  const MOBILE_MENU_BREAKPOINT = 1024;
  let isInit = false;

  const checkScreenWidth = () => {
    // Активируем меню только на экранах <= 1024
    if ($menu && window.innerWidth <= MOBILE_MENU_BREAKPOINT && !isInit) {
      isInit = true;
      $burger.addEventListener('click', toggleMenu);
      $close === null || $close === void 0 ? void 0 : $close.addEventListener('click', closeMenu);
      $overlay === null || $overlay === void 0 ? void 0 : $overlay.addEventListener('click', closeMenu);
      $menuItems.forEach(el => {
        el.addEventListener('click', closeMenu);
      });
    } else {
      window.addEventListener('resize', checkScreenWidth);
    }
  };

  checkScreenWidth();

  function openMenu() {
    $overlay.style.display = 'block';
    $menu.style.display = 'block';
    $burger.setAttribute('aria-expanded', 'true');
    $burger.setAttribute('aria-label', 'Закрыть меню');
    $html.classList.add('disable-scroll');
    setTimeout(function () {
      $overlay.classList.add('is-active');
      $menu.classList.add('is-active');
      $burger.classList.add('is-active');
    }, 1);
  }

  function closeMenu() {
    $overlay.classList.remove('is-active');
    $menu.classList.remove('is-active');
    $burger.classList.remove('is-active');
    $burger.setAttribute('aria-expanded', 'false');
    $burger.setAttribute('aria-label', 'Открыть меню');
    $html.classList.remove('disable-scroll');
    setTimeout(function () {
      $overlay.style.display = '';
      $menu.style.display = '';
    }, TRANSITION_DELAY);
  }

  function toggleMenu() {
    $menu.classList.contains('is-active') ? closeMenu() : openMenu();
  }
})();

/***/ }),

/***/ "./src/js/functions/modals.js":
/*!************************************!*\
  !*** ./src/js/functions/modals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleModal)
/* harmony export */ });
class SimpleModal {
  constructor(options) {
    const defaultOptions = {
      beforeOpen: () => {},
      onOpen: () => {},
      beforeClose: () => {},
      onClose: () => {},
      disableScroll: true,
      transition: 250,
      nested: true,
      overlayCloseAll: true
    };
    this.options = Object.assign(defaultOptions, options);
    this.$html = document.querySelector('html');
    this.$modals = document.querySelectorAll('.modal');
    this.$activeModals = document.querySelectorAll('.modal.is-open');
    this.isAnimated = false;
  }

  init() {
    if (this.$modals.length > 0) {
      this.$modals.forEach($modal => {
        $modal.style.transitionDuration = this.options.transition / 1000 + 's';
      });

      this._events();
    }
  }

  open(id) {
    if (!this.isAnimated) {
      const $modal = document.querySelector('#' + id);
      this.options.beforeOpen($modal);
      $modal.setAttribute('aria-hidden', false);
      this.isAnimated = true;
      setTimeout(() => {
        $modal.classList.add('is-open');

        if (this.options.disableScroll) {
          this.$html.classList.add('overflow-hidden');
        }
      }, 10);
      setTimeout(() => {
        this.isAnimated = false;
        this.$activeModals = document.querySelectorAll('.modal.is-open');
        this.options.onOpen($modal);
      }, this.options.transition);
    }
  }

  close(id) {
    if (!this.isAnimated) {
      const $modal = document.querySelector('#' + id);
      this.options.beforeClose($modal);
      this.isAnimated = true;
      $modal.classList.remove('is-open');

      if (this.options.disableScroll && this.$activeModals.length === 1) {
        this.$html.classList.remove('overflow-hidden');
      }

      setTimeout(() => {
        $modal.setAttribute('aria-hidden', true);
        this.isAnimated = false;
        this.$activeModals = document.querySelectorAll('.modal.is-open');
        this.options.onClose($modal);
      }, this.options.transition);
    }
  }

  closeAll() {
    this.$activeModals.forEach($item => {
      this.isAnimated = false;
      this.close($item.id);
      this.$html.classList.remove('overflow-hidden');
    });
  }

  _events() {
    document.body.addEventListener('click', e => {
      const openTrigger = e.target.closest('[data-modal-open]');
      const closeTrigger = e.target.closest('[data-modal-close]');
      const $modal = e.target.closest('.modal');
      const isOverlay = $modal && !e.target.closest('.modal__inner');

      if (openTrigger) {
        e.preventDefault();
        const modalId = openTrigger.dataset.modalOpen;

        if (!this.options.nested && this.$activeModals.length > 0) {
          this.closeAll();
          setTimeout(() => {
            this.open(modalId);
          }, this.options.transition);
        } else {
          this.open(modalId);
        }
      } else if (closeTrigger) {
        e.preventDefault();
        const modalId = closeTrigger.dataset.modalClose || $modal.id;
        this.close(modalId);
      } else if (isOverlay) {
        if (this.options.overlayCloseAll && this.$activeModals.length > 0) {
          this.closeAll();
        } else {
          this.close($modal.id);
        }
      }
    });
  }

}

/***/ }),

/***/ "./src/js/functions/tabs.js":
/*!**********************************!*\
  !*** ./src/js/functions/tabs.js ***!
  \**********************************/
/***/ (() => {

(function () {
  const $tabTriggers = document.querySelectorAll('[data-tabs-trigger]');

  if ($tabTriggers.length > 0) {
    $tabTriggers.forEach($trigger => {
      const $tabWrapper = $trigger.closest('[data-tabs-container]');
      $trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const $activeTab = $tabWrapper.querySelector('[data-tabs-trigger].is-active');
        const $activeContent = $tabWrapper.querySelector('[data-tabs-content].is-active');
        const id = tab.getAttribute('data-tabs');

        if ($activeTab) {
          $activeTab.classList.remove('is-active');
          $activeContent.classList.remove('is-active');
        }

        const $content = $tabWrapper.querySelector('[data-tabs-content][data-tabs="' + id + '"]');
        $trigger.classList.add('is-active');
        $content.classList.add('is-active');
      });
    });
  }
})();

/***/ }),

/***/ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t(e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})("undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof window?window:this,(function(M){"use strict";var q={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},I=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},F=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},L=function(e){return e?(t=e,parseInt(M.getComputedStyle(t).height,10)+e.offsetTop):0;var t},x=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),M.scrollTo(0,t))},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof M.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var b,a,A,O,C={};C.cancelScroll=function(e){cancelAnimationFrame(O),O=null,e||H("scrollCancel",b)},C.animateScroll=function(a,r,e){C.cancelScroll();var i=I(b||q,e||{}),c="[object Number]"===Object.prototype.toString.call(a),t=c||!a.tagName?null:a;if(c||t){var s=M.pageYOffset;i.header&&!A&&(A=document.querySelector(i.header));var n,o,u,l,m,d,f,h,p=L(A),g=c?a:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,F()-M.innerHeight)),a})(t,p,parseInt("function"==typeof i.offset?i.offset(a,r):i.offset,10),i.clip),y=g-s,v=F(),w=0,S=(n=y,u=(o=i).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&u>o.durationMax?o.durationMax:o.durationMin&&u<o.durationMin?o.durationMin:parseInt(u,10)),E=function(e){var t,n,o;l||(l=e),w+=e-l,d=s+y*(n=m=1<(m=0===S?0:w/S)?1:m,"easeInQuad"===(t=i).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),M.scrollTo(0,Math.floor(d)),(function(e,t){var n=M.pageYOffset;if(e==t||n==t||(s<t&&M.innerHeight+n)>=v)return C.cancelScroll(!0),x(a,t,c),H("scrollStop",i,a,r),!(O=l=null)})(d,g)||(O=M.requestAnimationFrame(E),l=e)};0===M.pageYOffset&&M.scrollTo(0,0),f=a,h=i,c||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in M&&M.matchMedia("(prefers-reduced-motion)").matches?x(a,Math.floor(g),!1):(H("scrollStart",i,a,r),C.cancelScroll(!0),M.requestAnimationFrame(E))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(b.ignore)&&a.hostname===M.location.hostname&&a.pathname===M.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if("#"===t){if(!b.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=M.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||M.pageYOffset},document.title,t||M.location.href)}})(b),C.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(b)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||C.animateScroll(t,null,{updateURL:!1})}};C.destroy=function(){b&&(document.removeEventListener("click",t,!1),M.removeEventListener("popstate",n,!1),C.cancelScroll(),O=A=a=b=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in M&&"requestAnimationFrame"in M&&"closest"in M.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";C.destroy(),b=I(q,e||{}),A=b.header?document.querySelector(b.header):null,document.addEventListener("click",t,!1),b.updateURL&&b.popstate&&M.addEventListener("popstate",n,!1)})(),C}}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map