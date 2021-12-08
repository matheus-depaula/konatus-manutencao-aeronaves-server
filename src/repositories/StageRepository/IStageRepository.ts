import { Stage } from '../../entities/Stage';
import { IListStagesDTO } from '../../useCases/Stage/ListStages/ListStagesDTO';
import { ICreateStageDTO } from '../../useCases/Stage/CreateStage/CreateStageDTO';
import { IFinishStageDTO } from '../../useCases/Stage/FinishStage/FinishStageDTO';

export interface IStageRepository {
  createAndSave(dto: ICreateStageDTO): Promise<void>;
  findByMaintenanceId(dto: IListStagesDTO): Promise<Stage[]>;
  finish(dto: IFinishStageDTO): Promise<void>;
}
