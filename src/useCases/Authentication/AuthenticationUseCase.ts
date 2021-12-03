import { auth } from '../../auth';
import { regex } from '../../utils/Regex';
import { IAuthenticationDTO } from './AuthenticationDTO';
import { IUserRepository } from '../../repositories/UserRepository/IUserRepository';

export class AuthenticationUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: IAuthenticationDTO): Promise<string> {
    const isLoginValid = regex.validateLogin(dto.login);

    if (!isLoginValid) throw new Error('Login inválido');

    const user = await this.userRepository.authenticate(dto);

    if (!user) throw new Error('Usuário e/ou senha incorreto');

    const token = await auth.generateToken(user);

    return token;
  }
}
