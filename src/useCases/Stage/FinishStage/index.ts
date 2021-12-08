import { FinishStageUseCase } from './FinishStageUseCase';
import { FinishStageController } from './FinishStageController';
import { stageRepository } from '../../../repositories/StageRepository';

const finishStageUseCase = new FinishStageUseCase(stageRepository);
const finishStageController = new FinishStageController(finishStageUseCase);

export { finishStageUseCase, finishStageController };
