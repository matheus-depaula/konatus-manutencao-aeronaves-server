import { ListMaintenancesUseCase } from './ListMaintenancesUseCase';
import { ListMaintenancesController } from './ListMaintenancesController';
import { maintenanceRepository } from '../../../repositories/MaintenanceRepository';

const listMaintenancesUseCase = new ListMaintenancesUseCase(maintenanceRepository);
const listMaintenancesController = new ListMaintenancesController(listMaintenancesUseCase);

export { listMaintenancesUseCase, listMaintenancesController };
