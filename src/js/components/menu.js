import '../functions/menu';

if (window.innerWidth <= 575) {
  const burger = document.querySelector('.burger');

  document.querySelector('.hero').id = '0';
  document.querySelector('.projects').id = '1';
  document.querySelector('.services').id = '2';
  document.querySelector('.about').id = '3';
  document.querySelector('.contacts').id = '4';

  document.querySelector('.arrow-up').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.hero').scrollIntoView({behavior: "smooth"});
  })


  document.body.addEventListener('scroll', e => {
    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 40) {
        if (section.dataset.burger === 'white') {
          burger.classList.add('is-white');
        } else {
          burger.classList.remove('is-white');
        }
      }
    });


    if (document.body.scrollTop > 700) {
      document.querySelector('.arrow-up').classList.add('is-active');
    } else {
      document.querySelector('.arrow-up').classList.remove('is-active');
    }

  });
}
