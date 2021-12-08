import { Request, Response } from 'express';

import { FinishMaintenanceUseCase } from './FinishMaintenanceUseCase';

export class FinishMaintenanceController {
  constructor(private finishMaintenanceUseCase: FinishMaintenanceUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const { userId } = req;

    try {
      await this.finishMaintenanceUseCase.execute({ id, userId });

      return res.status(200).send({ message: 'Manutenção finalizada.' });
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
