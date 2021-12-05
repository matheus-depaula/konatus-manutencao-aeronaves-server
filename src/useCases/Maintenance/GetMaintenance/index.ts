import { GetMaintenanceUseCase } from './GetMaintenanceUseCase';
import { GetMaintenanceController } from './GetMaintenanceController';
import { maintenanceRepository } from '../../../repositories/MaintenanceRepository';

const getMaintenanceUseCase = new GetMaintenanceUseCase(maintenanceRepository);
const getMaintenanceController = new GetMaintenanceController(getMaintenanceUseCase);

export { getMaintenanceUseCase, getMaintenanceController };
