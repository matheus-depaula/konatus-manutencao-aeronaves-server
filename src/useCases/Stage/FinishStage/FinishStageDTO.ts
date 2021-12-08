import { StageType } from '../../../entities/Stage';

export interface IFinishStageDTO {
  id: string;
  value: string | number;
  type: StageType;
}
