import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { login, password } = req.body;

    try {
      await this.createUserUseCase.execute({ login, password });

      return res.status(201).json({ message: 'Usuário criado.' });
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
