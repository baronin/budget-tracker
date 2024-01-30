import { Router } from 'express';
import { validate, verifyToken } from '../middlewares/index.js';
import UserController from '../controllers/UserController.js';
import { UserValidation } from '../models/User/UserValidation.js';
import verifyRoles from '../middlewares/verifyRoles.js';

const UserRouter = new Router();
UserRouter.get('/users', verifyToken, UserController.getUsers);
UserRouter.get('/user', verifyToken, UserController.getUser);
UserRouter.patch('/user', verifyToken, validate(UserValidation), UserController.update);
UserRouter.patch('/user/:id', verifyToken, verifyRoles, validate(UserValidation), UserController.update);

export default UserRouter;
