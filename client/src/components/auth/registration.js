import api from '../../api';

const registration = async (event) => {
  const registrationButton = document.querySelector('#registrationBtn');
  if (!registrationButton) return;
  event.preventDefault();
  const formInputs = document.querySelectorAll('#registrationForm input');
  const profile = {};
  formInputs.forEach((element) => {
    if (element.id === 'phone') {
      profile.username = element.value;
    }
    if (element.id === 'password') {
      profile.password = element.value;
    }
  });
  if (!profile.username && !profile.password) return;
  console.log('registration', profile);
  try {
    await api.auth.registration(profile);
    window.location.href = '/login';
  } catch (error) {
    console.log('error', error);
  }
  registrationButton.addEventListener('click', registration);
};
