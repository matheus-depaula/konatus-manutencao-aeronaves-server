import { ICreateMaintenanceDTO } from './CreateMaintenanceDTO';
import { IMaintenanceRepository } from '../../../repositories/MaintenanceRepository/IMaintenanceRepository';

export class CreateMaintenanceUseCase {
  constructor(private maintenanceRepository: IMaintenanceRepository) {}

  async execute(dto: ICreateMaintenanceDTO): Promise<void> {
    const description = dto.description.trim();

    if (!description) throw new Error('Descrição inválida.');

    if (description.length < 4) throw new Error('Descrição deve ter pelo menos 4 caracteres.');

    await this.maintenanceRepository.createAndSave(dto);
  }
}
