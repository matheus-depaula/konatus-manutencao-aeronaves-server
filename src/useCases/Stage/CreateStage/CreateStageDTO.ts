import { StageType } from '../../../entities/Stage';

export interface ICreateStageDTO {
  description: string;
  type: StageType;
  maintenanceId: string;
}
