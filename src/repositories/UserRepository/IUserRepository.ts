import { User } from '../../entities/User';
import { IAuthenticateUserDTO } from '../../useCases/User/AuthenticateUser/AuthenticateUserDTO';

export interface IUserRepository {
  createAndSave(user: User): Promise<void>;
  alreadyExists(login: string): Promise<boolean>;
  authenticate(user: IAuthenticateUserDTO): Promise<User>;
}
