import { regex } from '../../../utils/Regex';
import { ICreateUserDTO } from './CreateUserDTO';
import { IUserRepository } from '../../../repositories/UserRepository/IUserRepository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: ICreateUserDTO): Promise<void> {
    const isLoginValid = regex.validateLogin(dto.login);

    if (!isLoginValid) throw new Error('Usuário inválido.');

    await this.userRepository.createAndSave(dto);
  }
}
