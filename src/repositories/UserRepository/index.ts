import { EntityRepository, getRepository } from 'typeorm';

import { User } from '../../entities/User';
import { IUserRepository } from './IUserRepository';
import { IAuthenticateUserDTO } from '../../useCases/User/AuthenticateUser/AuthenticateUserDTO';

@EntityRepository(User)
class UserRepository implements IUserRepository {
  public async createAndSave(user: User): Promise<void> {
    const _user = new User();

    Object.assign(user, user);

    try {
      await getRepository(User).save(_user);
    } catch (err) {
      console.log(err.message);
    }
  }

  public async alreadyExists(login: string): Promise<boolean> {
    try {
      return !!(await getRepository(User).findOne({ where: { login } }));
    } catch (err) {
      console.log(err.message);
    }
  }

  public async authenticate(user: IAuthenticateUserDTO): Promise<User> {
    try {
      return await getRepository(User).findOne({ where: { ...user } });
    } catch (err) {
      console.log(err.message);
    }
  }
}

const userRepository = new UserRepository();

export { userRepository };
