import fetchInstance from './fetchInstance';
import users from './users';
import admin from './admin';
import ApiError from './ApiError';
import auth from './auth';
import { axiosInstance } from './axios-instance';

export { BASE_URL } from './axios-instance';

const api = {
  fetchInstance,
  users,
  admin,
  ApiError,
  auth,
  axiosInstance,
};

export default api;
