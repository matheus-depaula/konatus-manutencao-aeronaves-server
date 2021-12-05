import { Maintenance } from '../../../entities/Maintenance';
import { IMaintenanceRepository } from '../../../repositories/MaintenanceRepository/IMaintenanceRepository';

export class ListMaintenancesUseCase {
  constructor(private maintenanceRepository: IMaintenanceRepository) {}

  public async execute(): Promise<Maintenance[]> {
    const maintenances = await this.maintenanceRepository.listAll();

    return maintenances;
  }
}
