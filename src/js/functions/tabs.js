(function () {
  const $tabTriggers = document.querySelectorAll('[data-tabs-trigger]');

  if ($tabTriggers.length > 0) {
    $tabTriggers.forEach(($trigger) => {
      const $tabWrapper = $trigger.closest('[data-tabs-container]');

      $trigger.addEventListener('click', function (e) {
        e.preventDefault();

        const $activeTab = $tabWrapper.querySelector(
          '[data-tabs-trigger].is-active'
        );
        const $activeContent = $tabWrapper.querySelector(
          '[data-tabs-content].is-active'
        );
        const id = tab.getAttribute('data-tabs');

        if ($activeTab) {
          $activeTab.classList.remove('is-active');
          $activeContent.classList.remove('is-active');
        }
        const $content = $tabWrapper.querySelector(
          '[data-tabs-content][data-tabs="' + id + '"]'
        );

        $trigger.classList.add('is-active');
        $content.classList.add('is-active');
      });
    });
  }
})();
