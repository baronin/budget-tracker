import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import { validate } from '../middlewares/index.js';
import { AuthValidation } from '../models/User/UserValidation.js';

const AuthRouter = new Router();
AuthRouter.post('/registration', validate(AuthValidation), AuthController.registration);
AuthRouter.post('/login', AuthController.login);

export default AuthRouter;
