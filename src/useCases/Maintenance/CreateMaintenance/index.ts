import { CreateMaintenanceUseCase } from './CreateMaintenanceUseCase';
import { CreateMaintenanceController } from './CreateMaintenanceController';
import { maintenanceRepository } from '../../../repositories/MaintenanceRepository';

const createMaintenanceUseCase = new CreateMaintenanceUseCase(maintenanceRepository);
const createMaintenanceController = new CreateMaintenanceController(createMaintenanceUseCase);

export { createMaintenanceUseCase, createMaintenanceController };
