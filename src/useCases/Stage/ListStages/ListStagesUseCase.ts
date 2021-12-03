import { Stage } from '../../../entities/Stage';
import { IListStagesDTO } from './ListStagesDTO';
import { IStageRepository } from '../../../repositories/StageRepository/IStageRepository';

export class ListStagesUseCase {
  constructor(private stageRepository: IStageRepository) {}

  public async execute(dto: IListStagesDTO): Promise<Stage[]> {
    const stages = this.stageRepository.findByMaintenanceId(dto);

    return stages;
  }
}
