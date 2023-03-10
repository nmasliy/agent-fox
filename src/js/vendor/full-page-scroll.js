/**
 * Full page
 */
 (function () {
	'use strict';

  let allowScroll = true;

  function initScrollableSections() {
    const scrollableSections = document.querySelectorAll('.section--scroll');

    scrollableSections.forEach(section => {
      const hasSectionVerticalScroll= section.scrollHeight > section.clientHeight;

      function checkScroll() {
        allowScroll = false;
        // если блок проскроллен вниз, можно скроллить секцию
        const isBottomPosition = Math.abs(section.scrollHeight - section.clientHeight - section.scrollTop) < 1;
        if (isBottomPosition || section.scrollTop === 0) {
          setTimeout(() => {
            allowScroll = true;
          }, 30)
        } else {
          setTimeout(() => {
            allowScroll = false;
          }, 30)
        }
      }

      if (hasSectionVerticalScroll) {
        section.addEventListener('scroll', checkScroll)
      }
    })
  }

  function initScrollableCases() {
    const projectsCases = document.querySelectorAll('.projects__content');

    projectsCases.forEach(caseContent => {
      caseContent.addEventListener('mouseover', (e) => {
        allowScroll = false;
      })
      caseContent.addEventListener('mouseleave', (e) => {
        allowScroll = true;
      })
    })

  }

  initScrollableSections();
  initScrollableCases();

	/**
	 * Full scroll main function
	 */
	var fullScroll = function (params) {
		/**
		 * Main div
		 * @type {Object}
		 */
		var main = document.getElementById(params.mainElement);

		/**
		 * Sections divclass
		 * @type {Array}
		 */
		var sections = main.getElementsByTagName('section');

		/**
		 * Full page scroll configurations
		 * @type {Object}
		 */
		var defaults = {
			container : main,
			sections : sections,
			animateTime : params.animateTime || 0.7,
			animateFunction : params.animateFunction || 'ease',
			maxPosition: sections.length - 1,
      prevPosition: 0,
			currentPosition: 0,
      isAnimate: false,
			displayDots: typeof params.displayDots != 'undefined' ? params.displayDots : true,
			dotsPosition: params.dotsPosition || 'left',
      onSlideChangeCustom: () => {},
      onSlideChange: (payload) => {
        this.defaults.onSlideChangeCustom(payload);
      }
		};

		this.defaults = defaults;
		/**
		 * Init build
		 */
		this.init();
	};

	/**
	 * Init plugin
	 */
	fullScroll.prototype.init = function () {
		this.buildPublicFunctions()
			.buildSections()
			.buildDots()
			.addEvents();

		var anchor = location.hash.replace('#', '').split('/')[0];
		location.hash = 0;
		this.changeCurrentPosition(anchor);
		this.registerIeTags();
	};

	/**
	 * Build sections
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.buildSections = function () {
		var sections = this.defaults.sections;
		for (var i = 0; i < sections.length; i++) {
			sections[i].setAttribute('data-index', i);
		}
		return this;
	};

	/**
	 * Build dots navigation
	 * @return {Object} this (fullScroll)
	 */
	fullScroll.prototype.buildDots = function () {
		this.ul = document.createElement('ul');

		this.ul.className = this.updateClass(1, 'dots', this.ul.className);
		this.ul.className = this.updateClass(1, this.defaults.dotsPosition == 'right' ? 'dots-right' : 'dots-left', this.ul.className);

		var _self = this;
		var sections = this.defaults.sections;

		for (var i = 0; i < sections.length; i++) {
			var li = document.createElement('li');
			var a = document.createElement('a');

			a.setAttribute('href', '#' + i);
			li.appendChild(a);
			_self.ul.appendChild(li);
		}

		this.ul.childNodes[0].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[0].firstChild.className);

		if (this.defaults.displayDots) {
			document.body.appendChild(this.ul);
		}

		return this;
	};

	/**
	 * Add Events
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.addEvents = function () {

		if (document.addEventListener) {
			document.addEventListener('mousewheel', this.mouseWheelAndKey, false);
			document.addEventListener('wheel', this.mouseWheelAndKey, false);
			document.addEventListener('keyup', this.mouseWheelAndKey, false);
			document.addEventListener('touchstart', this.touchStart, false);
			document.addEventListener('touchend', this.touchEnd, false);
			window.addEventListener("hashchange", this.hashChange, false);

			/**
			 * Enable scroll if decive don't have touch support
			 */
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				if(!('ontouchstart' in window)){
					document.body.style = "overflow: scroll;";
					document.documentElement.style = "overflow: scroll;";
				}
			}

		} else {
			document.attachEvent('onmousewheel', this.mouseWheelAndKey, false);
			document.attachEvent('onkeyup', this.mouseWheelAndKey, false);
		}

		return this;
	};

	/**
	 * Build public functions
	 * @return {[type]} [description]
	 */
	fullScroll.prototype.buildPublicFunctions = function () {
		var mTouchStart = 0;
		var mTouchEnd = 0;
		var _self = this;

		this.mouseWheelAndKey = function (event) {
      if (document.querySelector('.disable-scroll') ||
        (!document.querySelector('.hero').dataset.animated)||
        _self.defaults.isAnimate) return;

			if (event.deltaY > 0 || event.keyCode == 40) {

        if(!allowScroll) return;

				_self.defaults.currentPosition ++;
				_self.changeCurrentPosition(_self.defaults.currentPosition);
			} else if (event.deltaY < 0 || event.keyCode == 38) {
        if(!allowScroll) return;

				_self.defaults.currentPosition --;
				_self.changeCurrentPosition(_self.defaults.currentPosition);
			}
			_self.removeEvents();
		};

		this.touchStart = function (event) {
      if (!allowScroll) return;
			mTouchStart = parseInt(event.changedTouches[0].clientY);
			mTouchEnd = 0;
		};

		this.touchEnd = function (event) {
      if (document.querySelector('.header__menu.is-active') || document.querySelector('.disable-scroll')) return;
      if (!allowScroll) return;
      if (_self.defaults.isAnimate) return;

			mTouchEnd = parseInt(event.changedTouches[0].clientY);
			if (mTouchEnd - mTouchStart > 100 || mTouchStart - mTouchEnd > 100) {
				if (mTouchEnd > mTouchStart) {
					_self.defaults.currentPosition --;
				} else {
          _self.defaults.currentPosition ++;
				}
				_self.changeCurrentPosition(_self.defaults.currentPosition);
			}
		};

		this.hashChange = function (event) {
      let prevPosition = +event.oldURL.substring(event.oldURL.indexOf('#') + 1, event.oldURL.indexOf('#') + 2);
      _self.defaults.prevPosition = prevPosition;

			if (location) {
        var anchor = location.hash.replace('#', '').split('/')[0];
				if (anchor !== "") {
          if (anchor == 0) {
            _self.defaults.onSlideChange({fromPosition: +_self.defaults.prevPosition, toPosition: 0});
            _self.defaults.currentPosition = +anchor;
						_self.animateScroll();
          }
					else if (anchor < 0) {
						_self.changeCurrentPosition(0);
					} else if (anchor > _self.defaults.maxPosition) {
						_self.changeCurrentPosition(_self.defaults.maxPosition);
					} else {
            _self.defaults.onSlideChange({fromPosition: +_self.defaults.prevPosition, toPosition: +anchor});
						_self.defaults.currentPosition = +anchor;
						_self.animateScroll();
					}
				}
			}
		};

		this.removeEvents = function () {
			if (document.addEventListener) {
			document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
			document.removeEventListener('wheel', this.mouseWheelAndKey, false);
			document.removeEventListener('keyup', this.mouseWheelAndKey, false);
			document.removeEventListener('touchstart', this.touchStart, false);
			document.removeEventListener('touchend', this.touchEnd, false);

			} else {
				document.detachEvent('onmousewheel', this.mouseWheelAndKey, false);
				document.detachEvent('onkeyup', this.mouseWheelAndKey, false);
			}

			setTimeout(function(){
				_self.addEvents();
			}, 600);
		};

		this.animateScroll = function () {
      this.defaults.isAnimate = true;
			var animateTime = this.defaults.animateTime;
			var animateFunction = this.defaults.animateFunction;
			var position = this.defaults.currentPosition * 100;

			this.defaults.container.style.webkitTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
			this.defaults.container.style.transform = 'translateY(-' + position + '%)';
			this.defaults.container.style.webkitTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateFunction;
			this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateFunction;

			for (var i = 0; i < this.ul.childNodes.length; i++) {
					this.ul.childNodes[i].firstChild.className = this.updateClass(2, 'active', this.ul.childNodes[i].firstChild.className);
					if (i == this.defaults.currentPosition) {
					this.ul.childNodes[i].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[i].firstChild.className);
				}
			}
      setTimeout(() => this.defaults.isAnimate = false, animateTime * 1000)
		};

		this.changeCurrentPosition = function (position) {
			if (position !== "" && !this.defaults.isAnimate) {
				_self.defaults.currentPosition = position;
				location.hash = _self.defaults.currentPosition;
			}
		};

		this.registerIeTags = function () {
			document.createElement('section');
		};

		this.updateClass = function (type, newClass, currentClass) {
			if (type == 1) {
				return currentClass += ' ' + newClass;
			} else if (type == 2) {
				return currentClass.replace(newClass, '');
			}
		};

		return this;
	};
	window.fullScroll = fullScroll;
})();
