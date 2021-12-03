import { ICreateMaintenanceDTO } from './CreateMaintenanceDTO';
import { IMaintenanceRepository } from '../../../repositories/MaintenanceRepository/IMaintenanceRepository';

export class CreateMaintenanceUseCase {
  constructor(private maintenanceRepository: IMaintenanceRepository) {}

  async execute(dto: ICreateMaintenanceDTO): Promise<void> {
    await this.maintenanceRepository.createAndSave(dto);
  }
}
