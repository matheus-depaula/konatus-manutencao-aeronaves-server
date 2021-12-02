import { regex } from '../../../utils/Regex';
import { auth } from '../../../auth';
import { IAuthenticateUserDTO } from './AuthenticateUserDTO';
import { IUserRepository } from '../../../repositories/UserRepository/IUserRepository';

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: IAuthenticateUserDTO): Promise<string> {
    const isLoginValid = regex.validateLogin(user.login);

    if (!isLoginValid) throw new Error('Login inválido');

    const isCredentialsValid = await this.userRepository.authenticate(user);

    if (!isCredentialsValid) throw new Error('Usuário e/ou senha incorreto');

    const _token = await auth.generate(user.login);

    return _token;
  }
}
