import { Request, Response } from 'express';
import { ICreateStageDTO } from './CreateStageDTO';
import { CreateStageUseCase } from './CreateStageUseCase';

export class CreateStageController {
  constructor(private createStageUseCase: CreateStageUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { description, type, maintenanceId } = req.body as ICreateStageDTO;

    try {
      await this.createStageUseCase.execute({ description, type, maintenanceId });

      return res.status(201).json({ message: 'Etapa criada.' });
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
