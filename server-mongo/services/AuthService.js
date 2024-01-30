import { hashSync } from 'bcrypt';
import UserModel from '../models/User/UserModel.js';
import RoleModel from '../models/Roles/RolesModel.js';

class AuthService {
  async checkExistUser(username) {
    return UserModel.findOne({ username });
  }

  async registration(user) {
    const { username, password } = user;
    const hashPassword = hashSync(password, 7);
    const userRole = await RoleModel.findOne({ value: 'user' });
    const newUser = new UserModel({ username, password: hashPassword, roles: [userRole.value] });
    await newUser.save();
  }
}

export default new AuthService();
