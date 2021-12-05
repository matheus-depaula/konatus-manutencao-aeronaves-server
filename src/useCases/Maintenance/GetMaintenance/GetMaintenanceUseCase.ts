import { IGetMaintenanceDTO } from './GetMaintenanceDTO';
import { Maintenance } from '../../../entities/Maintenance';
import { IMaintenanceRepository } from '../../../repositories/MaintenanceRepository/IMaintenanceRepository';

export class GetMaintenanceUseCase {
  constructor(private maintenanceRepository: IMaintenanceRepository) {}

  public async execute(dto: IGetMaintenanceDTO): Promise<Maintenance> {
    const maintenance = await this.maintenanceRepository.findById(dto);

    return maintenance;
  }
}
