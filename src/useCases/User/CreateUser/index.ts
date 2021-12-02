import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';
import { userRepository } from '../../../repositories/UserRepository';

const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
