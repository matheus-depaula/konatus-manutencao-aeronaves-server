import { ICreateUserDTO } from './CreateUserDTO';
import { IUserRepository } from '../../../repositories/UserRepository/IUserRepository';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: ICreateUserDTO): Promise<void> {
    const login = dto.login.trim();
    const password = dto.password.trim();

    if (!login) throw new Error('Usuário inválido.');

    if (!password) throw new Error('Senha inválida.');

    if (!RegExp(/^[a-zA-Z]+$/).test(login))
      throw new Error('Usuário não pode conter números e/ou caracteres especiais.');

    if (login.length < 4) throw new Error('Usuário deve ter pelo menos 4 caracteres.');

    if (password.length < 8) throw new Error('Senha deve ter pelo menos 8 caracteres.');

    await this.userRepository.createAndSave(dto);
  }
}
