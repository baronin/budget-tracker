import api from '../../api/api';

const registrationForm = document.querySelector('.requires-validation');
registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = registrationForm.querySelector('[name="email"]').value;
  const userPassword = registrationForm.querySelector('[name="password"]').value;

  api
    .post('registration', {
      username: email,
      password: userPassword,
    })
    .then((response) => {
      console.log('Регистрация прошла успешно', response.data);
    })
    .catch((error) => {
      console.error('Ошибка при регистрации', error);
    });
});
