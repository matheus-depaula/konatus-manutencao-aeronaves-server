import { Request, Response } from 'express';
import { FinishStageUseCase } from './FinishStageUseCase';

export class FinishStageController {
  constructor(private finishStageUseCase: FinishStageUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { id, value, type } = req.body;

    try {
      await this.finishStageUseCase.execute({ id, value, type });

      return res.status(200).json({ message: 'Etapa finalizada.' });
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
