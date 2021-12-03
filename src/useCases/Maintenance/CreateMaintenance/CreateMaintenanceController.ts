import { Request, Response } from 'express';
import { CreateMaintenanceUseCase } from './CreateMaintenanceUseCase';

export class CreateMaintenanceController {
  constructor(private createMaintenanceUseCase: CreateMaintenanceUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { description } = req.body;
    const { userId } = req;

    try {
      await this.createMaintenanceUseCase.execute({ description, userId });

      return res.status(201).json({ message: 'Manutenção criada.' });
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
