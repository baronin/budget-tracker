import express from 'express';
import adminController from '../controllers/admin-controller';

const router = express.Router();

router.post('/admin/user', adminController.createFakeUser);
router.patch('/admin/user/:id', adminController.updateFakeUser);

export default router;
