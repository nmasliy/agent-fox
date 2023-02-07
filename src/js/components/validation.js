import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'customRegexp',
        value: /^([^0-9]*)$/,
        errorMessage: 'В имени не должно быть цифр!'
      },
    ]
  },
  {
    ruleSelector: '.form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон!',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      }
    ]
  },
  // {
  //   ruleSelector: '.form__input--file',
  //   rules: [
  //     {
  //     rule: 'files',
  //     value: {
  //       files: {
  //         extensions: ['jpeg', 'png'],
  //         maxSize: 25000,
  //         minSize: 1000,
  //         types: ['image/jpeg', 'image/png'],
  //       },
  //     },
  //     errorMessage: 'Нельзя прикрепить файл с таким расширением!'
  //   }
  // ]
  // },
];

const rulesContacts = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'customRegexp',
        value: /^([^0-9]*)$/,
        errorMessage: 'В имени не должно быть цифр!'
      },
    ]
  },
  {
    ruleSelector: '.form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон!',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const rulesTender = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'customRegexp',
        value: /^([^0-9]*)$/,
        errorMessage: 'В имени не должно быть цифр!'
      },
    ]
  },
  {
    ruleSelector: '.form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон!',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--tender',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле!'
      },
    ]
  },

];

const fileInput = document.querySelector('#file');
const fileTextNode = document.querySelector('.form__file span');

fileInput.addEventListener('change', (e) => {
  if (fileInput.files.length > 0) {
    fileTextNode.textContent = fileInput.files[0].name;
  } else {
    fileTextNode.textContent = fileTextNode.dataset.text;
  }
})

const afterSend = () => {
  const currentModalId = window.modals.activeModalNodes[0].id;
  window.modals.close(currentModalId);
}

const afterSendWithFile = () => {
  fileInput.value = "";
  fileTextNode.textContent = fileTextNode.dataset.text;
};

validateForms('.contacts-form', rules, afterSendWithFile);
validateForms('#modal-contact .modal__form', rulesContacts, afterSend);
validateForms('#modal-tender .modal__form', rulesTender, afterSend);

