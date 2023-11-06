import axios from 'axios';

// function registerUser(email, userPassword) {
//   return axios.post('http://localhost:5000/auth/registration', {
//     username: email,
//     password: userPassword,
//   });
// }

// export default registerUser;

const api = axios.create({
  baseURL: 'http://localhost:5000/auth/',
});

export default api;
