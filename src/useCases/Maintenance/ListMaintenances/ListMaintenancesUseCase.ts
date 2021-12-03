import { Maintenance } from '../../../entities/Maintenance';
import { IListMaintenanceDTO } from './ListMaintenancesDTO';
import { IMaintenanceRepository } from '../../../repositories/MaintenanceRepository/IMaintenanceRepository';

export class ListMaintenancesUseCase {
  constructor(private maintenanceRepository: IMaintenanceRepository) {}

  public async execute(dto: IListMaintenanceDTO): Promise<Maintenance[]> {
    const maintenances = await this.maintenanceRepository.listByUser(dto);

    return maintenances;
  }
}
