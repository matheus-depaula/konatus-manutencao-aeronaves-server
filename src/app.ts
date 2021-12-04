import './database';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { userRouter } from './routes/user.routes';
import { commonRouter } from './routes/common.routes';
import { maintenanceRouter } from './routes/maintenance.routes';
import { stageRouter } from './routes/stage.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(commonRouter);
app.use(userRouter);
app.use(maintenanceRouter);
app.use(stageRouter);

export { app };
