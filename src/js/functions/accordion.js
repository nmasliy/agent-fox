(function () {
  const $triggers = document.querySelectorAll('[accordion-trigger]');

  if ($triggers.length > 0) {
    $triggers.forEach(($trigger) => {
      $trigger.addEventListener('click', function () {
        const $item = $trigger.closest('[accordion-item]');
        $item.classList.toggle('is-active');
      });
    });
  }
})();
