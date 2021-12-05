import { Maintenance } from '../../entities/Maintenance';
import { ICreateMaintenanceDTO } from '../../useCases/Maintenance/CreateMaintenance/CreateMaintenanceDTO';
import { IGetMaintenanceDTO } from '../../useCases/Maintenance/GetMaintenance/GetMaintenanceDTO';

export interface IMaintenanceRepository {
  createAndSave(dto: ICreateMaintenanceDTO): Promise<void>;
  listAll(): Promise<Maintenance[]>;
  findById(dto: IGetMaintenanceDTO): Promise<Maintenance>;
}
