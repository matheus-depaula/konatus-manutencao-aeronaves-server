import { Router } from 'express';

const commonRouter = Router();

commonRouter.get('/', (req, res) => res.send('Hello World'));

export { commonRouter };
