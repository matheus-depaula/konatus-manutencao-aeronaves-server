import { auth } from '../../auth';
import { IAuthenticationDTO } from './AuthenticationDTO';
import { IUserRepository } from '../../repositories/UserRepository/IUserRepository';

export class AuthenticationUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: IAuthenticationDTO): Promise<string> {
    const login = dto.login.trim();

    if (!RegExp(/^[a-zA-Z]+$/).test(login)) throw new Error('Login inválido');

    const user = await this.userRepository.authenticate(dto);

    if (!user) throw new Error('Usuário e/ou senha incorreto.');

    const token = await auth.generateToken(user);

    return token;
  }
}
