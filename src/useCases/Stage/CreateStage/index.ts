import { CreateStageUseCase } from './CreateStageUseCase';
import { CreateStageController } from './CreateStageController';
import { stageRepository } from '../../../repositories/StageRepository';

const createStageUseCase = new CreateStageUseCase(stageRepository);
const createStageController = new CreateStageController(createStageUseCase);

export { createStageUseCase, createStageController };
