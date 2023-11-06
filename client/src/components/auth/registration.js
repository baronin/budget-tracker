import registerUser from '../../api/api';

const registrationForm = document.querySelector('.requires-validation');
registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = registrationForm.querySelector('[name="email"]').value;
  const userPassword = registrationForm.querySelector('[name="password"]').value;

  registerUser(email, userPassword)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
