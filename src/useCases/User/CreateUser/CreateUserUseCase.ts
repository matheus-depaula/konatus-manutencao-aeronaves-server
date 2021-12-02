import { User } from '../../../entities/User';
import { IUserRepository } from '../../../repositories/UserRepository/IUserRepository';
import { regex } from '../../../utils/Regex';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User): Promise<void> {
    const isLoginValid = regex.validateLogin(user.login);

    if (!isLoginValid) throw new Error('Login inválido');

    const loginAlreadyExists = await this.userRepository.alreadyExists(user.login);

    if (loginAlreadyExists) throw new Error('Login já cadastrado');

    await this.userRepository.createAndSave(user);
  }
}
