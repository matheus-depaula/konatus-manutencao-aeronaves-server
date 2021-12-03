import { getRepository } from 'typeorm';

import { Stage } from '../../entities/Stage';
import { IStageRepository } from './IStageRepository';
import { Maintenance } from '../../entities/Maintenance';
import { ICreateStageDTO } from '../../useCases/Stage/CreateStage/CreateStageDTO';
import { IListStagesDTO } from '../../useCases/Stage/ListStages/ListStagesDTO';

class StageRepository implements IStageRepository {
  public async createAndSave(dto: ICreateStageDTO): Promise<void> {
    const repository = getRepository(Stage);
    const maintenanceRepository = getRepository(Maintenance);

    const maintenance = await maintenanceRepository.findOne({ where: { id: dto.maintenanceId } });

    if (!maintenance) throw new Error('Manutenção inválida.');

    const stage = repository.create({ ...dto, maintenance });

    await repository.save(stage);
  }

  public async findByMaintenanceId(dto: IListStagesDTO): Promise<Stage[]> {
    const repository = getRepository(Stage);
    const maintenanceRepository = getRepository(Maintenance);

    const maintenance = await maintenanceRepository.findOne({ where: { id: dto.maintenanceId } });

    if (!maintenance) throw new Error('Manutenção inválida.');

    const stages = await repository.find({ where: { maintenance } });

    return stages;
  }
}

const stageRepository = new StageRepository();

export { stageRepository };
