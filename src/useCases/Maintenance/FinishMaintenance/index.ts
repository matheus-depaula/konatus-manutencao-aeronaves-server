import { FinishMaintenanceUseCase } from './FinishMaintenanceUseCase';
import { FinishMaintenanceController } from './FinishMaintenanceController';
import { maintenanceRepository } from '../../../repositories/MaintenanceRepository';

const finishMaintenanceUseCase = new FinishMaintenanceUseCase(maintenanceRepository);
const finishMaintenanceController = new FinishMaintenanceController(finishMaintenanceUseCase);

export { finishMaintenanceUseCase, finishMaintenanceController };
