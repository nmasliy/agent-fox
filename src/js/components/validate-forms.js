import { validateForms } from './functions/validate-forms';
const rules = [];

const afterForm = () => {
  console.log('Произошла отправка');
};

validateForms('.contacts-form', rules, afterForm);
