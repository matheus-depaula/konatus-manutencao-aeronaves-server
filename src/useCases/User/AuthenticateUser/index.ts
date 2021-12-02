import { userRepository } from '../../../repositories/UserRepository';
import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserUseCase, authenticateUserController };
