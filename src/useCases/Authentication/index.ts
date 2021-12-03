import { userRepository } from '../../repositories/UserRepository';
import { AuthenticationController } from './AuthenticationController';
import { AuthenticationUseCase } from './AuthenticationUseCase';

const authenticationUseCase = new AuthenticationUseCase(userRepository);
const authenticationController = new AuthenticationController(authenticationUseCase);

export { authenticationUseCase, authenticationController };
