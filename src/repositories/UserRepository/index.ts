import { EntityRepository, getRepository } from 'typeorm';

import { User } from '../../entities/User';
import { IUserRepository } from './IUserRepository';
import { IAuthenticationDTO } from '../../useCases/Authentication/AuthenticationDTO';
import { ICreateUserDTO } from '../../useCases/User/CreateUser/CreateUserDTO';

@EntityRepository(User)
class UserRepository implements IUserRepository {
  public async createAndSave(dto: ICreateUserDTO): Promise<void> {
    const repository = getRepository(User);

    const userAlreadyExists = await repository.findOne({ where: { login: dto.login } });

    if (userAlreadyExists) throw new Error('Usuário já cadastrado.');

    const user = repository.create(dto);

    await repository.save(user);
  }

  public async authenticate(dto: IAuthenticationDTO): Promise<User> {
    const repository = getRepository(User);

    return await repository.findOne({ where: { ...dto } });
  }
}

const userRepository = new UserRepository();

export { userRepository };
