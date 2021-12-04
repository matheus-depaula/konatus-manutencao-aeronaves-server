import { Request, Response } from 'express';
import { AuthenticationUseCase } from './AuthenticationUseCase';

interface IRes {
  token: string;
}

export class AuthenticationController {
  constructor(private authenticateUserUseCase: AuthenticationUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response<IRes>> {
    const { login, password } = req.body;

    try {
      const token = await this.authenticateUserUseCase.execute({ login, password });

      return res.set('Authorization', token).status(200).json({ token });
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
