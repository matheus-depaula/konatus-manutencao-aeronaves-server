import { Request, Response } from 'express';
import { Maintenance } from '../../../entities/Maintenance';
import { ListMaintenancesUseCase } from './ListMaintenancesUseCase';

export class ListMaintenancesController {
  constructor(private listMaintenanceUseCase: ListMaintenancesUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response<Maintenance[]>> {
    try {
      const maintenances = await this.listMaintenanceUseCase.execute();

      return res.json(maintenances);
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Erro inesperado.' });
    }
  }
}
