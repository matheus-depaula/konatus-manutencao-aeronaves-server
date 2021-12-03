import { StageType } from '../../../entities/Stage';

export interface ICreateStageDTO {
  description: string;
  type: StageType;
  value: string | number;
  maintenanceId: string;
}
