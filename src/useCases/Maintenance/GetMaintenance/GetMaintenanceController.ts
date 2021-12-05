import { Request, Response } from 'express';
import { Maintenance } from '../../../entities/Maintenance';
import { GetMaintenanceUseCase } from './GetMaintenanceUseCase';

export class GetMaintenanceController {
  constructor(private getMaintenanceUseCase: GetMaintenanceUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response<Maintenance[]>> {
    const { id } = req.params;

    try {
      const maintenances = await this.getMaintenanceUseCase.execute({ id });

      return res.json(maintenances);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
