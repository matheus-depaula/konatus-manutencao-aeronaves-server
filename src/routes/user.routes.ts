import { Router } from 'express';
import { isTokenValid } from '../middlewares/isTokenValid';
import { createUserController } from '../useCases/User/CreateUser';
import { authenticateUserController } from '../useCases/User/AuthenticateUser';

const userRouter = Router();

userRouter.post('/auth', (req, res) => authenticateUserController.handle(req, res));
userRouter.post('/user', isTokenValid, (req, res) => createUserController.handle(req, res));

export { userRouter };
