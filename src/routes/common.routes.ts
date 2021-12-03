import { Router } from 'express';
import { authenticationController } from '../useCases/Authentication';

const router = Router();

router.post('/auth', (req, res) => authenticationController.handle(req, res));

export { router as commonRouter };
