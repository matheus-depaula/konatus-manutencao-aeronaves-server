import { User } from '../entities/User';

export interface IUsersRepository {
  findByLogin(login: string): Promise<User>;
}
