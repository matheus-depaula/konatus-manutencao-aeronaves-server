import { User } from '../../entities/User';
import { ICreateUserDTO } from '../../useCases/User/CreateUser/CreateUserDTO';
import { IAuthenticationDTO } from '../../useCases/Authentication/AuthenticationDTO';

export interface IUserRepository {
  createAndSave(dto: ICreateUserDTO): Promise<void>;
  authenticate(dto: IAuthenticationDTO): Promise<User>;
}
