import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { login, password } = req.body;

    try {
      const token = await this.authenticateUserUseCase.execute({ login, password });

      return res.set('Authorization', token).status(200).json({ login });
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
