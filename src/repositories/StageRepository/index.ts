import { getRepository } from 'typeorm';

import { Stage } from '../../entities/Stage';
import { IStageRepository } from './IStageRepository';
import { Maintenance } from '../../entities/Maintenance';
import { IListStagesDTO } from '../../useCases/Stage/ListStages/ListStagesDTO';
import { ICreateStageDTO } from '../../useCases/Stage/CreateStage/CreateStageDTO';
import { IFinishStageDTO } from '../../useCases/Stage/FinishStage/FinishStageDTO';

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

    const stages = await repository.find({ where: { maintenance }, order: { createdAt: 'ASC' } });

    return stages;
  }

  public async finish(dto: IFinishStageDTO): Promise<void> {
    const repository = getRepository(Stage);

    let stage = await repository.findOne({ where: { id: dto.id } });

    if (!stage) throw new Error('Etapa inválida.');

    if (stage.type !== dto.type) throw new Error('Tipo incorreto.');

    if (stage.status === 1) throw new Error('Etapa já finalizada.');

    stage.value = dto.value;
    stage.status = 1;

    await repository.save(stage);
  }
}

const stageRepository = new StageRepository();

export { stageRepository };
