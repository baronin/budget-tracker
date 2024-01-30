import UserModel from '../models/User/UserModel.js';

class UserService {
  async getAllUsers() {
    return UserModel.find().select('-password');
  }

  async getUser(id) {
    return UserModel.findById(id).select('-password');
  }

  async update(id, data) {
    return UserModel.findByIdAndUpdate(id, data, { new: true }).select('-password');
  }
}

export default new UserService();
