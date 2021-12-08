import { EntityRepository, getRepository } from 'typeorm';

import { User } from '../../entities/User';
import { Maintenance } from '../../entities/Maintenance';
import { IMaintenanceRepository } from './IMaintenanceRepository';
import { ICreateMaintenanceDTO } from '../../useCases/Maintenance/CreateMaintenance/CreateMaintenanceDTO';
import { IGetMaintenanceDTO } from '../../useCases/Maintenance/GetMaintenance/GetMaintenanceDTO';
import { IFinishMaintenanceDTO } from '../../useCases/Maintenance/FinishMaintenance/FinishMaintenanceDTO';

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
      .orderBy('s.createdAt', 'ASC')
      .getOne();

    return maintenance;
  }

  public async finish(dto: IFinishMaintenanceDTO): Promise<void> {
    const repository = getRepository(Maintenance);

    let maintenance = await repository.findOne({ where: { id: dto.id }, relations: ['user'] });

    if (!maintenance) throw new Error('Manutenção inválida.');

    if (maintenance.user.id !== dto.userId) throw new Error('Usuário não autorizado.');

    if (maintenance.status === 1) throw new Error('Manutenção já finalizada.');

    maintenance.status = 1;

    await repository.save(maintenance);
  }
}

const maintenanceRepository = new MaintenanceRepository();

export { maintenanceRepository };
