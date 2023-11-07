import { axiosInstance } from './axios-instance';

const auth = {
  async registration(data) {
    try {
      const response = await axiosInstance.post('/auth/registration', {
        password: data.userPassword,
        username: data.email,
      });
      return response.data;
    } catch (error) {
      const errorItem = document.querySelector('#error-message');
      console.log(errorItem);
      if (error.response) {
        console.log(error);
        errorItem.innerHTML = `${error.response.data.message}`;
        console.log('Ошибка при регистрации:', error.response.data);
        console.log('Статус ошибки:', error.response.status);
        console.log('Заголовки ошибки:', error.response.headers);
      } else if (error.request) {
        console.log('Запрос не получил ответ:', error.request);
      } else {
        console.log('Ошибка настройки запроса:', error.message);
      }
    }
    return null;
  },
  async login(data) {
    try {
      const response = await axiosInstance.post('/auth/login', data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log('Ошибка при входе:', error.response.data);
        console.log('Статус ошибки:', error.response.status);
        console.log('Заголовки ошибки:', error.response.headers);
      } else if (error.request) {
        console.log('Запрос не получил ответ:', error.request);
      } else {
        console.log('Ошибка настройки запроса:', error.message);
      }
    }
    return null;
  },
};

export default auth;
