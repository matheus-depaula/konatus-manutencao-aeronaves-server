import { IFinishMaintenanceDTO } from './FinishMaintenanceDTO';
import { IMaintenanceRepository } from '../../../repositories/MaintenanceRepository/IMaintenanceRepository';

export class FinishMaintenanceUseCase {
  constructor(private finishMaintenanceRepository: IMaintenanceRepository) {}

  public async execute(dto: IFinishMaintenanceDTO): Promise<void> {
    await this.finishMaintenanceRepository.finish(dto);
  }
}
