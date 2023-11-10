import { axiosInstance } from './axios-instance';
import apiError from "./api-error";

const auth = {
  async registration(data) {
      try {
        const response = await axiosInstance.post('/auth/registration', {
          password: data.userPassword,
          username: data.email,
        });
        return response.data;
      } catch (error) {
        if(!error.isAxiosError) throw error;
        throw new apiError({
          status: error.response.status,
          message: error.response.data.message,
          userNameIsRequired: error.response.data?.message.includes('Username is required field'),
          passwordIsRequired: error.response.data?.message.includes('Password is required field'),
          emailIsNotCorrect: error.response.data?.message.includes('Username must be email'),
          passwordIsTooShort: error.response.data?.message.includes('Password is too short - should be 8 chars minimum.'),
        })
      }
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
