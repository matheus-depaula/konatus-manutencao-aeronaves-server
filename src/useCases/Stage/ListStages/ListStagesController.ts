import { Request, Response } from 'express';
import { Stage } from '../../../entities/Stage';
import { ListStagesUseCase } from './ListStagesUseCase';

export class ListStagesController {
  constructor(private listStagesUseCase: ListStagesUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response<Stage[]>> {
    const { maintenanceId } = req.params;

    try {
      const stages = await this.listStagesUseCase.execute({ maintenanceId });

      return res.json(stages);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
