(function () {
  const tabTriggerNodes = document.querySelectorAll('.services__name');

  if (tabTriggerNodes.length > 0) {
    tabTriggerNodes.forEach((triggerNode) => {
      triggerNode.addEventListener('click', function (e) {
        e.preventDefault();

        const activeNode = document.querySelector('.services__item.is-active');
        const id = triggerNode
          .closest('.services__item')
          .getAttribute('data-tabs');

        if (activeNode) {
          activeNode.classList.remove('is-active');
        }
        const clickedNode = document.querySelector(
          '.services__item[data-tabs="' + id + '"]'
        );

        clickedNode.classList.add('is-active');
      });
    });
  }
})();
