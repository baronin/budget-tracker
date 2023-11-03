import fetchInstance from './fetchInstance';
import users from './users';
import admin from './admin';
import ApiError from './ApiError';
import auth from './auth';
import authApi from './auth-api';

const api = {
  fetchInstance,
  users,
  admin,
  ApiError,
  auth,
  authApi,
};

export default api;
