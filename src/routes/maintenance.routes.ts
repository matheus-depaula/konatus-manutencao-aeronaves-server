import { Router } from 'express';
import { isTokenValid } from '../middlewares/isTokenValid';
import { getMaintenanceController } from '../useCases/Maintenance/GetMaintenance';
import { listMaintenancesController } from '../useCases/Maintenance/ListMaintenances';
import { createMaintenanceController } from '../useCases/Maintenance/CreateMaintenance';
import { finishMaintenanceController } from '../useCases/Maintenance/FinishMaintenance';

const router = Router();

router.get('/maintenance', isTokenValid, (req, res) => listMaintenancesController.handle(req, res));
router.get('/maintenance/:id', isTokenValid, (req, res) =>
  getMaintenanceController.handle(req, res)
);

router.post('/maintenance', isTokenValid, (req, res) =>
  createMaintenanceController.handle(req, res)
);
router.put('/maintenance', isTokenValid, (req, res) =>
  finishMaintenanceController.handle(req, res)
);

export { router as maintenanceRouter };
