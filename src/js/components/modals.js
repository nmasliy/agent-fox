import SimpleModal from '../functions/modals';

const options = {
  transition: 350,
  nested: false,
};

const modals = new SimpleModal(options);

modals.init();

window.modals = modals;
