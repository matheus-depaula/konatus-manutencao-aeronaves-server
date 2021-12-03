import { Maintenance } from '../../entities/Maintenance';
import { ICreateMaintenanceDTO } from '../../useCases/Maintenance/CreateMaintenance/CreateMaintenanceDTO';
import { IListMaintenanceDTO } from '../../useCases/Maintenance/ListMaintenances/ListMaintenancesDTO';

export interface IMaintenanceRepository {
  createAndSave(dto: ICreateMaintenanceDTO): Promise<void>;
  listByUser(dto: IListMaintenanceDTO): Promise<Maintenance[]>;
}
