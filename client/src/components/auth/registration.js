const axios = require('axios');

const registrationForm = document.querySelector('.requires-validation');
registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = registrationForm.querySelector('[name="email"]').value;
  const userPassword = registrationForm.querySelector('[name="password"]').value;
  axios
    .post('http://localhost:5000/auth/registration', {
      username: email,
      password: userPassword,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
