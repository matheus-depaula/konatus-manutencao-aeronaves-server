import { stageRepository } from '../../../repositories/StageRepository';
import { ListStagesController } from './ListStagesController';
import { ListStagesUseCase } from './ListStagesUseCase';

const listStagesUseCase = new ListStagesUseCase(stageRepository);
const listStagesController = new ListStagesController(listStagesUseCase);

export { listStagesUseCase, listStagesController };
