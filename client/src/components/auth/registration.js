import auth from '../../api/auth';
import initializeFormValidation from './validation';

const registrationForm = document.querySelector('.requires-validation');
initializeFormValidation(registrationForm, () => {
  const email = registrationForm.querySelector('[name="email"]').value;
  const userPassword = registrationForm.querySelector('[name="password"]').value;
  auth.registration({ email, userPassword });
});
