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

const afterSend = () => {
  // console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.contacts-form', rules, afterSend);

