(function () {
  const $html = document.querySelector('html');
  const $menu = document?.querySelector('.menu');
  const $burger = document?.querySelector('.burger');
  const $overlay = document?.querySelector('.overlay');
  const $menuItems = document?.querySelectorAll('.nav li a');
  const TRANSITION_DELAY = 400;

  if ($menu) {
    $burger.addEventListener('click', toggleMenu);
    $overlay?.addEventListener('click', closeMenu);
    $menuItems.forEach((el) => {
      el.addEventListener('click', closeMenu);
    });
  }

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
