import SimpleModal from '../functions/modals';

const options = {
  onOpen: (modal) => {},
  onClose: (modal) => {},
  disableScroll: true,
  transition: 250,
  nested: false,
  overlayCloseAll: true,
};

const modals = new SimpleModal(options);

modals.init();
