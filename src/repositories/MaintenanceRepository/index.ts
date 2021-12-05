import { EntityRepository, getRepository } from 'typeorm';

import { User } from '../../entities/User';
import { Maintenance } from '../../entities/Maintenance';
import { IMaintenanceRepository } from './IMaintenanceRepository';
import { ICreateMaintenanceDTO } from '../../useCases/Maintenance/CreateMaintenance/CreateMaintenanceDTO';
import { IGetMaintenanceDTO } from '../../useCases/Maintenance/GetMaintenance/GetMaintenanceDTO';

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

  public async listAll(): Promise<Maintenance[]> {
    const repository = getRepository(Maintenance);

    const maintenances = await repository
      .createQueryBuilder('m')
      .select(['m.id', 'm.description', 'm.status', 'm.createdAt', 'user.login'])
      .leftJoin('m.user', 'user')
      .orderBy('m.createdAt', 'DESC')
      .getMany();

    return maintenances;
  }

  public async findById(dto: IGetMaintenanceDTO): Promise<Maintenance> {
    const repository = getRepository(Maintenance);

    const maintenance = await repository
      .createQueryBuilder('m')
      .where({ id: dto.id })
      .select(['m.id', 'm.description', 'm.status', 'm.createdAt', 'u.id', 'u.login', 's'])
      .leftJoin('m.user', 'u')
      .leftJoin('m.stages', 's')
      .getOne();

    return maintenance;
  }
}

const maintenanceRepository = new MaintenanceRepository();

export { maintenanceRepository };
