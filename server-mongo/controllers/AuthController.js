import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secretAccessKey } from '../config.js';
import AuthService from '../services/AuthService.js';
import MailService from '../services/MailService.js';

const generateAccessToken = (id, roles) => {
  const payload = {
    id, roles,
  };
  return jwt.sign(payload, secretAccessKey, { expiresIn: '24h' });
};

class AuthController {
  async registration(req, res) {
    try {
      const user = await AuthService.checkExistUser(req.body.username);
      if (user) {
        return res.status(400).json({ message: 'User is already exist' });
      }
      await AuthService.registration(req.body);
      MailService.sendRegistrationSuccess(req.body.username);
      return res.json({ massage: 'User has been created' });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await AuthService.checkExistUser(username);
      const { _id, roles, password: existPassword } = user;

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      const isValidPassword = compareSync(password, existPassword);

      if (!isValidPassword) {
        return res.status(400).json({ message: 'Password is not correct' });
      }

      const token = generateAccessToken(_id, roles);
      return res.json({ token });
    } catch (e) {
      return res.status(400).json({ message: 'Login error' });
    }
  }
}

export default new AuthController();
