import { EntityRepository, getRepository } from 'typeorm';

import { User } from '../../entities/User';
import { Maintenance } from '../../entities/Maintenance';
import { IMaintenanceRepository } from './IMaintenanceRepository';
import { ICreateMaintenanceDTO } from '../../useCases/Maintenance/CreateMaintenance/CreateMaintenanceDTO';
import { IListMaintenanceDTO } from '../../useCases/Maintenance/ListMaintenances/ListMaintenancesDTO';

@EntityRepository(Maintenance)
class MaintenanceRepository implements IMaintenanceRepository {
  public async createAndSave(dto: ICreateMaintenanceDTO): Promise<void> {
    const repository = getRepository(Maintenance);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id: dto.userId } });

    if (!user) throw new Error('Usuário inválido.');

    const maintenance = repository.create({ ...dto, user });

    await repository.save(maintenance);
  }

  public async listByUser(dto: IListMaintenanceDTO): Promise<Maintenance[]> {
    const repository = getRepository(Maintenance);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id: dto.userId } });

    if (!user) throw new Error('Usuário inválido.');

    const maintenances = await repository.find({ where: { user: user } });

    return maintenances;
  }
}

const maintenanceRepository = new MaintenanceRepository();

export { maintenanceRepository };
