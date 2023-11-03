// const registration = async (event) => {
//   const registrationButton = document.querySelector('#registrationBtn');
//   if (!registrationButton) return;
//   event.preventDefault();
//   const formInputs = document.querySelectorAll('#registrationForm input');
//   const profile = {};
//   formInputs.forEach((element) => {
//     if (element.id === 'phone') {
//       profile.username = element.value;
//     }
//     if (element.id === 'password') {
//       profile.password = element.value;
//     }
//   });
//   if (!profile.username && !profile.password) return;
//   console.log('registration', profile);
//   try {
//     await api.auth.registration(profile);
//     window.location.href = '/login';
//   } catch (error) {
//     console.log('error', error);
//   }
//   registrationButton.addEventListener('click', registration);
// };
// import AuthApi from '../../api/auth-api';
// import axios from 'axios';

// const registrationForm = document.querySelector('.requires-validation');

// registrationForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   // const name = registrationForm.querySelector('[name="name"]').value;
//   const email = registrationForm.querySelector('[name="email"]').value;
//   const password = registrationForm.querySelector('[name="password"]').value;

//   axios.post('http://localhost:5000/registration', {
//     Username: email,
//     Password: password,
//   });
// });
