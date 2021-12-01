import { EntityRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

@EntityRepository(User)
export class PostgresUsersRepository extends Repository<User> implements IUsersRepository {
  public async findByLogin(login: string): Promise<User> {
    return this.findOne({ where: { login } });
  }
}
