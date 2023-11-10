import auth from '../../api/auth';
import initializeFormValidation from './validation';

const registrationForm = document.querySelector('.requires-validation');

if (registrationForm) {
  initializeFormValidation(registrationForm, async () => {
    try {
      const email = registrationForm.querySelector('[name="email"]').value;
      const userPassword = registrationForm.querySelector('[name="password"]').value;
      await auth.registration({ email, userPassword });
    } catch (error) {
      if (error.payload?.message.length) {
        registrationForm.classList.add('was-validated');
        return;
      }
      throw error;
    }
  });
}

