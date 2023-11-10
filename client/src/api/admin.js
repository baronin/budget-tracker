import fetchInstance from './fetch-instance';
import ApiError from './api-error';

const admin = {
  async post(body) {
    try {
      return await fetchInstance.post('/admin/user', body);
    } catch (error) {
      const emptyMessage = await error.json();
      const nameInvalid = emptyMessage.error;
      const errorMessage = {
        status: error.status,
        message: nameInvalid || emptyMessage,
      };
      throw new ApiError(errorMessage);
    }
  },
  async patch(userId, body) {
    try {
      return await fetchInstance.patch(`/admin/user/${userId}`, body);
    } catch (error) {
      const emptyMessage = await error.json();
      const errorMessage = {
        status: error.status,
        message: emptyMessage.customError || emptyMessage,
      };
      throw new ApiError(errorMessage);
    }
  },
};

export default admin;
