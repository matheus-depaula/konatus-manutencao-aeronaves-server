import { Maintenance } from '../../entities/Maintenance';
import { IGetMaintenanceDTO } from '../../useCases/Maintenance/GetMaintenance/GetMaintenanceDTO';
import { ICreateMaintenanceDTO } from '../../useCases/Maintenance/CreateMaintenance/CreateMaintenanceDTO';
import { IFinishMaintenanceDTO } from '../../useCases/Maintenance/FinishMaintenance/FinishMaintenanceDTO';

export interface IMaintenanceRepository {
  createAndSave(dto: ICreateMaintenanceDTO): Promise<void>;
  listAll(): Promise<Maintenance[]>;
  findById(dto: IGetMaintenanceDTO): Promise<Maintenance>;
  finish(dto: IFinishMaintenanceDTO): Promise<void>;
}
