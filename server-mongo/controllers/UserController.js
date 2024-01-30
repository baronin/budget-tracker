import UserService from '../services/UserService.js';
import FileService from '../services/FileService.js';

class UserController {
  async getUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      return res.json(users);
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  }

  async getUser(req, res) {
    const { id } = req.decoded;
    try {
      const user = await UserService.getUser(id);
      if (!user) {
        return res.status(400).json({ message: 'Such user is not exist' });
      }
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ message: 'Server error' });
    }
  }

  async update(req, res) {
    const { id } = req.isManager ? req.params : req.decoded;
    const data = req.body;
    const avatarFile = req.files?.avatar;
    if (!id) {
      res.status(400)
        .json({ message: 'ID has not passed' });
    }

    const payload = {
      ...data,
    };

    try {
      try {
        const avatar = await FileService.saveFile(avatarFile);
        if (avatar) {
          payload.avatar = avatar;
        }
      } catch (e) {
        return res.status(400).json({ message: e.message });
      }
      const user = await UserService.update(id, payload);
      if (!user) {
        return res.status(400).json({ message: 'Cannot find such user' });
      }
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ message: 'Server error' });
    }
  }
}

export default new UserController();
