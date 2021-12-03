import { Stage } from '../../entities/Stage';
import { IListStagesDTO } from '../../useCases/Stage/ListStages/ListStagesDTO';
import { ICreateStageDTO } from '../../useCases/Stage/CreateStage/CreateStageDTO';

export interface IStageRepository {
  createAndSave(dto: ICreateStageDTO): Promise<void>;
  findByMaintenanceId(dto: IListStagesDTO): Promise<Stage[]>;
}
