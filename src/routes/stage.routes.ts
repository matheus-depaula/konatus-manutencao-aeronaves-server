import { Router } from 'express';
import { isTokenValid } from '../middlewares/isTokenValid';
import { listStagesController } from '../useCases/Stage/ListStages';
import { createStageController } from '../useCases/Stage/CreateStage';

const router = Router();

router.get('/stage/:maintenanceId', isTokenValid, (req, res) =>
  listStagesController.handle(req, res)
);
router.post('/stage', isTokenValid, (req, res) => createStageController.handle(req, res));

export { router as stageRouter };
