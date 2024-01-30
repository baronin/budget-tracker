import yup from 'yup';
import { emailRegExp, phoneRegExp } from '../../constants/Regex.js';

const AuthValidation = yup.object({
  username: yup.string()
    .matches(emailRegExp, 'Username must be email')
    .required('Username is required field'),
  password: yup.string()
    .required('Password is required field')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});

const UserValidation = yup.object().shape({
  name: yup.string(),
  gender: yup.string()
    .oneOf(['male', 'female']),
  phone: yup.string()
    .matches(phoneRegExp, 'Phone number is not correct'),
  email: yup.string()
    .matches(emailRegExp, 'Email is not correct'),
  floor: yup.number(),
  apartment: yup.number(),
  avatar: yup.object()
    .shape({
      file: yup.mixed(),
    }),
  role: yup.string()
    .oneOf(['user', 'admin', 'manager']),
});

export { UserValidation, AuthValidation };
