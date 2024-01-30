import UserService from '../services/UserService.js';

const requireAdminRole = async (req, res, next) => {
  try {
    const { id } = req.decoded;
    const user = await UserService.getUser(id);

    if (user?.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. You must be an admin to perform this action.' });
    }

    req.isManager = true;

    next();
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export default requireAdminRole;
