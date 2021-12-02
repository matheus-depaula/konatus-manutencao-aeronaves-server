import { Request, Response } from 'express';

import { User } from '../../../entities/User';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { login, password } = req.body;

    const user = new User();

    Object.assign(user, { login, password });

    try {
      await this.createUserUseCase.execute(user);

      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
